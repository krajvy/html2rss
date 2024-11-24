interface UrlRow {
  title: string;
  slug: string;
  url: string;
}

interface FeedChannel {
  title: string;
  description: string;
  link: string;
}

interface FeedItem {
  title: string;
  description?: string;
  link: string;
  datetime?: string;
}

interface Feed {
  items: FeedItem[];
  channel: FeedChannel;
}

interface FileWriteCallback {
  (err: NodeJS.ErrnoException | null): void;
}