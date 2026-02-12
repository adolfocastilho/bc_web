import React, { useEffect, useRef } from "react";
import Head from "next/head";

/* ─── Inline SVG Icons ─── */
const CheckIcon = () => (
    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);
const CalendarIcon = () => (
    <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const RefreshIcon = () => (
    <svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
);
const StarIcon = () => (
    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" /></svg>
);
const FileIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
);
const BoxIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const GlobeIcon = () => (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);
const DollarIcon = () => (
    <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
const TagIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
);
const ClockIcon = () => (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const ShieldIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const TrendingUpIcon = () => (
    <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const InfoIcon = () => (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);
const CreditCardIcon = () => (
    <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);
const UserIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>{`.cls-1{fill:url(#Nepojmenovan_prechod_39);}.cls-2{fill:#fff;}`}</style><linearGradient gradientUnits="userSpaceOnUse" id="Nepojmenovan_prechod_39" x1="256" x2="256" y1="488.97" y2="23.47"><stop offset="0" stopColor="#00d02d" /><stop offset="0.25" stopColor="#10d93a" /><stop offset="0.75" stopColor="#3af15d" /><stop offset="1" stopColor="#51fe71" /></linearGradient></defs><title /><rect className="cls-1" height="465.5" rx="120.17" ry="120.17" width="465.5" x="23.25" y="23.47" /><path className="cls-2" d="M256,87.13A165.54,165.54,0,0,0,112.77,335.62h0L90.27,421.75l87.55-23.19,0,0A165.52,165.52,0,1,0,256,87.13ZM353.34,350a137.75,137.75,0,0,1-171.76,18.51L130.72,382l13-49.68A137.67,137.67,0,1,1,353.34,350Z" /><path className="cls-2" d="M338.94,296a46.42,46.42,0,0,1-.69,8.12,48.74,48.74,0,0,1-2,8C334.2,317.91,323,325,323,325a42.59,42.59,0,0,1-27,7,59.82,59.82,0,0,1-6.65-1.06c-3.72-.83-5.53-1.36-5.53-1.36-1.8-.53-6.47-2-6.47-2-4.67-1.46-5.72-1.74-5.72-1.74a116.7,116.7,0,0,1-20.53-8.37c-15.13-8.22-31.61-22.95-31.61-22.95a186.89,186.89,0,0,1-26.32-28.86,121.83,121.83,0,0,1-10.6-19.47c-.4-1-2.37-5.49-2.37-5.49-2-4.48-2.7-6.21-2.7-6.21-.72-1.74-2-5.34-2-5.34a54.33,54.33,0,0,1-1.79-6.49,49.79,49.79,0,0,1-.74-6c-.58-10.52,4.65-21.59,4.65-21.59,5.75-11.9,11.33-14.62,11.33-14.62a57.22,57.22,0,0,1,7.7-2.83,39.54,39.54,0,0,1,8-1.6,6.63,6.63,0,0,1,2.42.21c2.1.57,6.55,8.35,6.55,8.35,1.38,2.1,3.77,6,3.77,6,2.4,3.88,4.41,7,4.41,7,2,3.15,3.88,5.91,3.88,5.91.37.44,2.16,2.75,2.16,2.75a34.09,34.09,0,0,1,2.68,3.92,8.27,8.27,0,0,1,1,3.21c.12,2.29-2.94,5.9-2.94,5.9a64.22,64.22,0,0,1-6.74,6.68,77.76,77.76,0,0,0-6.75,6.46c-3.08,3.38-3,5.44-3,5.44a9.74,9.74,0,0,0,.71,2.54c.66,1.51,1.11,2.29,1.11,2.29.44.77,1.75,2.65,1.75,2.65,1.31,1.88,1.43,2.1,1.43,2.1a135.36,135.36,0,0,0,21.39,25.75c11.83,10.58,28,18.39,28,18.39.24.1,2.25,1.19,2.25,1.19,2,1.1,2.83,1.45,2.83,1.45.82.36,2.4.84,2.4.84a8.06,8.06,0,0,0,2.6.43c2.06-.11,5.08-3.55,5.08-3.55a79.28,79.28,0,0,0,5.66-7.43,65.05,65.05,0,0,1,5.89-7.43c3.25-3.45,5.54-3.58,5.54-3.58a8.7,8.7,0,0,1,3.3.62,40,40,0,0,1,4.19,2.23c2.5,1.52,3,1.84,3,1.84,3,1.56,6.32,3.2,6.32,3.2,3.36,1.65,7.48,3.6,7.48,3.6,4.12,1.95,6.36,3.08,6.36,3.08,8.23,3.56,9,5.58,9,5.58A8.3,8.3,0,0,1,338.94,296Z" /></svg>
);


/* ─── Scroll Animation Hook ─── */
function useScrollReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        const els = ref.current?.querySelectorAll(".proposta-fade");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return ref;
}


