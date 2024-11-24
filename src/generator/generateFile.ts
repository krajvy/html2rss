import * as fs from 'fs';

export const generateFile = (
  fileName: string,
  fileContent: string,
): boolean => {
  try {
    fs.writeFileSync(fileName, fileContent, 'utf8');

    console.info(`Info: RSS feed '${fileName}' sucessfully generated.`);

    return true;
  } catch (problem) {
    console.error(`Cannot generate RSS feed file: ${problem}`);
    return false;
  }
};
