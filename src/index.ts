import { URLS } from './const.js';
import { generateFeed } from './generator/generateFeed.js';
import { generateFile } from './generator/generateFile.js';
import { generateStats } from './generator/generateStats.js';
import { getDataFromHTML } from './parser/getDataFromHTML.js';

const main = async () => {
  const promises: Promise<string>[] = [];

  for (const record of URLS) {
    promises.push(
      new Promise((resolve, reject) => {
        fetch(record.url)
          .then(async (response: Response) => {
            if (!response.ok) {
              throw new Error(
                `Error while fetching HTML file from '${record.url}'! Response status: ${response.status}`,
              );
            }

            return await response.text();
          })
          .then((source) => {
            return generateFeed(getDataFromHTML(record, source));
          })
          .then((rssFeed) => {
            if (rssFeed !== '') {
              generateFile(`./build/${record.slug}.xml`, rssFeed);

              resolve(rssFeed);
            } else {
              throw new Error(
                `Cannnot create output RSS for '${record.slug}': Empty file content!`,
              );
            }
          })
          .catch((reason) => {
            reject(reason);
          });
      }),
    );
  }

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then((feed) => {
        generateStats('./build');

        resolve(feed);
      })
      .catch((error) => {
        console.error(error);

        reject(error);
      });
  });
};

await main();
