import { URL } from 'node:url';

export const getImageContentTypeFromUrl = (url: string): string => {
  const parsedUrl = new URL(url);
  const extension = parsedUrl.pathname.split('.')[1];

  switch (extension) {
    case 'apng':
      return 'image/apng';
      break;
    case 'avif':
      return 'image/avif';
      break;
    case 'gif':
      return 'image/gif';
      break;
    case 'jpg':
    case 'jpeg':
    case 'jpe':
    case 'jif':
    case 'jfif':
      return 'image/jpeg';
      break;
    case 'png':
      return 'image/png';
      break;
    case 'svg':
      return 'image/svg+xml';
      break;
    case 'webp':
      return 'image/webp';
      break;
  }

  return 'image/jpeg';
};
