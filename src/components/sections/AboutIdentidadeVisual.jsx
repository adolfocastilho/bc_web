import { useState } from "react";
import Link from "next/link";
import { FaQuoteLeft, FaPaintBrush, FaPalette, FaFont, FaStar, FaLayerGroup, FaBook, FaFileAlt, FaRocket, FaChevronDown, FaAward, FaCheckCircle, FaPlus, FaSearch, FaBox } from "react-icons/fa";
import ExportedImage from "@components/common/ExportedImage";

const AboutIdentidadeVisual = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

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

    return (
        <section id="about">
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
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        O que está incluso <br className="mil-mobile-br" />
                        na sua identidade visual <br className="mil-mobile-br" />
                        profissional
                    </h2>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description mil-mb-30-mobile">
                    Aqui você não recebe só um logo. Você contrata a criação de identidade visual completa para sua empresa, pronta para usar no dia a dia.
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
                <div className="mil-center mil-up">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Como funciona o <br className="mil-mobile-br" />
                        passo a passo da criação <br className="mil-mobile-br" />
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
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Quanto custa criar uma <br className="mil-mobile-br" />
                        identidade visual profissional <br className="mil-mobile-br" />
                        para sua empresa
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30-mobile">
                    O preço da criação de identidade visual profissional varia de acordo com o que sua empresa precisa. Uma identidade visual para empresas não é só "um logo", envolve estudo do negócio, criação de logotipo, definição de cores, fontes, elementos visuais e um guia de uso bem feito.
                </p>
                <p className="mil-up mil-section-description mil-mb-30-mobile">
                    Como agência de identidade visual, o valor é calculado pelo tempo de análise, nível de profundidade do projeto e quantidade de materiais envolvidos. Em vez de tabela engessada, trabalhamos com proposta personalizada, baseada na realidade da sua empresa e no resultado que você busca.
                </p>
            </div>

            <div className="mil-p-90-30" style={{ paddingTop: '0' }}>
                <h3 className="mil-up mil-mb-60 mil-center">O que influencia no preço da identidade visual</h3>

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

                <div className="mil-center">
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Para saber o valor exato para sua empresa, o próximo passo é solicitar uma proposta personalizada.
                    </p>
                    <div className="mil-up">
                        <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20receber%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20identidade%20visual%20profissional." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                            <span>Quero um orçamento</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutIdentidadeVisual;
