import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroTrafegoPago from "@components/sections/HeroTrafegoPago";
import AboutTrafegoPago from "@components/sections/AboutTrafegoPago";
import { ServicesSection, RecognitionSection, PortfolioSection, ContactSection } from "@components/sections/SharedSections";

import RecognitionData from "@data/sections/recognition.json";


const GestaoDeTrafegoPago = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gestão de Tráfego Pago Profissional | Google Ads e Meta Ads | BeChange",
        "description": "Gestão de tráfego pago focada em ROI e conversão. Especialistas em Google Ads, Facebook e Instagram Ads. Transforme investimento em vendas reais com estratégia e mensuração profissional.",
        "url": "https://bechange.com.br/gestao-de-trafego-pago",
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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto custa a gestão de tráfego pago e qual o investimento mínimo em mídia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O valor da gestão de tráfego pago varia de acordo com o investimento total em mídia, quantidade de campanhas ativas, plataformas utilizadas e complexidade do projeto. Na BeChange, trabalhamos com proposta personalizada que considera suas metas de conversão, canais estratégicos e orçamento disponível para mídia. O investimento mínimo em mídia paga recomendado depende do segmento e objetivo, mas geralmente campanhas começam a ter resultados consistentes e dados suficientes para otimização a partir de R$ 1.500 a R$ 3.000 mensais em verba de anúncios."
                }
            },
            {
                "@type": "Question",
                "name": "Em quanto tempo os resultados das campanhas aparecem?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Campanhas de tráfego pago começam a gerar dados e primeiros resultados imediatos após a ativação, mas performance consistente e otimizada geralmente aparece entre 30 e 60 dias. Esse prazo inclui o período de aprendizado das plataformas, testes iniciais de públicos e criativos, e ciclo de otimização baseado em dados reais de conversão."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês trabalham com Google Ads, Meta Ads ou outras plataformas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, trabalhamos com gestão profissional de campanhas no Google Ads (Rede de Pesquisa, Display, YouTube, Performance Max, Shopping), Meta Ads (Facebook e Instagram), LinkedIn Ads para B2B e outras plataformas conforme a estratégia definida para cada cliente."
                }
            },
            {
                "@type": "Question",
                "name": "O que exatamente está incluso no serviço de gestão de tráfego pago?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O serviço completo inclui planejamento estratégico de campanhas, criação e configuração técnica de anúncios, segmentação refinada de públicos, definição de estratégias de lance e orçamentos, instalação e configuração de pixels e rastreamento, análise diária de métricas, otimização contínua, testes A/B, relatórios mensais detalhados com análise de performance e reuniões de acompanhamento estratégico."
                }
            },
            {
                "@type": "Question",
                "name": "Preciso ter um site para fazer campanhas de tráfego pago?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ter um site ou landing page otimizada para conversão é altamente recomendado e em muitos casos obrigatório para campanhas efetivas. Um site profissional, rápido e focado em conversão aumenta drasticamente as taxas de conversão, permite implementação correta de pixels e eventos de rastreamento."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês criam os criativos (imagens e vídeos) dos anúncios?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A gestão de tráfego pago foca na estratégia de campanhas, segmentação, veiculação, otimização e análise de performance. Criativos publicitários podem ser produzidos separadamente pela BeChange através dos serviços de design gráfico e edição de vídeo, ou você pode fornecer esses materiais."
                }
            },
            {
                "@type": "Question",
                "name": "Recebo relatórios de desempenho e com qual frequência?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, você recebe relatórios mensais completos e detalhados com todas as métricas relevantes: impressões, alcance, cliques, CTR, custo por clique, conversões, custo por conversão, ROAS e análise qualitativa dos resultados com insights e recomendações estratégicas."
                }
            },
            {
                "@type": "Question",
                "name": "Qual a diferença entre gestão de tráfego e produção de conteúdo orgânico?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gestão de tráfego pago é focada em campanhas pagas nas plataformas de anúncios para gerar cliques, leads e vendas de forma acelerada, mensurável e escalável. Produção de conteúdo para redes sociais é focada em posts orgânicos, crescimento de comunidade e engajamento. São estratégias complementares."
                }
            },
            {
                "@type": "Question",
                "name": "Posso pausar ou cancelar as campanhas a qualquer momento?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, você tem controle total sobre suas campanhas e investimento em mídia. Podemos pausar, ajustar orçamento, redirecionar estratégia ou encerrar campanhas a qualquer momento conforme necessidade do seu negócio."
                }
            },
            {
                "@type": "Question",
                "name": "Como a BeChange integra tráfego pago com estratégia de marca e design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Na BeChange, gestão de tráfego pago não é um serviço isolado do resto da estratégia digital. Integramos as campanhas com o posicionamento de marca, identidade visual, tom de comunicação e arquitetura de conversão. Isso garante consistência na mensagem do primeiro clique até o pós-venda."
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
                <title>Gestão de Tráfego Pago Profissional | Google Ads e Meta Ads | BeChange</title>
                <meta name="description" content="Gestão de tráfego pago focada em ROI e conversão. Especialistas em Google Ads, Facebook e Instagram Ads. Transforme investimento em vendas reais com estratégia e mensuração profissional." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bechange.com.br/gestao-de-trafego-pago" />
                <meta property="og:title" content="Gestão de Tráfego Pago Profissional | Google Ads e Meta Ads | BeChange" />
                <meta property="og:description" content="Gestão de tráfego pago focada em ROI e conversão. Especialistas em Google Ads, Facebook e Instagram Ads. Transforme investimento em vendas reais com estratégia e mensuração profissional." />
                <meta property="og:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bechange.com.br/gestao-de-trafego-pago" />
                <meta property="twitter:title" content="Gestão de Tráfego Pago Profissional | Google Ads e Meta Ads | BeChange" />
                <meta property="twitter:description" content="Gestão de tráfego pago focada em ROI e conversão. Especialistas em Google Ads, Facebook e Instagram Ads. Transforme investimento em vendas reais com estratégia e mensuração profissional." />
                <meta property="twitter:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://bechange.com.br/gestao-de-trafego-pago" />

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
            <HeroTrafegoPago />
            <AboutTrafegoPago />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </Layouts>
    );
};
export default GestaoDeTrafegoPago;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
