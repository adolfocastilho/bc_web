import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroIdentidadeVisual from "@components/sections/HeroIdentidadeVisual";
import AboutIdentidadeVisual from "@components/sections/AboutIdentidadeVisual";
import { ServicesSection, RecognitionSection, PortfolioSection, ContactSection } from "@components/sections/SharedSections";

import RecognitionData from "@data/sections/recognition.json";


const IdentidadeVisual = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Identidade Visual - BeCHANGE",
        "description": "Criação de Identidade Visual Estratégica para empresas e profissionais que querem se destacar no mercado.",
        "url": "https://www.bechange.com.br/identidade-visual",
        "provider": {
            "@type": "LocalBusiness",
            "name": "BeCHANGE",
            "image": "https://www.bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
            "url": "https://www.bechange.com.br",
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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto custa criar uma identidade visual profissional?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O preço da criação de identidade visual profissional varia de acordo com o que a sua empresa precisa. Em vez de tabela fixa, trabalhamos com proposta personalizada, porque cada projeto tem um nível de estudo, complexidade de logotipo e quantidade de materiais diferente."
                }
            },
            {
                "@type": "Question",
                "name": "Como funciona o valor, o preço da identidade visual é fechado ou por hora?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O valor da identidade visual é fechado por projeto, nunca por hora. Assim você sabe exatamente quanto vai investir na criação de identidade visual completa, sem surpresas no meio do caminho."
                }
            },
            {
                "@type": "Question",
                "name": "Em quanto tempo a identidade visual fica pronta?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O prazo médio vai de 2 a 4 semanas, dependendo do tamanho do projeto e da rapidez do feedback. Esse tempo inclui entendimento do negócio, criação do logotipo, montagem da identidade visual para empresas e ajustes finais."
                }
            },
            {
                "@type": "Question",
                "name": "O que está incluso no projeto de identidade visual?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O projeto inclui criação de logotipo (logomarca), paleta de cores, tipografia, elementos visuais, aplicações base para materiais e um guia simples de uso. Você recebe uma identidade visual profissional completa, pronta para ser aplicada em site, redes sociais, apresentações e materiais impressos."
                }
            },
            {
                "@type": "Question",
                "name": "Quais arquivos eu recebo no final do trabalho?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você recebe os arquivos do logotipo e da identidade visual em formatos práticos para o dia a dia, como PNG, JPG, SVG e PDF. Também entregamos versões em alta resolução e arquivos prontos para uso em digital e impressão."
                }
            },
            {
                "@type": "Question",
                "name": "Quantas rodadas de ajustes estão incluídas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O projeto já prevê uma etapa de apresentação e uma etapa de ajustes para alinhar tudo com o que você espera. Os detalhes de quantas rodadas de ajustes estão inclusas são combinados na proposta, sempre de forma clara antes do início do trabalho."
                }
            },
            {
                "@type": "Question",
                "name": "Posso contratar só a criação de logotipo, sem identidade visual completa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O foco do serviço é a criação de identidade visual completa para empresas, não apenas um logo isolado. Em alguns casos é possível avaliar a criação de logotipo pontual, mas a recomendação é sempre trabalhar o conjunto para ter resultado melhor na imagem da marca."
                }
            },
            {
                "@type": "Question",
                "name": "Depois da entrega, eu preciso sempre voltar para fazer materiais com vocês?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. A ideia é que você tenha uma identidade visual completa e um guia simples de uso. Assim, sua equipe ou outros parceiros conseguem aplicar a identidade visual sem depender da agência para cada material do dia a dia."
                }
            }
        ]
    };

    return (
        <Layouts
            rightPanelBackground={"/img/person/bg-1.jpg"}
            rightPanelImg={"/img/person/adolfo-castilho-garcia-bechange.webp"}
        >
            <Head>
                <title>Criação de Identidade Visual Profissional para Empresas | BeCHANGE</title>
                <meta name="description" content="Criação de Identidade Visual Profissional para empresas e profissionais. Logo, paleta de cores, tipografia e manual de marca completo. Orçamento personalizado." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bechange.com.br/identidade-visual" />
                <meta property="og:title" content="Identidade Visual Profissional | BeCHANGE" />
                <meta property="og:description" content="Criação de Identidade Visual Profissional para empresas e profissionais. Logo, paleta de cores, tipografia e manual de marca completo. Orçamento personalizado." />
                <meta property="og:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.bechange.com.br/identidade-visual" />
                <meta property="twitter:title" content="Identidade Visual Profissional | BeCHANGE" />
                <meta property="twitter:description" content="Criação de Identidade Visual Profissional para empresas e profissionais. Logo, paleta de cores, tipografia e manual de marca completo. Orçamento personalizado." />
                <meta property="twitter:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.bechange.com.br/identidade-visual" />

                {/* Preload hero image for better LCP */}
                <link rel="preload" as="image" href="/img/hero/1.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
