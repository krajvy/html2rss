import { USER_AGENT, URLS } from './const.js';
import { generateFeed } from './generator/generateFeed.js';
import { generateFile } from './generator/generateFile.js';
import { generateStats } from './generator/generateStats.js';
import { getDataFromHTML } from './parser/getDataFromHTML.js';

const main = async () => {
  const promises: Promise<string>[] = [];

  const headers = new Headers();
  headers.set('User-Agent', USER_AGENT);

  for (const record of URLS) {
    const request = new Request(record.url, {
      method: 'GET',
      headers: headers,
    });

    promises.push(
      new Promise((resolve, reject) => {
        fetch(request)
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

  return await Promise.allSettled(promises).then((results) => {
    results
      .filter((result) => result.status === 'rejected')
      .forEach((result) => {
        console.error((result as PromiseRejectedResult).reason);
      });

    generateStats('./build');
  });
};

await main();
