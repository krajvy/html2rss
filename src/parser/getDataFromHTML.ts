import { parseDataFromSkolaSeberovPatecniPozdrav } from './parseDataFromSkolaSeberovPatecniPozdrav.js';

export const getDataFromHTML = (record: UrlRow, source: string): FeedItem[] => {
  switch (record.slug) {
    case 'skolaseberov-patecnipozdrav':
      return parseDataFromSkolaSeberovPatecniPozdrav(source);
      break;
    case 'skolaseberov-blog':
      break;
    default:
      break;
  }
  return [];
};
