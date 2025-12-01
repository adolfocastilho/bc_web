import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

//import '../styles/scss/style-dark.scss';
import '../styles/scss/style-light.scss';
import "../styles/globals.css";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("swiper/element/bundle").then(({ register }) => {
      register();
    });
  }, []);

  return (
    <>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName} - Identidade Visual e Sites Profissionais</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
