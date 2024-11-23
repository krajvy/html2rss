import * as fs from 'fs';

export const generateFile = async (
  fileName: string,
  fileContent: string,
  callback: FileWriteCallback,
): Promise<void> => {
  fs.writeFile(fileName, fileContent, 'utf8', callback);
};
