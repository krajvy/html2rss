import { JSDOM } from 'jsdom';
import moment from 'moment-timezone';
import { md5 } from '../utils/md5.js';

export const parseDataFromMtbikerClanky = (
  record: UrlRow,
  source: string,
): Feed => {
  const dom = new JSDOM(source);

  const channelTitle = dom.window.document.querySelector('h1.h3');

  const channel: FeedChannel = {
    title: record.title,
    description: channelTitle?.textContent || record.slug,
    link: record.url,
  };

  const items: FeedItem[] = [];

  const records = dom.window.document.querySelectorAll(
    'div#clankyListRow div.box-article',
  );

  records.forEach((element) => {
    const title = element.querySelector('div.h3 a')?.textContent || '';
    const link = element.querySelector('div.h3 a')?.getAttribute('href') || '';
    const description = element.querySelector('div.perex')?.textContent || '';
    const date =
      element.querySelector(
        'div.metadata-line span.metadata-main span.metadata-date',
      )?.textContent || '';
    const image =
      element.querySelector('a.box-article-image img')?.getAttribute('src') ||
      '';

    const authors = [];
    const badges = element.querySelectorAll(
      'a.box-article-image span.box-article-badges span.badge',
    );
    badges.forEach((badge) => {
      authors.push(badge.textContent?.trim());
    });

    const author =
      element.querySelector(
        'div.metadata-line span.metadata-main span.metadata-username a',
      )?.textContent || '';
    if (author.trim() !== '') {
      authors.push(author.trim());
    }

    // dnes, včera, předevčírem
    let datetime = moment(`${date} 04:00 +0100`, 'D. M. YYYY HH:mm Z', true);
    if (!datetime.isValid()) {
      switch (date.toLowerCase()) {
        case 'dnes':
          datetime = moment('04:00 +0100', 'HH:mm Z');
          break;
        case 'včera':
          datetime = moment('04:00 +0100', 'HH:mm Z').subtract(1, 'day');
          break;
        case 'předevčírem':
          datetime = moment('04:00 +0100', 'HH:mm Z').subtract(2, 'day');
          break;
      }
    }

    items.push({
      title: title.trim(),
      link: link.trim(),
      description: description.trim(),
      datetime: datetime.tz('Europe/Prague').toString(),
      image: image.trim(),
      author: authors.join(', '),
      guid: md5(link),
    });
  });

  return {
    channel,
    items,
  };
};
