import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroDentistas from "@components/sections/dentistas/HeroDentistas";
import ProblemaSection from "@components/sections/dentistas/ProblemaSection";
import SolucaoSection from "@components/sections/dentistas/SolucaoSection";
import ComparacaoSection from "@components/sections/dentistas/ComparacaoSection";
import FAQSection from "@components/sections/dentistas/FAQSection";
import RecognitionSection from "@components/sections/Recognition";
import PortfolioSection from "@components/sections/Portfolio";
import CTAFinalSection from "@components/sections/dentistas/CTAFinalSection";
import ContactSection from "@/src/components/sections/Contact";

import RecognitionData from "@data/sections/recognition.json";

const IdentidadeVisualDentistas = (props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BeChange - Identidade Visual para Dentistas",
    "image": "https://bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
    "description": "Identidade visual estratégica para dentistas e clínicas odontológicas",
    "telephone": "+5561996090943",
    "url": "https://www.bechange.com.br/identidade-visual-para-dentistas.html",
    "sameAs": [
      "https://www.instagram.com/bechangecomunicacao/",
      "https://www.linkedin.com/company/bechangecomunicacao/",
      "https://br.pinterest.com/bechangecomunicacao/",
      "https://www.youtube.com/@bechangecomunicacao3721?app=desktop"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": RecognitionData.items.length.toString()
    },
    "review": RecognitionData.items.map(item => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": item.title,
        "homeLocation": {
          "@type": "Place",
          "name": item.location
        }
      },
      "reviewBody": item.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/adolfo-castilho-garcia-bechange.webp"}
    >
      <Head>
        <title>Identidade Visual para Dentistas | BeChange - Marca Profissional</title>
        <meta name="description" content="Identidade visual estratégica para dentistas e clínicas odontológicas. Logo, paleta, manual de marca e aplicações. Transforme sua clínica em referência visual." />
        <meta name="keywords" content="identidade visual dentistas, logo clínica odontológica, branding para consultório, marca profissional dentista, manual de marca odontologia" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bechange.com.br/identidade-visual-para-dentistas.html" />
        <meta property="og:title" content="Identidade Visual para Dentistas | BeChange" />
        <meta property="og:description" content="Crie a marca profissional que sua clínica merece. Sistema visual completo para dentistas." />
        <meta property="og:image" content="https://bechange.com.br/img/hero/1.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.bechange.com.br/identidade-visual-para-dentistas.html" />
        <meta property="twitter:title" content="Identidade Visual para Dentistas | BeChange" />
        <meta property="twitter:description" content="Crie a marca profissional que sua clínica merece. Sistema visual completo para dentistas." />
        <meta property="twitter:image" content="https://bechange.com.br/img/hero/1.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.bechange.com.br/identidade-visual-para-dentistas.html" />

        {/* Preload hero image for better LCP */}
        <link rel="preload" as="image" href="/img/hero/1.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <HeroDentistas />
      <ProblemaSection />
      <SolucaoSection />
      <ComparacaoSection />
      <FAQSection />
      <RecognitionSection />
      <PortfolioSection />
      <CTAFinalSection />
      <ContactSection />
    </Layouts>
  );
};
export default IdentidadeVisualDentistas;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}