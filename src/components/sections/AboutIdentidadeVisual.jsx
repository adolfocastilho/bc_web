import { useState } from "react";
import Link from "next/link";

// Importações apenas dos ícones utilizados (otimização de bundle)
import {
    FaQuoteLeft,
    FaPaintBrush,
    FaPalette,
    FaFont,
    FaStar,
    FaLayerGroup,
    FaBook,
    FaFileAlt,
    FaChevronDown,
    FaAward,
    FaCheckCircle,
    FaPlus,
    FaSearch,
    FaBox,
    FaUserTie,
    FaBuilding,
    FaChartLine,
    FaStethoscope,
    FaShieldAlt,
    FaFlag,
    FaBriefcase,
    FaUserCog,
    FaBullseye,
    FaGlobeAmericas,
    FaCertificate
} from "react-icons/fa";

import ExportedImage from "@components/common/ExportedImage";


const AboutIdentidadeVisual = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const features = [
        {
            icon: FaPaintBrush,
            title: 'Logotipo Profissional',
            description: 'Criamos logotipos profissionais que comunicam valor e fortalecem a presença da sua marca no mercado. Cada logo nasce alinhado ao posicionamento da empresa para transmitir confiança desde o primeiro contato.'
        },
        {
            icon: FaPalette,
            title: 'Paleta de Cores',
            description: 'Desenvolvemos paletas de cores consistentes que garantem identidade visual forte em todos os pontos de contato. As combinações são pensadas para reforçar personalidade, clareza e reconhecimento imediato.'
        },
        {
            icon: FaFont,
            title: 'Tipografia',
            description: 'Selecionamos tipografias profissionais que elevam a percepção da marca e organizam a comunicação com clareza. A escolha das fontes segue critérios técnicos de leitura, impacto e coerência visual.'
        },
        {
            icon: FaStar,
            title: 'Grafismos e Elementos',
            description: 'Criamos grafismos exclusivos que ampliam o sistema de identidade visual da sua empresa. Esses elementos ajudam a diferenciar a marca e manter consistência em materiais digitais e impressos.'
        },
        {
            icon: FaAward,
            title: 'Ícones e Selo',
            description: 'Desenvolvemos ícones e selos profissionais que reforçam autoridade e deixam a comunicação mais clara. Cada símbolo segue o mesmo estilo do sistema visual para manter unidade em todo o design.'
        },
        {
            icon: FaLayerGroup,
            title: 'Pattern / Texturas',
            description: 'Aplicamos patterns e texturas que dão personalidade e criam presença marcante em aplicações de marca. Esses recursos fortalecem o reconhecimento visual e tornam sua identidade mais memorável.'
        },
        {
            icon: FaFileAlt,
            title: 'Aplicações',
            description: 'Produzimos aplicações práticas para redes sociais, site, papelaria e apresentações. A identidade visual é entregue pronta para uso, garantindo consistência e economia de tempo para a empresa.'
        },
        {
            icon: FaBook,
            title: 'Manual de Marca',
            description: 'Entregamos um manual de marca completo com orientações claras para uso correto da identidade visual. O documento garante autonomia para sua equipe e evita erros que prejudiquem a imagem da empresa.'
        },
        {
            icon: FaCheckCircle,
            title: 'Identidade Visual Completa',
            description: 'Criamos identidade visual completa para empresas que precisam de comunicação profissional e consistente. Todo o sistema visual é pensado para transmitir credibilidade e ajudar seu negócio a se destacar.'
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: 'Quanto custa criar uma identidade visual profissional?',
            answer: 'O preço da criação de identidade visual profissional varia de acordo com o que a sua empresa precisa. Em vez de tabela fixa, trabalhamos com proposta personalizada, porque cada projeto tem um nível de estudo, complexidade de logotipo e quantidade de materiais diferente.'
        },
        {
            question: 'Como funciona o valor, o preço da identidade visual é fechado ou por hora?',
            answer: 'O valor da identidade visual é fechado por projeto, nunca por hora. Assim você sabe exatamente quanto vai investir na criação de identidade visual completa, sem surpresas no meio do caminho.'
        },
        {
            question: 'Em quanto tempo a identidade visual fica pronta?',
            answer: 'O prazo médio vai de 2 a 4 semanas, dependendo do tamanho do projeto e da rapidez do feedback. Esse tempo inclui entendimento do negócio, criação do logotipo, montagem da identidade visual para empresas e ajustes finais.'
        },
        {
            question: 'O que está incluso no projeto de identidade visual?',
            answer: 'O projeto inclui criação de logotipo (logomarca), paleta de cores, tipografia, elementos visuais, aplicações base para materiais e um guia simples de uso. Você recebe uma identidade visual profissional completa, pronta para ser aplicada em site, redes sociais, apresentações e materiais impressos.'
        },
        {
            question: 'Quais arquivos eu recebo no final do trabalho?',
            answer: 'Você recebe os arquivos do logotipo e da identidade visual em formatos práticos para o dia a dia, como PNG, JPG, SVG e PDF. Também entregamos versões em alta resolução e arquivos prontos para uso em digital e impressão.'
        },
        {
            question: 'Quantas rodadas de ajustes estão incluídas?',
            answer: 'O projeto já prevê uma etapa de apresentação e uma etapa de ajustes para alinhar tudo com o que você espera. Os detalhes de quantas rodadas de ajustes estão inclusas são combinados na proposta, sempre de forma clara antes do início do trabalho.'
        },
        {
            question: 'Posso contratar só a criação de logotipo, sem identidade visual completa?',
            answer: 'O foco do serviço é a criação de identidade visual completa para empresas, não apenas um logo isolado. Em alguns casos é possível avaliar a criação de logotipo pontual, mas a recomendação é sempre trabalhar o conjunto para ter resultado melhor na imagem da marca.'
        },
        {
            question: 'Depois da entrega, eu preciso sempre voltar para fazer materiais com vocês?',
            answer: 'Não. A ideia é que você tenha uma identidade visual completa e um guia simples de uso. Assim, sua equipe ou outros parceiros conseguem aplicar a identidade visual sem depender da agência para cada material do dia a dia.'
        }
    ];

    return (
        <section id="sobre">
            {/* Intro Section - Matching Services structure */}
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
                        Criação de logotipo para sua empresa transmitir profissionalismo e confiança.
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Hoje, se a identidade visual da sua empresa parece amadora, o cliente sente isso na hora. Nosso trabalho é criar a identidade visual completa da sua empresa, com logotipo, paleta de cores, fontes e um guia claro de uso, para que sua comunicação passe profissionalismo e confiança em qualquer lugar onde o cliente encontra sua marca.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="#portfolio" className="mil-btn mil-sm-btn mil-rounded">
                            <span>Ver Portfólio</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section - Structure mirroring Services.jsx */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="o-que-esta-incluso" style={{ whiteSpace: 'normal' }}>
                        O que está incluso na sua <br className="mil-desktop-br" />
                        identidade visual profissional
                    </h2>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description mil-mb-30-mobile">
                    Aqui você não recebe só um logo. Você contrata a criação de identidade visual completa para sua empresa, <br className="mil-desktop-br" />
                    pronta para usar no dia a dia.
                </p>
            </div>

            <div className="mil-p-90-30" style={{ paddingTop: '0' }}>
                <div className="row justify-content-between align-items-stretch"> {/* align-items-stretch ensures equal height rows if needed, or start */}
                    {features.map((item, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="mil-center" style={{ marginBottom: '30px' }}>
                                <div
                                    className={`mil-iv-feature-card ${expandedIndex === index ? 'mil-expanded' : ''}`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    {/* Icon */}
                                    <div className="mil-card-icon-container">
                                        <item.icon />
                                    </div>

                                    {/* Title */}
                                    <h5 className="mil-card-title">{item.title}</h5>

                                    {/* Mobile Indicator (Chevron) - Visible only on mobile via CSS */}
                                    <div className="mil-card-indicator-mobile">
                                        <FaChevronDown />
                                    </div>

                                    {/* Description */}
                                    <div className="mil-card-desc">
                                        <p>{item.description}</p>
                                    </div>

                                    {/* Desktop Indicator (Plus) - Visible only on desktop via CSS */}
                                    <div className="mil-card-indicator-desktop">
                                        <FaPlus size={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section - Como funciona */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up">
                    <h2 id="como-funciona" style={{ whiteSpace: 'normal' }}>
                        Como funciona o passo a passo da criação <br className="mil-desktop-br" />
                        da sua identidade visual
                    </h2>
                </div>
            </div>

            <div className="mil-p-90-60" style={{ paddingTop: '0' }}>

                <div className="mil-process-steps">
                    {/* Step 1 */}
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Entendimento do seu negócio</h3>
                            <p>Primeiro, entendemos sua empresa, o que você faz, para quem vende e como quer ser vista. Essa etapa garante que a criação de identidade visual tenha a ver com a realidade do seu negócio e com o tipo de cliente que você quer atrair.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Definição do estilo da marca</h3>
                            <p>Depois, definimos o estilo visual da sua marca: mais séria, mais moderna, mais próxima ou mais sofisticada. Aqui alinhamos referências e direção para que a identidade visual profissional faça sentido para o seu mercado.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Criação do logotipo</h3>
                            <p>Com o caminho definido, começamos a criação do logotipo da sua empresa. É o momento de transformar tudo o que foi entendido em uma marca visual clara, simples de reconhecer e fácil de aplicar em qualquer lugar.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Montagem da identidade visual completa</h3>
                            <p>Em seguida, organizamos todas as peças: paleta de cores, tipografia, elementos visuais e modelos de uso. Essa etapa transforma o logo em uma identidade visual para empresas completa, pronta para ser usada em materiais reais.</p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Ajustes, entrega e guia de uso</h3>
                            <p>Fazemos os ajustes finais, entregamos todos os arquivos prontos e um guia simples explicando como usar a identidade visual no dia a dia. Assim sua equipe sabe exatamente como aplicar tudo, sem depender de "reinventar" o design a cada material.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Pricing Section - Quanto custa */}
            <div className="mil-p-90-30">
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="quanto-custa" style={{ whiteSpace: 'normal' }}>
                        Quanto custa criar uma <br className="mil-mobile-br" />
                        identidade visual profissional <br className="mil-mobile-br" />
                        para sua empresa
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30-mobile">
                    O preço da criação de identidade visual profissional varia de acordo com o que sua empresa precisa. Uma identidade visual para empresas não é só "um logo", envolve estudo do negócio, criação de logotipo, definição de cores, fontes, elementos visuais e um guia de uso bem feito.
                    <br /><br />
                    Como agência de identidade visual, o valor é calculado pelo tempo de análise, nível de profundidade do projeto e quantidade de materiais envolvidos. Em vez de tabela engessada, trabalhamos com proposta personalizada, baseada na realidade da sua empresa e no resultado que você busca.
                </p>
            </div>

            <div className="mil-p-90-30" style={{ paddingTop: '0' }}>
                <h3 className="mil-up mil-mb-60 mil-center" style={{ paddingTop: '30px' }}>O que influencia no preço da identidade visual</h3>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Nível de Estudo</h3>
                            <p>Profundidade da imersão no negócio e pesquisa de mercado</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Complexidade</h3>
                            <p>Nível de detalhe na criação do logotipo e identidade</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBox /></div>
                        <div className="mil-step-content">
                            <h3>Materiais</h3>
                            <p>Quantidade de peças e aplicações que serão entregues</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBook /></div>
                        <div className="mil-step-content">
                            <h3>Manual</h3>
                            <p>Necessidade de manual de marca simples ou completo</p>
                        </div>
                    </div>
                </div>

                {/* Para quem é indicado Section */}
                <div className="mil-p-90-30" style={{ paddingTop: '30px' }}>
                    <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                    <div className="mil-center mil-up mil-mb-30">
                        <h2 id="para-quem" style={{ whiteSpace: 'normal' }}>
                            Para quem é indicada a criação <br className="mil-desktop-br" />
                            de identidade visual profissional
                        </h2>
                    </div>
                    <p className="mil-up mil-section-description mil-mb-30-mobile">
                        Este serviço de criação de identidade visual é para empresas que querem sair da aparência amadora e transmitir mais profissionalismo em tudo que o cliente vê.
                    </p>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserTie /></div>
                        <div className="mil-step-content">
                            <h3>Empresários exigentes</h3>
                            <p>Empresários que sentem que a marca atual não representa a qualidade do serviço que entregam.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Empresas sem identidade</h3>
                            <p>Empresas que ainda não têm identidade visual para empresas e usam apenas um logo improvisado.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Negócios em crescimento</h3>
                            <p>Negócios que cresceram e agora precisam de uma identidade visual profissional, clara e organizada.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaStethoscope /></div>
                        <div className="mil-step-content">
                            <h3>Clínicas e consultórios</h3>
                            <p>Clínicas, consultórios e consultorias que querem passar mais confiança e seriedade para seus clientes.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>Quem quer qualidade</h3>
                            <p>Empresas que já tiveram experiências ruins com "logo barato" e querem algo definitivo e bem feito.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFlag /></div>
                        <div className="mil-step-content">
                            <h3>Novas empresas</h3>
                            <p>Quem está abrindo uma empresa e quer começar com uma identidade visual forte desde o início.</p>
                        </div>
                    </div>
                </div>

                {/* O que diferencia a BeChange Section */}
                <div className="mil-p-90-30" style={{ paddingTop: '30px' }}>
                    <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                    <div className="mil-center mil-up mil-mb-30">
                        <h2 id="diferenciais" style={{ whiteSpace: 'normal' }}>
                            Por que escolher a BeChange para criar <br className="mil-desktop-br" />
                            a identidade visual da sua empresa
                        </h2>
                    </div>
                    <p className="mil-up mil-section-description mil-mb-30-mobile">
                        Na BeChange, você não fala com um atendimento genérico. Quem cuida da criação de identidade visual da sua empresa é o próprio Adolfo Castilho, com mais de 22 anos de experiência em marcas, sites e presença digital para negócios no Brasil e no exterior.
                    </p>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBriefcase /></div>
                        <div className="mil-step-content">
                            <h3>Experiência real em negócios</h3>
                            <p>Mais de 22 anos criando identidade visual profissional, sites e materiais que ajudam empresas a se posicionar melhor e gerar resultado de verdade, não só "ficar bonito".</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserCog /></div>
                        <div className="mil-step-content">
                            <h3>Atuação direta do especialista</h3>
                            <p>Seu projeto não é repassado para um estagiário ou time terceirizado. Adolfo lidera pessoalmente cada identidade visual, do entendimento do negócio até a entrega final.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Visão voltada para resultado</h3>
                            <p>A identidade visual é pensada para fortalecer a imagem da sua empresa, melhorar a percepção de valor e apoiar a conversão em todos os pontos de contato com o cliente.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaGlobeAmericas /></div>
                        <div className="mil-step-content">
                            <h3>Experiência internacional</h3>
                            <p>A BeChange já acompanhou clientes que abriram ou expandiram empresas no Brasil, EUA, Emirados Árabes, França, Itália, Austrália e outros países, levando identidade visual para empresas que atuam em mercados competitivos.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCertificate /></div>
                        <div className="mil-step-content">
                            <h3>Segurança e profissionalismo</h3>
                            <p>A BeChange conta com certificações Adegraf, ADG, ABCOM e registro DUNS, reforçando a seriedade do trabalho e a segurança para quem contrata a agência de identidade visual.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mil-p-90-30" style={{ paddingTop: '30px' }}>
                    <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                    <div className="mil-center mil-up mil-mb-30">
                        <h2 id="faq" style={{ whiteSpace: 'normal' }}>
                            Perguntas frequentes sobre <br className="mil-desktop-br" />
                            criação de identidade visual
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

                {/* CTA Final Section */}
                <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                    <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                    <div className="mil-center mil-up mil-mb-30">
                        <h2 style={{ whiteSpace: 'normal' }}>
                            Pronto para criar a identidade visual <br className="mil-desktop-br" />
                            profissional da sua empresa?
                        </h2>
                    </div>
                    <p className="mil-up mil-section-description mil-mb-30">
                        Se você quer que sua empresa pareça mais profissional, transmita confiança e se destaque no mercado, o próximo passo é fazer a criação de identidade visual do jeito certo.
                    </p>
                    <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20receber%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20identidade%20visual%20profissional." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                            <span>Solicitar proposta de identidade visual</span>
                        </Link>
                        <Link href="#portfolio" className="mil-link">
                            <span>Ver portfólio de identidades visuais</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutIdentidadeVisual;
