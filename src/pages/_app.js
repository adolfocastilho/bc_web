import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { Outfit } from "next/font/google";

//import '../styles/scss/style-dark.scss';
import '../styles/scss/style-light.scss';
import "../styles/globals.css";

import "../../public/css/plugins/bootstrap-grid.css";
import "../../public/css/plugins/swiper.min.css";

import { useEffect } from "react";
import ThirdPartyScripts from "@/src/components/common/ThirdPartyScripts";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        {/* seo begin */}
        <title>BecHANGE - Agência de Criação de Sites e Identidade Visual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* seo end */}
      </Head>
      <style jsx global>{`
        :root {
          --font-outfit: ${outfit.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <ThirdPartyScripts />
    </>
  );
}

export default MyApp;
