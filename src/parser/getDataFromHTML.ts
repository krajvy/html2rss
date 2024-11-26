import { parseDataFromSkolaSeberovBlog } from './parseDataFromSkolaSeberovBlog.js';
import { parseDataFromSkolaSeberovPatecniPozdrav } from './parseDataFromSkolaSeberovPatecniPozdrav.js';

export const getDataFromHTML = (record: UrlRow, source: string): Feed => {
  switch (record.slug) {
    case 'skolaseberov-patecnipozdrav':
      return parseDataFromSkolaSeberovPatecniPozdrav(record, source);
      break;
    case 'skolaseberov-blog':
      return parseDataFromSkolaSeberovBlog(record, source);
      break;
    default:
      break;
  }

  return {
    channel: {
      title: record.title,
      description: record.slug,
      link: record.url,
    },
    items: [],
  };
};
