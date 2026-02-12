import React from "react";
import Layouts from "@layouts/Layouts";
import Head from "next/head";

import { getSortedPostsData } from "@library/posts";

import HeroIdentidadeVisualLP from "@components/sections/HeroIdentidadeVisualLP";
import AboutIdentidadeVisualLP from "@components/sections/AboutIdentidadeVisualLP";
import { ContactSection } from "@components/sections/SharedSections";


const IdentidadeVisualLP = (props) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Identidade Visual Profissional - BeCHANGE",
        "description": "Crie sua Identidade Visual Profissional completa: Logo, cores, tipografia e manual de marca. Orçamento personalizado sem compromisso. Entrega em até 4 semanas.",
        "url": "https://www.bechange.com.br/identidade-visual-lp",
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
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto custa criar uma identidade visual?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O preço varia de acordo com o que sua empresa precisa. Trabalhamos com proposta personalizada porque cada projeto tem complexidade e necessidades diferentes. Solicite seu orçamento sem compromisso."
                }
            },
            {
                "@type": "Question",
                "name": "Quanto tempo leva para ficar pronto?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O prazo médio é de 2 a 4 semanas, dependendo do tamanho do projeto e da rapidez do feedback. Você acompanha cada etapa do processo."
                }
            },
            {
                "@type": "Question",
                "name": "Quais arquivos eu recebo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você recebe os arquivos em PNG, JPG, SVG e PDF, em alta resolução, prontos para uso em digital e impressão. Tudo organizado e com manual de aplicação."
                }
            },
            {
                "@type": "Question",
                "name": "Posso fazer alterações depois da entrega?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O projeto inclui rodadas de ajustes para garantir que tudo fique alinhado com suas expectativas. Após a entrega, você tem autonomia com o manual de uso, mas podemos avaliar ajustes futuros se necessário."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês criam só o logo ou a identidade completa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O foco é criar identidade visual completa para empresas. Um logo isolado não traz o mesmo resultado estratégico que o conjunto completo de elementos visuais."
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
                <title>Identidade Visual Profissional | Orçamento Gratuito | BeCHANGE</title>
                <meta name="description" content="Crie sua Identidade Visual Profissional completa: Logo, cores, tipografia e manual de marca. Orçamento personalizado sem compromisso. Entrega em até 4 semanas." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bechange.com.br/identidade-visual-lp" />
                <meta property="og:title" content="Identidade Visual Profissional para Sua Empresa" />
                <meta property="og:description" content="Logo estratégico + identidade visual completa. Todos os arquivos em alta resolução. Solicite seu orçamento gratuito." />
                <meta property="og:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.bechange.com.br/identidade-visual-lp" />
                <meta property="twitter:title" content="Identidade Visual Profissional para Sua Empresa" />
                <meta property="twitter:description" content="Logo estratégico + identidade visual completa. Todos os arquivos em alta resolução. Solicite seu orçamento gratuito." />
                <meta property="twitter:image" content="https://www.bechange.com.br/img/hero/1.jpg" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.bechange.com.br/identidade-visual-lp" />

                {/* Preload hero image for better LCP */}
                <link rel="preload" as="image" href="/img/hero/1.jpg" />

                {/* No index for LP - optional, remove if you want it indexed */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>
            <HeroIdentidadeVisualLP />
            <AboutIdentidadeVisualLP />
            <ContactSection />
        </Layouts>
    );
};
export default IdentidadeVisualLP;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}
