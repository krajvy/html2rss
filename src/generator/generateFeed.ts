import { JSDOM } from 'jsdom';
import { getImageContentTypeFromUrl } from '../utils/getImageContentTypeFromUrl.js';

export const getRfc822Date = (date: Date | string | null = null): string => {
  let myDate = new Date();

  if (date !== null) {
    myDate = new Date(date);
  }
  return myDate.toUTCString();
};

export const generateFeed = (feedData: Feed): string => {
  const rfc822date = getRfc822Date();

  if (feedData.items.length > 0) {
    const dom = new JSDOM();
    const document = dom.window.document.implementation.createDocument(
      '',
      '',
      null,
    );

    // <rss version="2.0">
    const rss = document.createElement('rss');
    rss.setAttribute('version', '2.0');
    // <channel>
    const channel = document.createElement('channel');
    // <title>
    const title = document.createElement('title');
    title.textContent = feedData.channel.title;
    channel.appendChild(title);
    // <link>
    const link = document.createElement('link');
    link.textContent = feedData.channel.link;
    channel.appendChild(link);
    // <description>
    const description = document.createElement('description');
    description.textContent = feedData.channel.description;
    channel.appendChild(description);
    // <language>
    const language = document.createElement('language');
    language.textContent = 'cs';
    channel.appendChild(language);
    // <pubDate>
    const pubDate = document.createElement('pubDate');
    pubDate.textContent = rfc822date;
    channel.appendChild(pubDate);
    // <lastBuildDate>
    const lastBuildDate = document.createElement('lastBuildDate');
    lastBuildDate.textContent = rfc822date;
    channel.appendChild(lastBuildDate);

    feedData.items.map((feedItem) => {
      // <item>
      const item = document.createElement('item');
      // <title>
      const itemTitle = document.createElement('title');
      itemTitle.textContent = feedItem.title;
      item.appendChild(itemTitle);
      // <description>
      const itemDescription = document.createElement('description');
      itemDescription.textContent = feedItem.description
        ? feedItem.description
        : feedItem.title;
      item.appendChild(itemDescription);
      // <link>
      const itemLink = document.createElement('link');
      itemLink.textContent = feedItem.link;
      item.appendChild(itemLink);
      // <pubDate>
      if (feedItem.datetime) {
        const itemPubDate = document.createElement('pubDate');
        itemPubDate.textContent = getRfc822Date(feedItem.datetime);
        item.appendChild(itemPubDate);
      }
      // <guid isPermaLink="false">
      if (feedItem.guid) {
        const itemGuid = document.createElement('guid');
        itemGuid.setAttribute('isPermaLink', 'false');
        itemGuid.textContent = feedItem.guid;
        item.appendChild(itemGuid);
      }

      // <enclosure url="" type="image/jpeg" />
      if (feedItem.image) {
        const itemEnclosure = document.createElement('enclosure');
        itemEnclosure.setAttribute('url', feedItem.image);
        itemEnclosure.setAttribute(
          'type',
          getImageContentTypeFromUrl(feedItem.image),
        );
        item.appendChild(itemEnclosure);
      }

      // <author>
      if (feedItem.author) {
        const itemAuthor = document.createElement('author');
        itemAuthor.textContent = feedItem.author;
        item.appendChild(itemAuthor);
      }

      // Append item to channel
      channel.appendChild(item);
    });

    // Append channel to rss
    rss.appendChild(channel);
    document.appendChild(rss);

    // Get document string
    const root = document.createElement('root');
    root.appendChild(rss);
    return `<?xml version="1.0" encoding="UTF-8"?>\n${root.innerHTML}`;
  }
  return '';
};
