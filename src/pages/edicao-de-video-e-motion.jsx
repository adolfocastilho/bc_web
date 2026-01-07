import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroEdicaoDeVideo from "@components/sections/HeroEdicaoDeVideo";
import AboutEdicaoDeVideo from "@components/sections/AboutEdicaoDeVideo";
import { ServicesSection, RecognitionSection, PortfolioSection, ContactSection } from "@components/sections/SharedSections";

import RecognitionData from "@data/sections/recognition.json";


const EdicaoDeVideoEMotion = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Edição de Vídeo Profissional e Motion Design | Conteúdo que Converte | BeChange",
        "description": "Edição de vídeo profissional para empresas, creators e campanhas. Motion design estratégico para Instagram, YouTube, TikTok e anúncios. Qualidade + velocidade + resultados reais.",
        "url": "https://www.bechange.com.br/edicao-de-video-e-motion",
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
                "name": "Vocês editam vídeos que já gravei ou fazem gravação também?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focamos em edição e pós-produção de material que você já tem gravado. Não fazemos serviço de captação com equipamento e equipe de filmagem. Se precisar de gravação profissional, indicamos parceiros especializados."
                }
            },
            {
                "@type": "Question",
                "name": "Qual o tempo de entrega para editar um vídeo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende da complexidade e duração. Vídeo simples para redes sociais como Reel ou TikTok fica pronto em dois a três dias úteis. Motion design complexo ou vídeo longo leva cinco a sete dias úteis."
                }
            },
            {
                "@type": "Question",
                "name": "Quais formatos de arquivo vocês trabalham?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aceitamos qualquer formato comum: MP4, MOV, MKV, AVI, ProRes, outros. Qualidade mínima recomendada é Full HD 1080p, mas trabalhamos com 4K quando disponível."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês criam roteiro e storyboard ou só editam material pronto?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focamos em edição e pós-produção do material já gravado. Se precisar de consultoria de roteiro antes de gravar, podemos ajudar com orientações estratégicas."
                }
            },
            {
                "@type": "Question",
                "name": "É possível editar vídeos muito longos como webinars e documentários?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, fazemos edição de conteúdo long-form de uma, duas ou mais horas de duração. Também criamos recortes estratégicos e versões curtas reutilizáveis para distribuição nas redes sociais."
                }
            },
            {
                "@type": "Question",
                "name": "Posso usar os vídeos editados em todas as plataformas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, você é proprietário do conteúdo final. Vídeo editado fica completamente em sua posse para usar onde, quando e quantas vezes quiser."
                }
            },
            {
                "@type": "Question",
                "name": "Qual diferença entre editar sozinho no CapCut e edição profissional?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Edição profissional significa correção de cor cinematográfica, mixagem de áudio para som limpo sem ruídos, ritmo estratégico pensado para retenção, efeitos integrados naturalmente."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês trabalham com motion design e animação personalizada?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, motion design é integrado com serviço de edição. Animação customizada específica depende da complexidade técnica, mas atendemos a maioria das necessidades."
                }
            },
            {
                "@type": "Question",
                "name": "Como recebo o vídeo final? Qual resolução?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Entregamos em 4K ou Full HD conforme qualidade do material original e sua preferência. Enviamos em múltiplos formatos já otimizados por plataforma."
                }
            },
            {
                "@type": "Question",
                "name": "Posso pedir mudanças depois de receber o vídeo finalizado?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pequenos ajustes durante processo de revisão são normais e estão inclusos. Após aprovação final e entrega, mudanças significativas que exigem retrabalho extenso têm custo adicional."
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
                <title>Edição de Vídeo Profissional e Motion Design | Conteúdo que Converte | BeChange</title>
                <meta name="description" content="Edição de vídeo profissional para empresas, creators e campanhas. Motion design estratégico para Instagram, YouTube, TikTok e anúncios. Qualidade + velocidade + resultados reais." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bechange.com.br/edicao-de-video-e-motion" />
                <meta property="og:title" content="Edição de Vídeo Profissional e Motion Design | Conteúdo que Converte | BeChange" />
                <meta property="og:description" content="Edição de vídeo profissional para empresas, creators e campanhas. Motion design estratégico para Instagram, YouTube, TikTok e anúncios. Qualidade + velocidade + resultados reais." />
                <meta property="og:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.bechange.com.br/edicao-de-video-e-motion" />
                <meta property="twitter:title" content="Edição de Vídeo Profissional e Motion Design | Conteúdo que Converte | BeChange" />
                <meta property="twitter:description" content="Edição de vídeo profissional para empresas, creators e campanhas. Motion design estratégico para Instagram, YouTube, TikTok e anúncios. Qualidade + velocidade + resultados reais." />
                <meta property="twitter:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.bechange.com.br/edicao-de-video-e-motion" />

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
            <HeroEdicaoDeVideo />
            <AboutEdicaoDeVideo />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </Layouts>
    );
};
export default EdicaoDeVideoEMotion;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
