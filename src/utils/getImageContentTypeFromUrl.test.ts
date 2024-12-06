import { getImageContentTypeFromUrl } from './getImageContentTypeFromUrl';

describe('Should return correct content-type from given URL', () => {
  const testSuite = [
    {
      url: 'https://krajvy.github.io/folder/image.apng',
      expectation: 'image/apng',
    },
    {
      url: 'https://krajvy.github.io/folder/image.avif',
      expectation: 'image/avif',
    },
    {
      url: 'https://krajvy.github.io/folder/image.gif',
      expectation: 'image/gif',
    },
    {
      url: 'https://krajvy.github.io/folder/image.jpg',
      expectation: 'image/jpeg',
    },
    {
      url: 'https://krajvy.github.io/folder/image.jpeg',
      expectation: 'image/jpeg',
    },
    {
      url: 'https://krajvy.github.io/folder/image.jpe',
      expectation: 'image/jpeg',
    },
    {
      url: 'https://krajvy.github.io/folder/image.jif',
      expectation: 'image/jpeg',
    },
    {
      url: 'https://krajvy.github.io/folder/image.jfif',
      expectation: 'image/jpeg',
    },
    {
      url: 'https://krajvy.github.io/folder/image.png',
      expectation: 'image/png',
    },
    {
      url: 'https://krajvy.github.io/folder/image.svg',
      expectation: 'image/svg+xml',
    },
    {
      url: 'https://krajvy.github.io/folder/image.webp',
      expectation: 'image/webp',
    },
    {
      url: 'https://krajvy.github.io/folder/image.other',
      expectation: 'image/jpeg',
    },
  ];

  for (const row of testSuite) {
    test(`Test URL "${row.url}" equals "${row.expectation}"`, () => {
      const result = getImageContentTypeFromUrl(row.url);
      expect(result).toStrictEqual(row.expectation);
    });
  }
});
