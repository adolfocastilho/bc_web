import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroSistemas from "@components/sections/HeroSistemas";
import AboutSistemas from "@components/sections/AboutSistemas";
import { ServicesSection, RecognitionSection, PortfolioSection, ContactSection } from "@components/sections/SharedSections";

import RecognitionData from "@data/sections/recognition.json";


const SistemasAppsWebManutencao = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "BeChange - Desenvolvimento de Sistema Web e Software Sob Medida",
        "description": "Desenvolvimento de sistema web e software sob medida para clínicas, advogados e empresas. Painel administrativo, integrações, automações e manutenção.",
        "url": "https://www.bechange.com.br/sistemas-apps-web-e-manutencao",
        "telephone": "+55 11 91200-5640",
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        },
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
        },
        "serviceOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Desenvolvimento de Sistema Web e Software Sob Medida",
                "description": "Criação de sistemas web e apps sob medida com painel administrativo, integrações, automações e manutenção contínua para empresas."
            }
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto custa um sistema web sob medida?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende do escopo, número de módulos, integrações e regras. Trabalhamos com proposta por escopo e fases claras para você começar pelo que gera mais impacto."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês fazem sistemas pequenos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Nosso foco é resolver processos específicos com sistemas pequenos e médios, com evolução por etapas."
                }
            },
            {
                "@type": "Question",
                "name": "Em quanto tempo o sistema fica pronto?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Varia conforme escopo. Projetos enxutos podem ser entregues em poucas semanas. Soluções maiores entram em fases, começando pelo MVP."
                }
            },
            {
                "@type": "Question",
                "name": "Dá para ter painel administrativo com permissões?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Implementamos usuários, perfis e permissões, além de histórico e organização por status."
                }
            },
            {
                "@type": "Question",
                "name": "Consigo ter área do cliente com login?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Criamos áreas restritas para cliente, parceiro ou equipe interna, com acesso controlado e telas específicas."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês integram com WhatsApp, e-mail, CRM e calendário?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Fazemos integrações e automações para reduzir trabalho manual e acelerar atendimento."
                }
            },
            {
                "@type": "Question",
                "name": "O sistema pode ter upload e gestão de documentos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Implementamos upload, organização, busca e permissões para arquivos, conforme o fluxo do seu negócio."
                }
            },
            {
                "@type": "Question",
                "name": "Depois de pronto, vocês fazem manutenção?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Oferecemos suporte e manutenção para correções, segurança, performance e melhorias contínuas."
                }
            },
            {
                "@type": "Question",
                "name": "Onde fica hospedado? Vocês ajudam com infraestrutura?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Orientamos e configuramos a infraestrutura necessária, incluindo domínio, SSL e ambiente estável, para você não travar na parte técnica."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês fazem app de celular?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Quando o objetivo é uso no celular, fazemos app web com experiência otimizada para mobile. Se precisar de app nativo, avaliamos caso a caso."
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
                <title>Desenvolvimento de Sistema Web e Software Sob Medida | BeChange</title>
                <meta name="description" content="Desenvolvimento de sistema web e software sob medida para clínicas, advogados e empresas. Painel administrativo, integrações, automações e manutenção. Solicite proposta." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bechange.com.br/sistemas-apps-web-e-manutencao" />
                <meta property="og:title" content="Desenvolvimento de Sistema Web e Software Sob Medida | BeChange" />
                <meta property="og:description" content="Desenvolvimento de sistema web e software sob medida para clínicas, advogados e empresas. Painel administrativo, integrações, automações e manutenção. Solicite proposta." />
                <meta property="og:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.bechange.com.br/sistemas-apps-web-e-manutencao" />
                <meta property="twitter:title" content="Desenvolvimento de Sistema Web e Software Sob Medida | BeChange" />
                <meta property="twitter:description" content="Desenvolvimento de sistema web e software sob medida para clínicas, advogados e empresas. Painel administrativo, integrações, automações e manutenção. Solicite proposta." />
                <meta property="twitter:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.bechange.com.br/sistemas-apps-web-e-manutencao" />

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
            <HeroSistemas />
            <AboutSistemas />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </Layouts>
    );
};
export default SistemasAppsWebManutencao;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
