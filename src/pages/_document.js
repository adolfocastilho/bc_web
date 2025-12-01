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

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

          {/* public assets begin */}
          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          {/* public assets end */}
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
