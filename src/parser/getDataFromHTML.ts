import { parseDataFromKameniceZpravodaj } from './parseDataFromKameniceZpravodaj.js';
import { parseDataFromMtbikerClanky } from './parseDataFromMtbikerClanky.js';
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
    case 'kamenice-zpravodaj':
      return parseDataFromKameniceZpravodaj(record, source);
      break;
    case 'mtbiker-clanky':
      return parseDataFromMtbikerClanky(record, source);
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
