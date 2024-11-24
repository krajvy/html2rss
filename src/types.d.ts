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
  guid?: string;
}

interface Feed {
  items: FeedItem[];
  channel: FeedChannel;
}
