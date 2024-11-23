# HTML2RSS convertor

Tool for HTML pages (which are not supporting RSS feed) to convert its content to RSS XML for basic RSS reader apps.

The story begins with many pages without possibility of RSS feed, that are important for me. Until this project was born, the only solution was look on those pages by naked eye to determine if there is some new content. Then copy-paste to reading pipeline. This process is very time consuming and ineffective.

This "magic" tool should fix that ;) .

## Inside this tool

### Configuration

Configuration which HTML page shoudl be downloaded is in `src/const.ts` in `URLS` constant.

The row of input should have `title` (for title in XML), `slug` (for output XML) and `url` (of HTML page).

### Manual run

Can be runned by command:

```bash
npm run start
```

which runs build and then generate (download and create RSS XML).

### Automatic run

All should be runned automatically by GH Actions by CRON, or by publishing a release of this tool.

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/krajvy/html2rss/issues) or send me an e-mail at [krajvy@gmail.com](mailto:krajvy@gmail.com).

## License

Nearest Coordinates is published under the [MIT license](./LICENSE).
