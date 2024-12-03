import { JSDOM } from 'jsdom';
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

  const domain = 'https://www.obeckamenice.cz';
  const items: FeedItem[] = [];

  const records = dom.window.document.querySelectorAll(
    'div.events-list div.item',
  );

  records.forEach((element) => {
    const title = element.querySelector('h2 a')?.textContent || '';
    let link = element.querySelector('h2 a')?.getAttribute('href') || '';

    if (link.indexOf(domain) === -1) {
      link = `${domain}${link}`;
    }

    items.push({
      title: title.trim(),
      link: link.trim(),
      guid: md5(link),
    });
  });

  return {
    channel,
    items,
  };
};
