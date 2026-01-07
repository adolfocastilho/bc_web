import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importações dos ícones utilizados
import {
    FaQuoteLeft,
    FaChevronDown,
    FaClock,
    FaExclamationTriangle,
    FaUserShield,
    FaProjectDiagram,
    FaWrench,
    FaCogs,
    FaColumns,
    FaPlug,
    FaShieldAlt,
    FaWpforms,
    FaCalendarAlt,
    FaFolderOpen,
    FaBalanceScale,
    FaRocket,
    FaSearch,
    FaSitemap,
    FaPencilRuler,
    FaDatabase,
    FaTools,
    FaUserCog
} from "react-icons/fa";

import ExportedImage from "@components/common/ExportedImage";
import SkeletonLoader from "@components/common/SkeletonLoader";

// Dynamic import para RecognitionSection
const RecognitionSection = dynamic(
    () => import("@components/sections/Recognition"),
    { ssr: false, loading: () => <SkeletonLoader height="400px" /> }
);

const AboutSistemas = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Quanto custa um sistema web sob medida?",
            answer: "Depende do escopo, número de módulos, integrações e regras. Trabalhamos com proposta por escopo e fases claras para você começar pelo que gera mais impacto."
        },
        {
            question: "Vocês fazem sistemas pequenos?",
            answer: "Sim. Nosso foco é resolver processos específicos com sistemas pequenos e médios, com evolução por etapas."
        },
        {
            question: "Em quanto tempo o sistema fica pronto?",
            answer: "Varia conforme escopo. Projetos enxutos podem ser entregues em poucas semanas. Soluções maiores entram em fases, começando pelo MVP."
        },
        {
            question: "Dá para ter painel administrativo com permissões?",
            answer: "Sim. Implementamos usuários, perfis e permissões, além de histórico e organização por status."
        },
        {
            question: "Consigo ter área do cliente com login?",
            answer: "Sim. Criamos áreas restritas para cliente, parceiro ou equipe interna, com acesso controlado e telas específicas."
        },
        {
            question: "Vocês integram com WhatsApp, e-mail, CRM e calendário?",
            answer: "Sim. Fazemos integrações e automações para reduzir trabalho manual e acelerar atendimento."
        },
        {
            question: "O sistema pode ter upload e gestão de documentos?",
            answer: "Sim. Implementamos upload, organização, busca e permissões para arquivos, conforme o fluxo do seu negócio."
        },
        {
            question: "Depois de pronto, vocês fazem manutenção?",
            answer: "Sim. Oferecemos suporte e manutenção para correções, segurança, performance e melhorias contínuas."
        },
        {
            question: "Onde fica hospedado? Vocês ajudam com infraestrutura?",
            answer: "Orientamos e configuramos a infraestrutura necessária, incluindo domínio, SSL e ambiente estável, para você não travar na parte técnica."
        },
        {
            question: "Vocês fazem app de celular?",
            answer: "Quando o objetivo é uso no celular, fazemos app web com experiência otimizada para mobile. Se precisar de app nativo, avaliamos caso a caso."
        }
    ];

    return (
        <section id="sobre">
            {/* SEÇÃO 1: INTRODUÇÃO COM AVATAR */}
            <div className="mil-p-0-90">
                <div className="mil-oval-frame-2 mil-mb-90" style={{ margin: '0 auto' }}>
                    <ExportedImage
                        src="/img/person/adolfo-castilho-garcia-bechange_avatar.webp"
                        alt="Adolfo Castilho - BeCHANGE"
                        width={1536}
                        height={1536}
                    />
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-30">
                        Desenvolvimento de sistemas web e apps sob medida para empresas
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Se sua empresa depende de planilhas, mensagens soltas e processos manuais, você perde tempo, comete erros e fica sem visão do que está acontecendo. A BeChange desenvolve sistema web e app web sob medida para transformar operação em fluxo organizado: cadastro, atendimento, agenda, documentos, aprovações, relatórios e integrações. Você ganha controle, agilidade e uma estrutura profissional que suporta crescimento.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="#cta-final" className="mil-btn mil-sm-btn mil-rounded">
                            <span>Solicitar proposta de sistema</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 2: DOR E DIAGNÓSTICO */}
            <div className="mil-p-90-30" style={{ paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="por-que-trava" style={{ whiteSpace: 'normal' }}>
                        Por que sua empresa <br className="mil-mobile-br" />
                        trava sem um sistema web
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaClock /></div>
                        <div className="mil-step-content">
                            <h3>Processos manuais viram gargalo e atrasam atendimento</h3>
                            <p>Quando tudo depende de copiar e colar, procurar informação e lembrar etapas, o time perde produtividade e o cliente sente lentidão. Um sistema organiza o fluxo e reduz retrabalho.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaExclamationTriangle /></div>
                        <div className="mil-step-content">
                            <h3>Sem histórico e status, você perde controle e comete erros</h3>
                            <p>Sem uma linha do tempo clara, ninguém sabe o que foi feito, por quem e qual é o próximo passo. Isso gera falhas, inconsistência e perda de prazos.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserShield /></div>
                        <div className="mil-step-content">
                            <h3>Dados espalhados aumentam risco e dificultam LGPD</h3>
                            <p>Cadastro em lugares diferentes, arquivos soltos e acessos sem regra aumentam risco. Um sistema com permissões, logs e estrutura reduz exposição.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaProjectDiagram /></div>
                        <div className="mil-step-content">
                            <h3>Ferramentas prontas não encaixam no seu processo</h3>
                            <p>SaaS genérico ajuda no básico, mas não resolve o específico do seu negócio. Sob medida, o sistema segue a sua regra e evolui por etapas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaWrench /></div>
                        <div className="mil-step-content">
                            <h3>Sem manutenção, o sistema envelhece e vira dor de cabeça</h3>
                            <p>Atualização, segurança e correções precisam de rotina. Manutenção evita travas, melhora performance e garante continuidade do trabalho.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 3: SOLUÇÃO BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="solucao-bechange" style={{ whiteSpace: 'normal' }}>
                        Sistemas, apps web <br className="mil-mobile-br" />
                        e manutenção BeChange
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCogs /></div>
                        <div className="mil-step-content">
                            <h3>Software sob medida para automatizar sua rotina</h3>
                            <p>Criamos sistemas pequenos e médios para resolver processos reais: atendimento, cadastro, agenda, documentos, painel administrativo e relatórios. Tudo no formato ideal para sua operação.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaColumns /></div>
                        <div className="mil-step-content">
                            <h3>Painel administrativo, usuários e permissões</h3>
                            <p>Sistema com gestão centralizada, perfis de acesso, trilha de ações e organização por status. Você ganha visão e controle sem depender de planilhas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPlug /></div>
                        <div className="mil-step-content">
                            <h3>Integrações e automações para reduzir trabalho manual</h3>
                            <p>Integramos formulários, WhatsApp, e-mail, calendário, CRM e outras ferramentas do seu fluxo. Automatizamos avisos, confirmações e etapas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>Manutenção, suporte e evolução contínua</h3>
                            <p>Depois de publicar, o trabalho continua: correções, ajustes, melhorias, segurança e performance. Você não fica travado nem refém.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depoimentos Section */}
            <RecognitionSection />

            {/* SEÇÃO 4: EXEMPLOS DE SISTEMAS */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="exemplos" style={{ whiteSpace: 'normal' }}>
                        Exemplos de sistemas web <br className="mil-mobile-br" />
                        que criamos na prática
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaWpforms /></div>
                        <div className="mil-step-content">
                            <h3>Formulários inteligentes e cadastro com validação</h3>
                            <p>Cadastro de pacientes, triagens, formulários de orçamento, solicitações internas e fluxos com campos condicionais e regras para evitar erro.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCalendarAlt /></div>
                        <div className="mil-step-content">
                            <h3>Sistema de agendamento e confirmação automática</h3>
                            <p>Agenda por profissional, horários, confirmação, lembretes, lista de espera e integração com calendário. Menos faltas e mais organização.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFolderOpen /></div>
                        <div className="mil-step-content">
                            <h3>Gestão de documentos e arquivos com controle de acesso</h3>
                            <p>Upload, organização por cliente e filtros, busca rápida e permissões. Ideal para clínicas, dentistas, escritórios e empresas com documentos críticos.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBalanceScale /></div>
                        <div className="mil-step-content">
                            <h3>Sistema para advogados organizarem processos e prazos</h3>
                            <p>Cadastro de clientes, processos, documentos, status e etapas internas. Visão por responsável, prazos e andamento para evitar perda.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>MVP e micro SaaS para validar produto</h3>
                            <p>Criação do mínimo produto viável com foco em velocidade e evolução por fases. Ideal para testar mercado e estruturar recorrência.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 5: O QUE UM SISTEMA PRECISA TER (NUMERADA) */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="elementos" style={{ whiteSpace: 'normal' }}>
                        O que um sistema web <br className="mil-mobile-br" />
                        profissional precisa ter
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Fluxo claro para operar rápido</h3>
                            <p>Menos cliques, menos dúvida, mais produtividade. Interface feita para uso real no dia a dia.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Usuários, perfis e permissões</h3>
                            <p>Cada pessoa acessa apenas o que precisa. Controle reduz risco e evita alterações indevidas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Cadastro consistente e validações</h3>
                            <p>Campos e regras evitam bagunça e garantem dados confiáveis para relatórios e decisões.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Status, histórico e rastreabilidade</h3>
                            <p>Você enxerga etapa por etapa, com registro do que mudou, quando mudou e quem fez.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Relatórios e visão de gestão</h3>
                            <p>Painéis simples para acompanhar volume, gargalos, pendências e desempenho do processo.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Segurança e backup</h3>
                            <p>HTTPS, rotinas de backup e boas práticas para manter estabilidade e reduzir risco.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">7</div>
                        <div className="mil-step-content">
                            <h3>Performance e experiência no celular</h3>
                            <p>Sistema precisa rodar leve e estável no mobile, principalmente em atendimento e operação.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 6: O QUE ESTÁ INCLUSO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="incluso" style={{ whiteSpace: 'normal' }}>
                        O que está incluso na criação de <br className="mil-mobile-br" />
                        sistemas e apps web
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Diagnóstico do fluxo e definição do objetivo</h3>
                            <p>Mapeamos o processo atual, identificamos gargalos e definimos o que o sistema precisa resolver primeiro.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSitemap /></div>
                        <div className="mil-step-content">
                            <h3>Arquitetura do sistema, telas e regras de negócio</h3>
                            <p>Definição de módulos, telas, permissões, campos, validações e jornada para evitar retrabalho.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPencilRuler /></div>
                        <div className="mil-step-content">
                            <h3>UI e UX orientados à produtividade</h3>
                            <p>Interface limpa, rápida, com hierarquia clara e uso confortável no desktop e no celular.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaDatabase /></div>
                        <div className="mil-step-content">
                            <h3>Modelagem de dados e estrutura organizada</h3>
                            <p>Cadastro, histórico, anexos e relatórios com estrutura preparada para evoluir por fases.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPlug /></div>
                        <div className="mil-step-content">
                            <h3>Integrações e automações</h3>
                            <p>Conexão com WhatsApp, e-mail, CRM, calendário, formulários e rotinas automáticas conforme necessidade.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>Segurança, permissões e boas práticas</h3>
                            <p>Controle de acesso, prevenção de falhas comuns e configuração segura para operar com confiança.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaTools /></div>
                        <div className="mil-step-content">
                            <h3>Testes, ajustes e publicação</h3>
                            <p>Validação dos fluxos críticos, ajustes finais e checklist técnico para subir com estabilidade.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserCog /></div>
                        <div className="mil-step-content">
                            <h3>Manutenção, suporte e evolução</h3>
                            <p>Correções, melhorias e acompanhamento contínuo para manter o sistema rápido, seguro e atualizado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 7: COMO FUNCIONA O PROCESSO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="processo" style={{ whiteSpace: 'normal' }}>
                        Como funciona o processo <br className="mil-mobile-br" />
                        de criação de sistemas
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Briefing e mapeamento do processo</h3>
                            <p>Entendemos rotina, usuários, regras e objetivos.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Escopo e prioridades do MVP</h3>
                            <p>Definimos o que entra primeiro para entregar resultado rápido.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Protótipo e validação da experiência</h3>
                            <p>Validamos telas e fluxo antes de desenvolver.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Desenvolvimento e integrações</h3>
                            <p>Construção do sistema, painel, permissões e integrações.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Testes em cenários reais e ajustes</h3>
                            <p>Testamos como o time usa e ajustamos pontos de fricção.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Publicação e manutenção contínua</h3>
                            <p>Sistema no ar com suporte, evolução e estabilidade.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 8: FAQ */}
            <div style={{ paddingTop: '0', paddingBottom: '30px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px', marginTop: '0' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="faq" style={{ whiteSpace: 'normal' }}>
                        Perguntas frequentes sobre <br className="mil-desktop-br" />
                        sistemas web e software sob medida
                    </h2>
                </div>
            </div>

            <div className="mil-faq-accordion mil-mb-60">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`mil-faq-item mil-up ${expandedFaqIndex === index ? 'mil-expanded' : ''}`}
                    >
                        <button
                            className="mil-faq-question"
                            onClick={() => toggleFaq(index)}
                            aria-expanded={expandedFaqIndex === index}
                        >
                            <h3>{item.question}</h3>
                            <FaChevronDown className="mil-faq-icon" />
                        </button>
                        <div className="mil-faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* SEÇÃO 9: CTA FINAL */}
            <div id="cta-final" className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Pronto para criar um sistema web <br className="mil-desktop-br" />
                        que organize sua operação?
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30" style={{ textAlign: 'center' }}>
                    Se você quer um sistema web ou app sob medida para automatizar processos, reduzir erro e operar com controle total, com suporte e manutenção contínua, o próximo passo é conversar com a BeChange.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20de%20sistema%20web." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                        <span>Solicitar proposta</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSistemas;
