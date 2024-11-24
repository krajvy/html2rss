import * as crypto from 'crypto';

export const md5 = (what: string): string =>
  crypto.createHash('md5').update(what).digest('hex');
