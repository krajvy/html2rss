import { URLS } from './const.js';
import { generateFeed } from './generator/generateFeed.js';
import { generateFile } from './generator/generateFile.js';
import { generateStats } from './generator/generateStats.js';
import { getDataFromHTML, getChannelInfo } from './parser/index.js';

const main = async () => {
  for await (const record of URLS) {
    await fetch(record.url)
      .then(async (response: Response) => {
        if (!response.ok) {
          throw new Error(
            `Error while fetching HTML file from '${record.url}'! Response status: ${response.status}`,
          );
        }

        return await response.text();
      })
      .then((source) => {
        return generateFeed({
          channel: getChannelInfo(record, source),
          items: getDataFromHTML(record, source),
        });
      })
      .then((rssFeed) => {
        if (rssFeed !== '') {
          generateFile(`./build/${record.slug}.xml`, rssFeed);
        } else {
          throw new Error(
            `Cannnot create output RSS for '${record.slug}': Empty file content!`,
          );
        }
      })
      .catch((reason) => {
        console.error(reason);
      });
  }

  generateStats('./build');
};

await main();
