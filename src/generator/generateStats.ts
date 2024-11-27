import * as fs from 'fs';

export const generateStats = (path: string): boolean => {
  const stats: Array<String> = [
    '# HTML2RSS Generated stats',
    '',
    '| Filename | Modified |',
    '| -------- | -------- |',
  ];
  const fileName = `${path}/index.md`;

  try {
    fs.readdirSync(path).forEach((file) => {
      if (file.startsWith('.')) {
        return;
      }

      const fileStats = fs.statSync(`${path}/${file}`);

      stats.push(`| ${file} | ${fileStats.mtime} |`);
    });
    stats.push('');

    fs.writeFileSync(fileName, stats.join(`\n`), 'utf8');

    console.info(`Info: Stats file '${fileName}' sucessfully generated.`);

    return true;
  } catch (problem) {
    console.error(`Cannot generate stats file: ${problem}`);
    return false;
  }
};
