import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import RecognitionSection from "@components/sections/Recognition";
import PortfolioSection from "@components/sections/Portfolio";
import ContactSection from "@/src/components/sections/Contact";

import RecognitionData from "@data/sections/recognition.json";

const Home1 = (props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BeCHANGE",
    "image": "https://bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
    "description": "Agência de Criação de Sites Profissionais e Identidade Visual Estratégica",
    "url": "https://bechange.com.br",
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
        <meta name="description" content="Agência de Design e Tecnologia especialista em Identidade Visual, Criação de Sites Profissionais e Estratégias Digitais para escalar seu negócio." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bechange.com.br/" />
        <meta property="og:title" content="BeCHANGE - Identidade Visual e Sites Profissionais" />
        <meta property="og:description" content="Agência de Design e Tecnologia especialista em Identidade Visual, Criação de Sites Profissionais e Estratégias Digitais." />
        <meta property="og:image" content="https://bechange.com.br/img/hero/1.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bechange.com.br/" />
        <meta property="twitter:title" content="BeCHANGE - Identidade Visual e Sites Profissionais" />
        <meta property="twitter:description" content="Agência de Design e Tecnologia especialista em Identidade Visual, Criação de Sites Profissionais e Estratégias Digitais." />
        <meta property="twitter:image" content="https://bechange.com.br/img/hero/1.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://bechange.com.br/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <RecognitionSection />
      <PortfolioSection />
      <ContactSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}