import { JSDOM } from 'jsdom';

export const getChannelInfo = (record: UrlRow, source: string): FeedChannel => {
  const dom = new JSDOM(source);
  const title = dom.window.document.querySelector('header h1');

  return {
    title: title?.textContent || record.title,
    description: title?.textContent ? record.title : record.slug,
    link: record.url,
  };
};
