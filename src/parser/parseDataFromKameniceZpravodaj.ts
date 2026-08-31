import { JSDOM } from 'jsdom';
import moment from 'moment-timezone';
import { md5 } from '../utils/md5.js';

export const parseDataFromKameniceZpravodaj = (
  record: UrlRow,
  source: string,
): Feed => {
  const dom = new JSDOM(source);

  const channel: FeedChannel = {
    title: record.title,
    description: record.slug,
    link: record.url,
  };

  const domain = 'https://www.kamenice.cz';
  const items: FeedItem[] = [];

  const records = dom.window.document.querySelectorAll(
    'article.article div.article__body div.article__articles > ul.list > li.list__item',
  );

  records.forEach((element) => {
    const title =
      element.querySelector('article a.document__link h3')?.textContent || '';
    let link =
      element.querySelector('article a.document__link')?.getAttribute('href') ||
      '';
    const datetime =
      element.querySelector('article time.document__date')?.textContent || '';

    if (link.indexOf(domain) === -1) {
      link = `${domain}${link}`;
    }

    let image =
      element
        .querySelector('article a.document__link figure.document__image img')
        ?.getAttribute('src') || '';
    if (image && image.indexOf('http') === -1) {
      if (image.indexOf('//') === 0) {
        image = `https:${image}`;
      } else {
        image = `${domain}${image}`;
      }
    }

    items.push({
      title: title.trim(),
      link: link.trim(),
      datetime: moment(`${datetime} 06:00 +0100`, 'D. M. YYYY HH:mm Z', true)
        .tz('Europe/Prague')
        .toString(),
      image: image.trim(),
      guid: md5(link),
    });
  });

  return {
    channel,
    items,
  };
};
