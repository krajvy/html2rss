import { generateFeed, getRfc822Date } from './generateFeed.js';

describe('Should generate RSS feed with given data', () => {
  const channelData: FeedChannel = {
    title: 'Test',
    description: 'This is testing.',
    link: 'https://krajvy.github.io/',
  };

  test('Empty items passed - should return empty string', () => {
    const feedData: Feed = {
      items: [],
      channel: channelData,
    };

    const result = generateFeed(feedData);
    const expectation = '';

    expect(result).toStrictEqual(expectation);
  });

  test('Basic items passed - should return RSS feed', () => {
    const feedData: Feed = {
      items: [
        {
          title: 'Some title',
          link: 'https://krajvy.github.io/dummy/some-title',
        },
        {
          title: 'Some other title',
          description: 'Some description',
          link: 'https://krajvy.github.io/dummy/some-other-title',
        },
        {
          title: 'Some different title',
          description: 'Some different description',
          link: 'https://krajvy.github.io/dummy/some-different-title',
          datetime: 'Mon Jan 10 2022 12:35:33 GMT+0200',
        },
        {
          title: 'Some other different title',
          description: 'Some other different description',
          link: 'https://krajvy.github.io/dummy/some-other-different-title',
          datetime: 'Thu Jul 08 2010 22:17:48 GMT+0100',
          guid: 'abc123def456',
        },
        {
          title: 'Title with image',
          description: 'Description with image',
          link: 'https://krajvy.github.io/dummy/title-with-image',
          image: 'https://krajvy.github.io/folder/image.png',
        },
      ],
      channel: channelData,
    };

    const rfc822date = getRfc822Date();
    const result = generateFeed(feedData);
    const expectation = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\"><channel><title>Test</title><link>https://krajvy.github.io/</link><description>This is testing.</description><language>cs</language><pubDate>${rfc822date}</pubDate><lastBuildDate>${rfc822date}</lastBuildDate><item><title>Some title</title><description>Some title</description><link>https://krajvy.github.io/dummy/some-title</link></item><item><title>Some other title</title><description>Some description</description><link>https://krajvy.github.io/dummy/some-other-title</link></item><item><title>Some different title</title><description>Some different description</description><link>https://krajvy.github.io/dummy/some-different-title</link><pubDate>Mon, 10 Jan 2022 10:35:33 GMT</pubDate></item><item><title>Some other different title</title><description>Some other different description</description><link>https://krajvy.github.io/dummy/some-other-different-title</link><pubDate>Thu, 08 Jul 2010 21:17:48 GMT</pubDate><guid isPermaLink=\"false\">abc123def456</guid></item><item><title>Title with image</title><description>Description with image</description><link>https://krajvy.github.io/dummy/title-with-image</link><enclosure url=\"https://krajvy.github.io/folder/image.png\" type=\"image/png\"/></item></channel></rss>`;

    expect(result).toStrictEqual(expectation);
  });
});
