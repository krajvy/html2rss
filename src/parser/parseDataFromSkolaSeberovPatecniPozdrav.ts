import { JSDOM } from 'jsdom';
import { md5 } from '../utils/md5.js';

export const parseDataFromSkolaSeberovPatecniPozdrav = (
  record: UrlRow,
  source: string,
): Feed => {
  const dom = new JSDOM(source);

  const channelTitle = dom.window.document.querySelector('header h1');

  const channel: FeedChannel = {
    title: record.title,
    description: channelTitle?.textContent || record.slug,
    link: record.url,
  };

  const items: FeedItem[] = [];

  const records = dom.window.document.querySelectorAll(
    'main#text10_main .compositeInner .erte-text-inner p a',
  );

  records.forEach((element) => {
    const link = element.getAttribute('href') || '';

    items.push({
      title: (element.textContent || '').trim(),
      link: link,
      guid: md5(link),
    });
  });

  return {
    channel,
    items,
  };
};
