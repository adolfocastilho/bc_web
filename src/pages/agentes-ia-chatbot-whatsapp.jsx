import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroAgentesIA from "@components/sections/HeroAgentesIA";
import AboutAgentesIA from "@components/sections/AboutAgentesIA";
import { ServicesSection, RecognitionSection, PortfolioSection, ContactSection } from "@components/sections/SharedSections";

import RecognitionData from "@data/sections/recognition.json";


const AgentesIAChatbotWhatsapp = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Agentes de IA e Chatbots Inteligentes para WhatsApp | Automação de Vendas | BeChange",
        "description": "Transforme seu atendimento com Agentes de IA que falam como humanos. Automação de WhatsApp para agendamentos, vendas e suporte 24/7 com implementação completa.",
        "url": "https://bechange.com.br/agentes-ia-chatbot-whatsapp",
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
                "name": "O Agente de IA vai substituir minha equipe de atendimento completamente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não substitui, potencializa seu time existente. Agente cuida de trabalho repetitivo: perguntas frequentes, agendamentos, confirmações. Equipe humana foca em fechar negócios complexos e cuidar de clientes VIP."
                }
            },
            {
                "@type": "Question",
                "name": "E se o cliente quiser falar com atendente humano real?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Transbordo para humano é imediato e suave. IA percebe sozinha quando conversa precisa de toque humano. Transferência acontece com todo histórico preservado."
                }
            },
            {
                "@type": "Question",
                "name": "O WhatsApp não pode bloquear meu número usando automação?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Trabalhamos exclusivamente com WhatsApp Business API oficial homologada pela Meta. Seguimos rigorosamente todas as políticas. Seu número opera com segurança total e zero risco de bloqueio."
                }
            },
            {
                "@type": "Question",
                "name": "Vale a pena mesmo para quem recebe poucos contatos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Se você perde vendas porque demora para responder, vale muito. Cliente que recebe resposta em dois minutos converte exponencialmente mais que cliente que espera duas horas."
                }
            },
            {
                "@type": "Question",
                "name": "Quais sistemas vocês conseguem integrar com o agente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Integramos com absolutamente tudo que tem API disponível: WhatsApp Business API, CRMs, sistemas de agendamento, plataformas de e-commerce, ERPs, Google Calendar, planilhas."
                }
            },
            {
                "@type": "Question",
                "name": "Quanto tempo leva para implementar e colocar no ar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Implementação completa leva de duas a quatro semanas dependendo da complexidade. Inclui análise, treinamento da IA, integrações técnicas, testes extensivos e go-live monitorado."
                }
            },
            {
                "@type": "Question",
                "name": "O agente aprende sozinho com as conversas ou preciso treinar sempre?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agente aprende continuamente com interações reais através de nossa curadoria. Analisamos conversas, identificamos gaps de conhecimento, adicionamos respostas para perguntas novas."
                }
            },
            {
                "@type": "Question",
                "name": "Consigo personalizar o tom de voz e personalidade do agente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Totalmente personalizável. Mapeamos tom de comunicação da sua marca e treinamos o agente para conversar exatamente como você quer que sua marca seja percebida."
                }
            },
            {
                "@type": "Question",
                "name": "Funciona em outros canais além do WhatsApp?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, o mesmo agente atende em múltiplos canais: WhatsApp, Instagram Direct, chat do site, Facebook Messenger. Implementação omnichannel com memória unificada."
                }
            },
            {
                "@type": "Question",
                "name": "Os dados das conversas ficam seguros e privados?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absoluta segurança e privacidade. Todas as conversas são criptografadas, armazenadas em servidores seguros. Cumprimos rigorosamente LGPD e boas práticas de segurança de dados."
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
                <title>Agentes de IA e Chatbots Inteligentes para WhatsApp | Automação de Vendas | BeChange</title>
                <meta name="description" content="Transforme seu atendimento com Agentes de IA que falam como humanos. Automação de WhatsApp para agendamentos, vendas e suporte 24/7 com implementação completa." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bechange.com.br/agentes-ia-chatbot-whatsapp" />
                <meta property="og:title" content="Agentes de IA e Chatbots Inteligentes para WhatsApp | Automação de Vendas | BeChange" />
                <meta property="og:description" content="Transforme seu atendimento com Agentes de IA que falam como humanos. Automação de WhatsApp para agendamentos, vendas e suporte 24/7 com implementação completa." />
                <meta property="og:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bechange.com.br/agentes-ia-chatbot-whatsapp" />
                <meta property="twitter:title" content="Agentes de IA e Chatbots Inteligentes para WhatsApp | Automação de Vendas | BeChange" />
                <meta property="twitter:description" content="Transforme seu atendimento com Agentes de IA que falam como humanos. Automação de WhatsApp para agendamentos, vendas e suporte 24/7 com implementação completa." />
                <meta property="twitter:image" content="https://bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://bechange.com.br/agentes-ia-chatbot-whatsapp" />

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
            <HeroAgentesIA />
            <AboutAgentesIA />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </Layouts>
    );
};
export default AgentesIAChatbotWhatsapp;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