/* ─── Page Component ─── */
export default function InvestimentoAmadeu() {
    const pageRef = useScrollReveal();

    return (
        <>
            <Head>
                <title>Proposta de Investimento KAZZI — BeCHANGE</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="proposta-page" ref={pageRef}>
                {/* Background Orbs */}
                <div className="proposta-bg">
                    <div className="proposta-bg__orb proposta-bg__orb--1" />
                    <div className="proposta-bg__orb proposta-bg__orb--2" />
                    <div className="proposta-bg__orb proposta-bg__orb--3" />
                </div>

                <div className="proposta-container">

                    {/* ━━━ HERO ━━━ */}
                    <header className="proposta-hero">
                        <div className="proposta-fade">
                            <img
                                src="/img/logos/logo-bechange.svg"
                                alt="BeCHANGE"
                                className="proposta-hero__logo"
                                width={235}
                                height={204}
                            />
                        </div>
                        <h1 className="proposta-hero__title proposta-fade proposta-fade--delay-1">
                            <span>Proposta de Investimento</span>
                        </h1>
                        <p className="proposta-hero__subtitle proposta-fade proposta-fade--delay-2">
                            Identidade Visual + Embalagens + Presença Digital
                        </p>
                        <p className="proposta-hero__brand proposta-fade proposta-fade--delay-3">
                            Marca: <strong>KAZZI</strong>
                        </p>
                    </header>

                    <main>
                        {/* ━━━ QUEM ESTÁ POR TRÁS ━━━ */}
                        <section className="proposta-authority proposta-fade">
                            <div className="proposta-authority__inner">
                                <img
                                    className="proposta-authority__avatar"
                                    src="/img/person/adolfo-castilho-garcia-bechange_avatar.webp"
                                    alt="Adolfo Castilho"
                                    width={90}
                                    height={90}
                                />
                                <div className="proposta-authority__content">
                                    <div className="proposta-authority__label">Quem está por trás</div>
                                    <h2 className="proposta-authority__name">Adolfo Castilho</h2>
                                    <p className="proposta-authority__role">Fundador da BeChange</p>
                                </div>
                            </div>
                            <p className="proposta-authority__bio">
                                Adolfo Castilho é a força criativa e estratégica por trás da BeChange. Com mais de <strong>22 anos de experiência</strong>, ele transforma ideias em identidades visuais, sites e experiências digitais que geram resultados financeiros. Adolfo lidera pessoalmente cada projeto, garantindo uma visão refinada, foco em conversão e atendimento direto e humanizado.
                            </p>
                            <p className="proposta-authority__bio">
                                Desde 2013, à frente da BeChange, ele tem acompanhado clientes que abriram ou expandiram empresas em diversos países, incluindo <strong>Brasil, EUA, Emirados Árabes, França, Itália, Austrália, Líbano, Turquia e Portugal</strong>, oferecendo design estratégico e presença digital profissional para novos mercados.
                            </p>
                            <div className="proposta-authority__credentials">
                                <span className="proposta-authority__credential">Adegraf</span>
                                <span className="proposta-authority__credential">ADG</span>
                                <span className="proposta-authority__credential">ABCOM</span>
                                <span className="proposta-authority__credential">Registro DUNS</span>
                            </div>
                        </section>


                        {/* ━━━ CONTEXTO ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><FileIcon /></div>
                                    <h2 className="proposta-section__title">Contexto do Projeto</h2>
                                </div>
                            </div>
                            <p className="proposta-section__desc proposta-fade">
                                Você nos forneceu imagens de referência geradas por inteligência artificial que representam a direção visual desejada para a marca e embalagens.
                            </p>
                            <div className="proposta-note proposta-fade">
                                <InfoIcon />
                                <div>
                                    <strong style={{ color: "var(--text-primary)" }}>Importante:</strong> Essas imagens servem exclusivamente como referência conceitual e estética, mas não são aplicáveis diretamente na produção por se tratarem de simulações fotográficas completas. Elas não possuem a separação de elementos vetoriais necessária (logotipo isolado, layouts editáveis, arquivos de produção gráfica, etc.).
                                </div>
                            </div>
                            <p className="proposta-section__desc proposta-fade" style={{ marginTop: 20, marginBottom: 0 }}>
                                Nosso trabalho consiste na <strong style={{ color: "var(--text-primary)" }}>criação profissional e do zero</strong> de todos os elementos de identidade visual e design de embalagens, utilizando suas referências em IA como inspiração de estilo, cores, composição e atmosfera, mas desenvolvendo <strong style={{ color: "var(--text-primary)" }}>arquivos técnicos, vetoriais e prontos para aplicação real</strong> em produção gráfica e digital.
                            </p>
                        </section>


                        {/* ━━━ 1. REDESIGN MARCA ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__number">Escopo 01</div>
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><ShieldIcon /></div>
                                    <h2 className="proposta-section__title">Redesign Marca KAZZI</h2>
                                </div>
                            </div>
                            <p className="proposta-section__desc proposta-fade">
                                Você pode escolher entre duas opções:
                            </p>

                            <div className="proposta-options">
                                {/* Opção A */}
                                <div className="proposta-card proposta-fade">
                                    <div className="proposta-card__header">
                                        <div>
                                            <div className="proposta-card__subtitle">Opção A</div>
                                            <h3 className="proposta-card__title">Criação da Marca (Logotipo)</h3>
                                        </div>
                                        <div className="proposta-price proposta-price--small">
                                            <span className="proposta-price__currency">R$</span>
                                            1.500
                                            <span className="proposta-price__cents">,00</span>
                                        </div>
                                    </div>
                                    <ul className="proposta-checklist">
                                        <li><CheckIcon /> Redesign completo do logotipo KAZZI</li>
                                        <li><CheckIcon /> Estilo: minimalista, moderno, geométrico</li>
                                        <li><CheckIcon /> Variações: horizontal, vertical, ícone isolado</li>
                                        <li><CheckIcon /> Paleta de cores definida</li>
                                        <li><CheckIcon /> Arquivos finais: AI, SVG, PDF, PNG (alta resolução)</li>
                                    </ul>
                                    <div className="proposta-meta">
                                        <div className="proposta-meta__item"><CalendarIcon /> Até 15 dias úteis</div>
                                        <div className="proposta-meta__item"><RefreshIcon /> 3 rodadas de revisão</div>
                                    </div>
                                </div>

                                {/* Opção B */}
                                <div className="proposta-card proposta-card--accent proposta-cenario proposta-cenario--recommended proposta-fade proposta-fade--delay-1">
                                    <div className="proposta-card__header">
                                        <div>
                                            <div className="proposta-card__subtitle">
                                                Opção B
                                            </div>
                                            <h3 className="proposta-card__title">Identidade Visual Completa</h3>
                                        </div>
                                        <div className="proposta-price proposta-price--small">
                                            <span className="proposta-price__currency">R$</span>
                                            3.000
                                            <span className="proposta-price__cents">,00</span>
                                        </div>
                                    </div>
                                    <ul className="proposta-checklist">
                                        <li><CheckIcon /> <strong>Tudo da Opção A</strong>, mais:</li>
                                        <li><CheckIcon /> Manual de identidade visual (brandbook)</li>
                                        <li><CheckIcon /> Cartão de visitas (impressão + digital)</li>
                                        <li><CheckIcon /> Papel timbrado e envelope</li>
                                        <li><CheckIcon /> Assinatura de e-mail</li>
                                        <li><CheckIcon /> Pasta/envelope A4</li>
                                        <li><CheckIcon /> Carimbo e crachá/tag</li>
                                        <li><CheckIcon /> Padrões e elementos gráficos da marca</li>
                                        <li><CheckIcon /> Sistema visual completo: tipografia, grid, aplicações</li>
                                    </ul>
                                    <div className="proposta-meta">
                                        <div className="proposta-meta__item"><CalendarIcon /> Até 15 dias úteis</div>
                                        <div className="proposta-meta__item"><RefreshIcon /> 3 rodadas de revisão</div>
                                    </div>
                                </div>
                            </div>

                            <div className="proposta-note proposta-fade">
                                <InfoIcon />
                                <div>Atributos da marca: <strong style={{ color: "var(--text-primary)" }}>qualidade, confiança, tecnologia, atual, moderna</strong></div>
                            </div>
                        </section>


                        {/* ━━━ 2. EMBALAGENS ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__number">Escopo 02</div>
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><BoxIcon /></div>
                                    <h2 className="proposta-section__title">Sistema de Embalagens para Blister</h2>
                                </div>
                            </div>
                            <p className="proposta-section__desc proposta-fade">
                                Design de embalagens para exposição em gôndola de varejo.
                            </p>

                            <div className="proposta-card proposta-fade">
                                <div className="proposta-card__header">
                                    <div>
                                        <h3 className="proposta-card__title">Template Master + 1ª Variação</h3>
                                    </div>
                                    <div className="proposta-price proposta-price--small">
                                        <span className="proposta-price__currency">R$</span>
                                        1.200
                                        <span className="proposta-price__cents">,00</span>
                                    </div>
                                </div>
                                <ul className="proposta-checklist">
                                    <li><CheckIcon /> Estrutura base padronizada e replicável</li>
                                    <li><CheckIcon /> 1ª variação completa do layout</li>
                                    <li><CheckIcon /> Arquivos vetoriais editáveis</li>
                                    <li><CheckIcon /> Fechamento de arquivo para gráfica</li>
                                    <li><CheckIcon /> Instruções técnicas de cores CMYK</li>
                                    <li><CheckIcon /> Faca de corte adaptada</li>
                                    <li><CheckIcon /> Mockups profissionais para apresentação</li>
                                </ul>
                            </div>

                            <div className="proposta-card proposta-fade">
                                <div className="proposta-card__header">
                                    <div>
                                        <h3 className="proposta-card__title">Variações Adicionais</h3>
                                        <div className="proposta-card__subtitle">Investimento por variação</div>
                                    </div>
                                    <div className="proposta-price proposta-price--small">
                                        <span className="proposta-price__currency">R$</span>
                                        300
                                        <span className="proposta-price__cents">,00</span>
                                        <span style={{ fontSize: 15, color: "var(--text-muted)", fontWeight: 400 }}>/cada</span>
                                    </div>
                                </div>
                                <div className="proposta-scope-item">
                                    <span className="proposta-scope-item__label">2ª variação do layout</span>
                                    <span className="proposta-scope-item__value">R$ 300,00</span>
                                </div>
                                <div className="proposta-scope-item">
                                    <span className="proposta-scope-item__label">3ª variação do layout</span>
                                    <span className="proposta-scope-item__value">R$ 300,00</span>
                                </div>
                                <div className="proposta-total">
                                    <span className="proposta-total__label">Total Embalagens (3 variações)</span>
                                    <div className="proposta-price">
                                        <span className="proposta-price__currency">R$</span>
                                        1.800
                                        <span className="proposta-price__cents">,00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="proposta-note proposta-fade">
                                <InfoIcon />
                                <div>
                                    Cada variação terá layout específico considerando nome do produto (ex: KAZZI, KAZZI Plus, KAZZI Premium), claims, hierarquia visual e posicionamento. Todos os elementos serão entregues vetorizados e editáveis.
                                </div>
                            </div>

                            <div className="proposta-meta proposta-fade">
                                <div className="proposta-meta__item"><CalendarIcon /> Até 15 dias úteis</div>
                                <div className="proposta-meta__item"><RefreshIcon /> 2 rodadas por variação</div>
                            </div>
                        </section>


                        {/* ━━━ 3. LANDING PAGE ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__number">Escopo 03</div>
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><GlobeIcon /></div>
                                    <h2 className="proposta-section__title">Landing Page Institucional</h2>
                                </div>
                            </div>
                            <p className="proposta-section__desc proposta-fade">
                                Página web para apresentação da sua marca e produto, focada em fazer o público conhecer a KAZZI.
                            </p>

                            <div className="proposta-card proposta-card--accent proposta-fade">
                                <div className="proposta-card__header">
                                    <div>
                                        <h3 className="proposta-card__title">Landing Page Profissional</h3>
                                    </div>
                                    <div className="proposta-price">
                                        <span className="proposta-price__currency">R$</span>
                                        2.499
                                        <span className="proposta-price__cents">,00</span>
                                    </div>
                                </div>
                                <ul className="proposta-checklist">
                                    <li><CheckIcon /> Landing page profissional responsiva (desktop + mobile)</li>
                                    <li><CheckIcon /> Apresentação da marca e produtos</li>
                                    <li><CheckIcon /> Benefícios e diferenciais dos produtos</li>
                                    <li><CheckIcon /> Construção de confiança e credibilidade</li>
                                    <li><CheckIcon /> Seção "Onde encontrar" / contato</li>
                                    <li><CheckIcon /> Integração com WhatsApp ou formulário de contato</li>
                                    <li><CheckIcon /> SEO básico (meta tags, títulos, descrições)</li>
                                    <li><CheckIcon /> Otimização de performance e carregamento</li>
                                    <li><CheckIcon /> Instalação em seu domínio/hospedagem</li>
                                </ul>
                                <div className="proposta-note" style={{ marginTop: 20 }}>
                                    <TrendingUpIcon />
                                    <div>
                                        <strong style={{ color: "var(--text-primary)" }}>Objetivo:</strong> Gerar reconhecimento de marca e apresentar seus produtos ao mercado (atacadistas, varejistas e consumidor final).
                                    </div>
                                </div>
                                <div className="proposta-meta">
                                    <div className="proposta-meta__item"><CalendarIcon /> Até 20 dias úteis</div>
                                    <div className="proposta-meta__item"><RefreshIcon /> 3 rodadas de revisão</div>
                                </div>
                            </div>
                        </section>


                        {/* ━━━ INVESTIMENTO TOTAL ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><DollarIcon /></div>
                                    <h2 className="proposta-section__title">Investimento Total do Projeto</h2>
                                </div>
                            </div>

                            <div className="proposta-options">
                                {/* Cenário 1 */}
                                <div className="proposta-card proposta-cenario proposta-fade">
                                    <h3 className="proposta-card__title" style={{ marginBottom: 20 }}>Cenário 1</h3>
                                    <div className="proposta-card__subtitle" style={{ marginBottom: 20 }}>
                                        Marca Básica + Embalagens + Landing Page
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Redesign Marca (Opção A)</span>
                                        <span className="proposta-scope-item__value">R$ 1.500,00</span>
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Embalagens (3 variações)</span>
                                        <span className="proposta-scope-item__value">R$ 1.800,00</span>
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Landing Page Institucional</span>
                                        <span className="proposta-scope-item__value">R$ 2.499,00</span>
                                    </div>
                                    <div className="proposta-total">
                                        <span className="proposta-total__label">Subtotal</span>
                                        <div className="proposta-price">
                                            <span className="proposta-price__currency">R$</span>
                                            5.799
                                            <span className="proposta-price__cents">,00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Cenário 2 */}
                                <div className="proposta-card proposta-card--accent proposta-cenario proposta-cenario--recommended proposta-fade proposta-fade--delay-1">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
                                        <h3 className="proposta-card__title">Cenário 2</h3>
                                    </div>
                                    <div className="proposta-card__subtitle" style={{ marginBottom: 20 }}>
                                        Identidade Visual Completa + Embalagens + Landing Page
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Identidade Visual (Opção B)</span>
                                        <span className="proposta-scope-item__value">R$ 3.000,00</span>
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Embalagens (3 variações)</span>
                                        <span className="proposta-scope-item__value">R$ 1.800,00</span>
                                    </div>
                                    <div className="proposta-scope-item">
                                        <span className="proposta-scope-item__label">Landing Page Institucional</span>
                                        <span className="proposta-scope-item__value">R$ 2.499,00</span>
                                    </div>
                                    <div className="proposta-total">
                                        <span className="proposta-total__label">Subtotal</span>
                                        <div className="proposta-price">
                                            <span className="proposta-price__currency">R$</span>
                                            7.299
                                            <span className="proposta-price__cents">,00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* ━━━ CONDIÇÕES COMERCIAIS ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-section__header">
                                    <div className="proposta-section__icon"><TagIcon /></div>
                                    <h2 className="proposta-section__title">Condições Comerciais e Descontos</h2>
                                </div>
                            </div>

                            <div className="proposta-payments">
                                {/* Opção 1 — À Vista */}
                                <div className="proposta-payment proposta-payment--highlight proposta-fade">
                                    <div className="proposta-payment__number">1</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                                        <h3 className="proposta-payment__title" style={{ margin: 0 }}>Pacote Completo à Vista</h3>
                                        <span className="proposta-tag proposta-tag--discount">20% OFF ✨</span>
                                    </div>
                                    <p className="proposta-payment__desc">Maior desconto — pagamento integral à vista na assinatura do contrato.</p>
                                    <div className="proposta-payment__values">
                                        <div style={{ marginBottom: 12 }}>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 1 (Marca Básica)</div>
                                            <span className="proposta-price--struck">R$ 5.799,00</span>
                                            <div>
                                                <strong style={{ color: "var(--success)" }}>R$ 4.639,20</strong>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 2 (Identidade Completa)</div>
                                            <span className="proposta-price--struck">R$ 7.299,00</span>
                                            <div>
                                                <strong style={{ color: "var(--success)" }}>R$ 5.839,20</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="proposta-savings">
                                        <TrendingUpIcon />
                                        Economia de até R$ 1.459,80
                                    </div>
                                </div>

                                {/* Opção 2 — Parcelado */}
                                <div className="proposta-payment proposta-fade proposta-fade--delay-1">
                                    <div className="proposta-payment__number">2</div>
                                    <h3 className="proposta-payment__title">Pacote Completo Parcelado</h3>
                                    <p className="proposta-payment__desc">50% na entrada + 50% na entrega final. Sem desconto.</p>
                                    <div className="proposta-payment__values">
                                        <div style={{ marginBottom: 12 }}>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 1</div>
                                            <div>Entrada: <strong>R$ 2.899,50</strong></div>
                                            <div>Entrega: <strong>R$ 2.899,50</strong></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 2</div>
                                            <div>Entrada: <strong>R$ 3.649,50</strong></div>
                                            <div>Entrega: <strong>R$ 3.649,50</strong></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Opção 3 — Separados à Vista */}
                                <div className="proposta-payment proposta-fade">
                                    <div className="proposta-payment__number">3</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                                        <h3 className="proposta-payment__title" style={{ margin: 0 }}>Serviços Separados à Vista</h3>
                                        <span className="proposta-tag proposta-tag--discount">10% off</span>
                                    </div>
                                    <p className="proposta-payment__desc">10% de desconto em cada serviço pago integralmente à vista.</p>
                                    <div className="proposta-payment__values">
                                        <div style={{ marginBottom: 6 }}>
                                            Identidade Visual (B): <span className="proposta-price--struck" style={{ fontSize: 15 }}>R$ 3.000</span> → <strong style={{ color: "var(--success)" }}>R$ 2.700,00</strong>
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            Redesign Marca (A): <span className="proposta-price--struck" style={{ fontSize: 15 }}>R$ 1.500</span> → <strong style={{ color: "var(--success)" }}>R$ 1.350,00</strong>
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            Embalagens (3 var.): <span className="proposta-price--struck" style={{ fontSize: 15 }}>R$ 1.800</span> → <strong style={{ color: "var(--success)" }}>R$ 1.620,00</strong>
                                        </div>
                                        <div>
                                            Landing Page: <span className="proposta-price--struck" style={{ fontSize: 15 }}>R$ 2.499</span> → <strong style={{ color: "var(--success)" }}>R$ 2.249,10</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Opção 4 — Separados Parcelados */}
                                <div className="proposta-payment proposta-fade proposta-fade--delay-1">
                                    <div className="proposta-payment__number">4</div>
                                    <h3 className="proposta-payment__title">Serviços Separados Parcelados</h3>
                                    <p className="proposta-payment__desc">Sem desconto — valores originais de tabela. Cada serviço pode ser contratado individualmente com pagamento em 2x (50% entrada + 50% entrega).</p>
                                </div>

                                {/* Opção 5 — Cartão de Crédito */}
                                <div className="proposta-payment proposta-fade">
                                    <div className="proposta-payment__number">5</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                                        <h3 className="proposta-payment__title" style={{ margin: 0 }}>Parcelamento no Cartão</h3>
                                        <span className="proposta-tag proposta-tag--info">Até 5x</span>
                                    </div>
                                    <p className="proposta-payment__desc">Parcelamento em até 5x no cartão de crédito, com acréscimo de 10% sobre o valor total referente a taxas de operação.</p>
                                    <div className="proposta-payment__values">
                                        <div style={{ marginBottom: 12 }}>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 1 (com 10%)</div>
                                            <div>Total: <strong>R$ 6.378,90</strong></div>
                                            <div>5x de: <strong>R$ 1.275,78</strong></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Cenário 2 (com 10%)</div>
                                            <div>Total: <strong>R$ 8.028,90</strong></div>
                                            <div>5x de: <strong>R$ 1.605,78</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* ━━━ TABELA RESUMO ━━━ */}
                        <section className="proposta-section">
                            <div className="proposta-fade">
                                <div className="proposta-divider">Resumo das Opções</div>
                            </div>
                            <div className="proposta-table-wrap proposta-fade">
                                <table className="proposta-table">
                                    <thead>
                                        <tr>
                                            <th>Opção</th>
                                            <th>Forma de Pagamento</th>
                                            <th>Cenário 1</th>
                                            <th>Cenário 2</th>
                                            <th>Desconto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="highlight-row">
                                            <td data-label="Opção"><strong>1</strong></td>
                                            <td data-label="Forma de Pagamento">Pacote completo à vista</td>
                                            <td data-label="Cenário 1"><strong style={{ color: "var(--success)" }}>R$ 4.639,20</strong></td>
                                            <td data-label="Cenário 2"><strong style={{ color: "var(--success)" }}>R$ 5.839,20</strong></td>
                                            <td data-label="Desconto"><span className="proposta-tag proposta-tag--discount">20% ✨</span></td>
                                        </tr>
                                        <tr>
                                            <td data-label="Opção"><strong>2</strong></td>
                                            <td data-label="Forma de Pagamento">Serviços separados à vista</td>
                                            <td data-label="Cenário 1">Sob consulta</td>
                                            <td data-label="Cenário 2">Sob consulta</td>
                                            <td data-label="Desconto"><span className="proposta-tag proposta-tag--discount">10%</span></td>
                                        </tr>
                                        <tr>
                                            <td data-label="Opção"><strong>3</strong></td>
                                            <td data-label="Forma de Pagamento">Cartão de crédito (até 5x)</td>
                                            <td data-label="Cenário 1">R$ 6.378,90</td>
                                            <td data-label="Cenário 2">R$ 8.028,90</td>
                                            <td data-label="Desconto"><span className="proposta-tag proposta-tag--info">+10%</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="proposta-fade" style={{ marginTop: 32 }}>
                                <p className="proposta-section__desc" style={{ marginBottom: 16 }}>
                                    Os valores desta proposta já estão com <strong style={{ color: "var(--text-primary)" }}>desconto significativo</strong> em relação à tabela de referência da <strong style={{ color: "var(--text-primary)" }}>ADEGRAF</strong> (Associação dos Designers Gráficos do Distrito Federal) para serviços equivalentes. Esse desconto é uma condição especial por indicação (um cliente meu indicou você), por isso os valores ficaram bem abaixo do praticado no mercado.
                                </p>
                                <p className="proposta-section__desc" style={{ marginBottom: 28 }}>
                                    Para total transparência e comparação, disponibilizei a tabela em PDF para você conferir:
                                </p>
                                <a
                                    href="/img/logos/Adegraf2025.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="proposta-btn"
                                >
                                    <FileIcon /> Baixar tabela ADEGRAF
                                </a>
                            </div>
                        </section>
                    </main>

                    {/* ━━━ FOOTER ━━━ */}
                    <footer className="proposta-footer proposta-section">
                        <div className="proposta-fade">
                            <div className="proposta-section__header">
                                <div className="proposta-section__icon"><CheckCircleIcon /></div>
                                <h2 className="proposta-section__title">Próximos Passos</h2>
                            </div>
                        </div>

                        <div className="proposta-footer__cards proposta-fade">
                            <div className="proposta-footer__card">
                                <div className="proposta-footer__card-icon"><CalendarIcon /></div>
                                <p className="proposta-footer__card-label">Prazo total do projeto</p>
                                <p className="proposta-footer__card-value">Até <strong>20 dias úteis</strong></p>
                            </div>
                            <div className="proposta-footer__card">
                                <div className="proposta-footer__card-icon"><ShieldIcon /></div>
                                <p className="proposta-footer__card-label">Início após</p>
                                <p className="proposta-footer__card-value">Pagamento + materiais recebidos</p>
                            </div>
                            <div className="proposta-footer__card">
                                <div className="proposta-footer__card-icon"><ClockIcon /></div>
                                <p className="proposta-footer__card-label">Validade desta proposta</p>
                                <p className="proposta-footer__card-value"><strong>5 dias</strong></p>
                            </div>
                        </div>
                    </footer>


                    <div className="proposta-watermark">
                        Proposta elaborada por <a href="https://www.bechange.com.br" target="_blank" rel="noopener noreferrer">BeCHANGE</a> ©2025 CNPJ: 19.161.177/0001-06
                    </div>

                    <a
                        href="https://wa.me/5561996090943"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proposta-float-btn"
                        title="Fale conosco no WhatsApp"
                    >
                        <WhatsAppIcon />
                    </a>

                </div>
            </div>
        </>
    );
}
