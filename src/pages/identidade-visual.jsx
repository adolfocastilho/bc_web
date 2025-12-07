import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroIdentidadeVisual from "@components/sections/HeroIdentidadeVisual";
import AboutIdentidadeVisual from "@components/sections/AboutIdentidadeVisual";
import ServicesSection from "@components/sections/Services";
import RecognitionSection from "@components/sections/Recognition";
import PortfolioSection from "@components/sections/Portfolio";
import ContactSection from "@/src/components/sections/Contact";

import RecognitionData from "@data/sections/recognition.json";

const IdentidadeVisual = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Identidade Visual - BeCHANGE",
        "description": "Criação de Identidade Visual Estratégica para empresas e profissionais que querem se destacar no mercado.",
        "url": "https://bechange.com.br/identidade-visual",
        "provider": {
            "@type": "LocalBusiness",
            "name": "BeCHANGE",
            "image": "https://bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
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
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": RecognitionData.items.length.toString()
        }
    };

    return (
        <Layouts
            rightPanelBackground={"/img/person/bg-1.jpg"}
            rightPanelImg={"/img/person/adolfo-castilho-garcia-bechange.webp"}
        >
            <Head>
                <title>Identidade Visual Profissional | BeCHANGE - Agência de Design</title>
                <meta name="description" content="Criação de Identidade Visual Estratégica para empresas e profissionais. Logo, paleta de cores, tipografia e manual de marca completo." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bechange.com.br/identidade-visual" />
                <meta property="og:title" content="Identidade Visual Profissional | BeCHANGE" />
                <meta property="og:description" content="Criação de Identidade Visual Estratégica para empresas e profissionais. Logo, paleta de cores, tipografia e manual de marca." />
                <meta property="og:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bechange.com.br/identidade-visual" />
                <meta property="twitter:title" content="Identidade Visual Profissional | BeCHANGE" />
                <meta property="twitter:description" content="Criação de Identidade Visual Estratégica para empresas e profissionais." />
                <meta property="twitter:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://bechange.com.br/identidade-visual" />

                {/* Preload hero image for better LCP */}
                <link rel="preload" as="image" href="/img/hero/1.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <HeroIdentidadeVisual />
            <AboutIdentidadeVisual />
            <ServicesSection />
            <RecognitionSection />
            <PortfolioSection />
            <ContactSection />
        </Layouts>
    );
};
export default IdentidadeVisual;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
