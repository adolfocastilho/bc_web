import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* public assets begin */}
          <link rel="preload" href="/css/plugins/bootstrap-grid.css" as="style" />
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" media="print" onLoad="this.media='all'" />

          <link rel="preload" href="/css/plugins/font-awesome.min.css" as="style" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" media="print" onLoad="this.media='all'" />

          <link rel="preload" href="/css/plugins/swiper.min.css" as="style" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" media="print" onLoad="this.media='all'" />

          <noscript>
            <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
            <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
            <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          </noscript>
          {/* public assets end */}
          <link rel="icon" href="/img/icons/icone_bechange.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
