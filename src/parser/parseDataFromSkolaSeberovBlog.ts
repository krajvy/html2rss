import { JSDOM } from 'jsdom';
import moment from 'moment-timezone';
import { md5 } from '../utils/md5.js';

export const parseDataFromSkolaSeberovBlog = (
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

  const domain = 'https://skolaseberov.edupage.org';
  const items: FeedItem[] = [];

  const records = dom.window.document.querySelectorAll(
    'section ul[id="text8_Blog_1"] li[class~="skgdLi"]',
  );

  records.forEach((element) => {
    const subElement = element.querySelector('div ul li:nth-child(2)');
    const title =
      subElement?.querySelector('ul li:nth-child(1)>a h3')?.textContent || '';
    let link =
      subElement?.querySelector('ul li:nth-child(1)>a')?.getAttribute('href') ||
      '';
    const description =
      subElement?.querySelector('ul li:nth-child(3)>div')?.textContent || '';
    const datetime =
      subElement?.querySelector('ul li:nth-child(2)>div>span')?.textContent ||
      '';

    if (link.indexOf(domain) === -1) {
      link = `${domain}${link}`;
    }

    let image =
      element
        .querySelector('div ul li:nth-child(1) ul li a img')
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
      description: description.trim(),
      datetime: moment(`${datetime} +0100`, 'DD.MM.YYYY HH:mm Z', true)
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
