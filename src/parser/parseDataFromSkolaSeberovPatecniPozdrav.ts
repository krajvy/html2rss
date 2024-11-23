import { JSDOM } from 'jsdom';

export const parseDataFromSkolaSeberovPatecniPozdrav = (
  source: string,
): FeedItem[] => {
  const items: FeedItem[] = [];

  const dom = new JSDOM(source);
  const records = dom.window.document.querySelectorAll(
    'main#text10_main .compositeInner .erte-text-inner p a',
  );

  records.forEach((element) => {
    items.push({
      title: element.textContent || '',
      link: element.getAttribute('href') || '',
    });
  });

  return items;
};
