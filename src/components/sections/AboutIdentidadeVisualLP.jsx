import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import {
    FaPaintBrush,
    FaPalette,
    FaFont,
    FaLayerGroup,
    FaBook,
    FaFileAlt,
    FaChevronDown,
    FaCheckCircle,
    FaHandshake,
    FaStar,
    FaRocket,
    FaClipboardCheck
} from "react-icons/fa";

// Dynamic import para RecognitionSection (depoimentos em vídeo)
const RecognitionSection = dynamic(
    () => import("@components/sections/Recognition"),
    { ssr: false }
);

const AboutIdentidadeVisualLP = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    // Benefícios
    const benefits = [
        {
            icon: FaHandshake,
            title: 'Posicionamento Claro',
            description: 'Sua marca comunica profissionalismo e confiança desde o primeiro contato.'
        },
        {
            icon: FaStar,
            title: 'Destaque da Concorrência',
            description: 'Identidade visual estratégica que faz você ser lembrado pelo público certo.'
        },
        {
            icon: FaRocket,
            title: 'Pronto para Usar',
            description: 'Arquivos em todos os formatos + guia de aplicação. Sua equipe aplica sem depender de designer.'
        }
    ];

    // O que está incluso
    const features = [
        {
            icon: FaPaintBrush,
            title: 'Logotipo Profissional',
            description: 'Criação estratégica de logo (logomarca) com versões colorida, preto e branco, e negativa.'
        },
        {
            icon: FaPalette,
            title: 'Paleta de Cores Estratégica',
            description: 'Cores principais e secundárias escolhidas para transmitir a mensagem certa da sua marca.'
        },
        {
            icon: FaFont,
            title: 'Tipografia Definida',
            description: 'Fontes para títulos, textos e materiais, com recomendações de uso.'
        },
        {
            icon: FaLayerGroup,
            title: 'Elementos Visuais',
            description: 'Padrões, ícones e elementos gráficos complementares da identidade.'
        },
        {
            icon: FaBook,
            title: 'Manual de Aplicação',
            description: 'Guia simples e prático de como usar a identidade em diferentes materiais.'
        },
        {
            icon: FaFileAlt,
            title: 'Arquivos em Todos os Formatos',
            description: 'PNG, JPG, SVG, PDF em alta resolução. Pronto para digital e impressão.'
        }
    ];

    // Processo
    const processSteps = [
        {
            number: '1',
            title: 'Briefing Estratégico',
            description: 'Entendemos seu negócio, público e objetivos em reunião rápida.'
        },
        {
            number: '2',
            title: 'Criação e Apresentação',
            description: 'Desenvolvemos a identidade visual e apresentamos o conceito completo.'
        },
        {
            number: '3',
            title: 'Ajustes Alinhados',
            description: 'Refinamos juntos até sua marca estar perfeita.'
        },
        {
            number: '4',
            title: 'Entrega Final',
            description: 'Você recebe todos os arquivos + manual de uso organizados e prontos.'
        }
    ];

    // FAQ
    const faqItems = [
        {
            question: 'Quanto custa criar uma identidade visual?',
            answer: 'O preço varia de acordo com o que sua empresa precisa. Trabalhamos com proposta personalizada porque cada projeto tem complexidade e necessidades diferentes. Solicite seu orçamento sem compromisso.'
        },
        {
            question: 'Quanto tempo leva para ficar pronto?',
            answer: 'O prazo médio é de 2 a 4 semanas, dependendo do tamanho do projeto e da rapidez do feedback. Você acompanha cada etapa do processo.'
        },
        {
            question: 'Quais arquivos eu recebo?',
            answer: 'Você recebe os arquivos em PNG, JPG, SVG e PDF, em alta resolução, prontos para uso em digital e impressão. Tudo organizado e com manual de aplicação.'
        },
        {
            question: 'Posso fazer alterações depois da entrega?',
            answer: 'O projeto inclui rodadas de ajustes para garantir que tudo fique alinhado com suas expectativas. Após a entrega, você tem autonomia com o manual de uso, mas podemos avaliar ajustes futuros se necessário.'
        },
        {
            question: 'Vocês criam só o logo ou a identidade completa?',
            answer: 'O foco é criar identidade visual completa para empresas. Um logo isolado não traz o mesmo resultado estratégico que o conjunto completo de elementos visuais.'
        }
    ];

    return (
        <section id="beneficios">
            {/* Benefícios Section */}
            <div className="mil-p-90-30">
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Por Que Investir em <br className="mil-mobile-br" />
                        Identidade Visual Profissional?
                    </h2>
                </div>
            </div>

            <div className="mil-p-0-60">
                <div className="row justify-content-center">
                    {benefits.map((item, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="mil-center mil-up" style={{ marginBottom: '30px' }}>
                                <div className="mil-benefit-card">
                                    <div className="mil-card-icon-container" style={{
                                        fontSize: '48px',
                                        color: '#011f69',
                                        marginBottom: '20px'
                                    }}>
                                        <item.icon />
                                    </div>
                                    <h4 style={{ marginBottom: '15px' }}>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Depoimentos Section - Usando RecognitionSection com vídeos */}
            <RecognitionSection />

            {/* O que está incluso Section */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="incluso" style={{ whiteSpace: 'normal' }}>
                        Tudo que Você Recebe no <br className="mil-mobile-br" />
                        Projeto de Identidade Visual
                    </h2>
                </div>
            </div>

            <div className="mil-p-0-60">
                <div className="row justify-content-center">
                    {features.map((item, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="mil-up" style={{
                                marginBottom: '30px',
                                padding: '25px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '36px',
                                    color: '#011f69',
                                    marginBottom: '15px'
                                }}>
                                    <item.icon />
                                </div>
                                <h5 style={{ marginBottom: '10px' }}>{item.title}</h5>
                                <p style={{ fontSize: '14px', color: '#666' }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mil-center mil-up" style={{ marginTop: '30px', padding: '0 15px' }}>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20personalizada%20para%20identidade%20visual."
                        className="mil-btn mil-sm-btn mil-rounded mil-btn-mobile-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>SOLICITAR PROPOSTA</span>
                    </Link>
                </div>
            </div>

            {/* Processo Section */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="processo" style={{ whiteSpace: 'normal' }}>
                        Processo Rápido <br className="mil-mobile-br" />
                        e Sem Complicação
                    </h2>
                </div>
            </div>

            <div className="mil-p-0-60">
                <div className="mil-process-steps">
                    {processSteps.map((step, index) => (
                        <div key={index} className="mil-process-step mil-up">
                            <div className="mil-step-number">{step.number}</div>
                            <div className="mil-step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Destaque Prazo */}
                <div className="mil-center mil-up" style={{
                    marginTop: '40px',
                    padding: '30px 20px',
                    backgroundColor: '#011f69',
                    borderRadius: '8px',
                    color: '#fff'
                }}>
                    <FaClipboardCheck size={32} style={{ marginBottom: '15px' }} />
                    <h3 style={{ color: '#fff', marginBottom: '5px' }}>Prazo Médio: 2 a 4 Semanas</h3>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="faq" style={{ whiteSpace: 'normal' }}>
                        Perguntas Frequentes
                    </h2>
                </div>
            </div>

            <div className="mil-p-0-60">
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
            </div>

            {/* CTA Final Section */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Pronto para Transformar <br className="mil-mobile-br" />
                        a Imagem da Sua Empresa?
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30 mil-center">
                    Solicite seu orçamento personalizado e descubra como uma identidade visual <br className="mil-desktop-br" />
                    profissional pode elevar seu negócio.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '0 15px' }}>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Quero%20solicitar%20meu%20or%C3%A7amento%20para%20identidade%20visual%20profissional."
                        className="mil-btn mil-sm-btn mil-rounded mil-btn-mobile-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>QUERO MINHA IDENTIDADE VISUAL</span>
                    </Link>

                    {/* Trust Elements */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginTop: '20px',
                        color: '#666'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaCheckCircle style={{ color: '#28a745', flexShrink: 0 }} />
                            <span>Orçamento sem compromisso</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaCheckCircle style={{ color: '#28a745', flexShrink: 0 }} />
                            <span>Proposta personalizada para seu projeto</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaCheckCircle style={{ color: '#28a745', flexShrink: 0 }} />
                            <span>Resposta em até 24h úteis</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIdentidadeVisualLP;
