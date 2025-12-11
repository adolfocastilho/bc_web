import { useState } from "react";
import Link from "next/link";
import { FaQuoteLeft, FaPaintBrush, FaPalette, FaFont, FaStar, FaLayerGroup, FaBook, FaFileAlt, FaRocket, FaChevronDown, FaAward, FaCheckCircle, FaPlus, FaSearch, FaBox, FaUserTie, FaBuilding, FaChartLine, FaStethoscope, FaShieldAlt, FaFlag, FaBriefcase, FaUserCog, FaBullseye, FaGlobeAmericas, FaCertificate, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import ExportedImage from "@components/common/ExportedImage";
import RecognitionSection from "@components/sections/Recognition";

const AboutCriacaoDeSites = () => {
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
            question: 'Quanto custa um site profissional para empresa ou landing page de alta conversão',
            answer: 'O custo de um site profissional para empresa ou de uma landing page de alta conversão varia conforme o escopo: número de páginas, complexidade de conteúdo, integrações e nível de personalização. Na BeChange, a criação de sites profissionais é sempre orçada com base no seu projeto real, e você recebe uma proposta clara com faixas de investimento, prazos e o que está incluso antes de começar.'
        },
        {
            question: 'Como funciona o orçamento na criação de sites profissionais — o preço é fechado ou por escopo',
            answer: 'Na BeChange, o preço da criação de sites profissionais não é por hora, e sim por escopo fechado. Após o briefing, definimos quais páginas serão criadas, quais integrações serão feitas, quais recursos o site institucional ou a landing page profissional precisam ter e, a partir disso, montamos um valor fechado. Isso facilita a comparação com outras agências de criação de sites e dá previsibilidade de investimento.'
        },
        {
            question: 'Em quanto tempo um site institucional profissional ou landing page fica pronto',
            answer: 'O prazo médio para criação de um site institucional profissional costuma ser de algumas semanas, dependendo da quantidade de páginas e da agilidade nos retornos. Já uma landing page profissional focada em conversão normalmente fica pronta em menos tempo, por ser mais enxuta. Em ambos os casos, o cronograma é definido já na proposta, para que você saiba quando o site estará pronto para receber tráfego orgânico e tráfego pago.'
        },
        {
            question: 'O que está incluso no projeto de criação de site profissional da BeChange',
            answer: 'O projeto de criação de site profissional da BeChange inclui arquitetura de informação, layout exclusivo, desenvolvimento, SEO on-page, ajustes de performance, configuração de páginas legais (LGPD), integrações combinadas em briefing e suporte inicial após o lançamento. Tudo pensado para que seu site institucional ou landing page nasça pronto para gerar leads e fortalecer a presença digital da sua marca.'
        },
        {
            question: 'Vocês desenvolvem site em WordPress com blog e SEO para conteúdo',
            answer: 'Sim. Trabalhamos com WordPress e outras plataformas profissionais quando fazem sentido para o seu projeto. É possível ter um site profissional com blog integrado, categorias pensadas para SEO e estrutura pronta para publicar conteúdos que tragam tráfego orgânico todos os meses. A escolha da tecnologia é feita considerando estratégia de conteúdo, facilidade de edição e crescimento do projeto.'
        },
        {
            question: 'Depois de pronto vou conseguir editar textos, imagens e páginas do site sozinho',
            answer: 'Sim. Um dos diferenciais da BeChange como agência de criação de sites é entregar sites institucionais e landing pages profissionais com painel simples de edição. Você consegue atualizar textos, trocar imagens e fazer ajustes pontuais sem depender de freelancer para cada mudança. Também entregamos um manual de uso e treinamento básico para a sua equipe.'
        },
        {
            question: 'A BeChange cuida de domínio, hospedagem, e-mails profissionais e configurações técnicas',
            answer: 'Podemos orientar ou assumir junto com você a parte técnica: registro de domínio, contratação de hospedagem, configuração de e-mails profissionais, SSL e DNS. O objetivo é que o site profissional entre no ar já com tudo configurado corretamente, pronto para ser indexado pelo Google e receber campanhas de tráfego pago.'
        },
        {
            question: 'O site já sai com SEO on-page e pronto para campanhas de tráfego pago',
            answer: 'Sim. A criação de sites profissionais na BeChange inclui SEO on-page desde a base: estrutura de headings, URLs amigáveis, meta titles, meta descriptions, performance técnica e preparo para conteúdos futuros. Também entregamos as páginas otimizadas para serem usadas como landing pages em campanhas de Google Ads, Meta Ads e outras mídias, com foco em conversão e rastreamento de leads.'
        },
        {
            question: 'Vocês oferecem manutenção, suporte e melhorias após a criação do site',
            answer: 'Depois da publicação, oferecemos suporte inicial para ajustes finos e correções. Se a sua empresa precisa de acompanhamento contínuo, é possível contratar planos de manutenção e evolução do site: criação de novas páginas, otimização de conversão, melhorias de SEO e suporte recorrente para a presença digital.'
        },
        {
            question: 'Posso começar com uma landing page profissional e depois evoluir para um site institucional completo',
            answer: 'Sim. Muitos clientes começam com uma landing page profissional para validar uma oferta, campanha ou serviço específico. Quando os resultados aparecem, o projeto evolui para um site institucional completo, blog, áreas restritas ou loja virtual. Toda a criação é pensada para ser escalável, mantendo a mesma linha de identidade visual e estratégia definidas com a BeChange.'
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
                        Criação de sites institucionais e landing pages profissionais para empresas
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Seu site não pode ser só um cartão de visitas online. Fazemos criação de sites profissionais, institucionais e landing pages com SEO desde a base, velocidade e conversão, preparados para tráfego pago. Alinhamos conteúdo, design e integrações para sua empresa atrair visitantes certos, gerar leads qualificados e fortalecer a presença digital de forma constante e mensurável.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="#portfolio" className="mil-btn mil-sm-btn mil-rounded">
                            <span>Ver Portfólio</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Por que o site não traz resultados Section */}
            <div className="mil-p-90-30" style={{ paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="por-que-nao-traz-resultados" style={{ whiteSpace: 'normal' }}>
                        Por que o seu site atual <br className="mil-mobile-br" />
                        não traz resultados
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Site bonito que não gera leads nem contatos</h3>
                            <p>Talvez você já tenha um site no ar, visualmente ok, mas que não traz pedidos de orçamento, formulários preenchidos ou novos clientes. Isso acontece quando o site foi construído como portfólio ou cartão de visitas, e não como ferramenta de vendas. Faltam chamadas claras, provas sociais, ofertas bem estruturadas e caminhos simples para o visitante entrar em contato ou comprar.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Sem SEO o site não aparece no Google</h3>
                            <p>Outro problema comum é o site praticamente invisível no Google. Sem uma estrutura de SEO on-page bem feita — títulos, descrições, headings, URLs, conteúdos estratégicos e boa performance — o site não aparece nas buscas certas. O resultado é simples: pouca visita qualificada, poucas oportunidades, pouco retorno sobre o investimento.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Site lento e difícil de usar no celular</h3>
                            <p>Mais de metade dos acessos hoje vêm do celular. Se o site demora para carregar, quebra no mobile ou é confuso de navegar, o usuário desiste em poucos segundos. Além de prejudicar a experiência, isso derruba seus resultados em campanhas e também no SEO, já que velocidade e usabilidade contam para o Google.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Falta de estratégia para tráfego pago e campanhas</h3>
                            <p>Muita empresa investe em Google Ads ou anúncios nas redes sociais, mas manda o usuário para uma página genérica, sem foco em conversão. Isso encarece o custo por lead e reduz o ROI da campanha. Um site ou landing page que não foi desenhado já pensando no tráfego pago dificilmente vai performar bem.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserCog /></div>
                        <div className="mil-step-content">
                            <h3>Dependência de freelancer para qualquer ajuste simples</h3>
                            <p>Atualizar um texto, trocar uma foto, ajustar um botão não deveria exigir abrir chamado, esperar dias e depender de um terceiro. Quando o site é complexo ou mal estruturado, a empresa perde autonomia, atrasa ajustes e fica engessada em testes de marketing. Isso custa tempo e dinheiro.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Criação de sites profissionais BeChange Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="criacao-sites-bechange" style={{ whiteSpace: 'normal' }}>
                        Criação de sites profissionais BeChange
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Agência de criação de sites institucionais e landing pages profissionais</h3>
                            <p>A BeChange é uma agência especializada em criação de sites institucionais e landing pages profissionais para empresas, profissionais liberais e negócios digitais. O foco não é só entregar um layout bonito, mas sim um site que comunique bem, gere confiança e converta visitas em oportunidades reais.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>Infraestrutura completa e Zero Dor de Cabeça Técnica</h3>
                            <p>Sabemos que a parte técnica pode ser um obstáculo. Por isso, a BeChange atua como seu braço direito de tecnologia. Nós cuidamos de tudo para você: prestamos assessoria completa na compra do domínio, orientamos a contratação do melhor servidor e realizamos toda a configuração da infraestrutura. Entregamos seu projeto configurado e pronto para rodar, para que você não precise se preocupar com setups complexos.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Site alinhado à identidade visual e ao posicionamento da sua marca</h3>
                            <p>Seu site precisa parecer e se comportar como a sua marca. Integramos posicionamento, identidade visual, tom de voz e estratégia de comunicação para que o site transmita profissionalismo em cada detalhe. Isso vale para cores, tipografia, ícones, fotos, linguagem e estrutura de conteúdo.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Site profissional pensado como máquina de gerar oportunidades 24h por dia</h3>
                            <p>Tratamos o site como uma máquina de gerar leads que trabalha para você o tempo todo. Estruturamos páginas, blocos e chamadas para guiar o visitante desde o primeiro contato até o pedido de orçamento, o agendamento, o cadastro ou a compra. Sempre com foco em conversão e mensuração de resultados.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depoimentos Section - posicionada após Criação de sites profissionais BeChange */}
            <RecognitionSection />

            {/* Tipos de sites que criamos Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="tipos-de-sites" style={{ whiteSpace: 'normal' }}>
                        Tipos de sites que criamos <br className="mil-mobile-br" />
                        para sua empresa
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Site institucional profissional para empresas e prestadores de serviço</h3>
                            <p>Site institucional completo, ideal para empresas, clínicas, escritórios, indústrias e prestadores de serviço. Estruturamos páginas como Home, Sobre, Serviços, Portfólio, Depoimentos, Blog e Contato, sempre com foco em credibilidade, clareza de oferta e caminho simples para falar com o time comercial.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Criação de landing page profissional para campanhas e lançamentos</h3>
                            <p>Landing pages enxutas e objetivas, focadas em uma única ação: capturar leads, vender um produto, lotar um evento ou lançar um serviço. Conteúdo direto ao ponto, prova social, oferta bem amarrada e formulário ou botão de WhatsApp em destaque. Perfeitas para campanhas de Google Ads e Meta Ads.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Site profissional com blog para autoridade e SEO</h3>
                            <p>Para marcas que querem construir autoridade e tráfego orgânico, desenvolvemos sites com blog integrado e estrutura de categorias pensada para SEO. Assim, além de ter uma página institucional forte, você consegue publicar conteúdos que atraem visitas qualificadas todos os meses.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>Loja virtual essencial para vender produtos online</h3>
                            <p>Quando faz sentido para o negócio, estruturamos uma loja virtual enxuta e funcional, com carrinho, meios de pagamento e página de produto clara, sem complicação desnecessária. Tudo integrado à identidade visual e à estratégia digital já definida com a empresa.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFlag /></div>
                        <div className="mil-step-content">
                            <h3>One page estratégica para ofertas pontuais e lançamentos rápidos</h3>
                            <p>Para projetos mais enxutos ou ofertas específicas, criamos sites one page organizados em blocos bem definidos. É uma solução prática para testes de mercado, lançamentos iniciais ou serviços com proposta simples, mas que ainda precisam de uma apresentação profissional.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elementos que um site profissional precisa ter Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="elementos-site-profissional" style={{ whiteSpace: 'normal' }}>
                        Elementos que um site profissional <br className="mil-mobile-br" />
                        precisa ter
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Estrutura de conteúdo clara e focada em conversão</h3>
                            <p>Começamos pela mensagem certa. Estruturamos o conteúdo para que o visitante entenda rapidamente o que você faz, para quem faz e qual problema resolve. Trabalhamos títulos fortes, subtítulos, bullets, prova social e chamadas para ação, sempre com foco em conversão e na jornada do usuário.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Layout responsivo em desktop, tablet e mobile</h3>
                            <p>Todo o layout é pensado desde o início para funcionar bem em diferentes tamanhos de tela. Trabalhamos com grid responsivo, tipografia legível e espaçamento confortável, garantindo que a navegação seja agradável tanto no computador quanto no celular.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Criação de site com SEO desde a base técnica</h3>
                            <p>SEO não é um item extra. Estruturamos o site com boas práticas de SEO on-page já na criação: headings organizados, URLs amigáveis, meta tags otimizadas, uso correto de palavras chave, sitemap, robots e estrutura pronta para conteúdos futuros.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Performance e velocidade otimizadas para campanhas</h3>
                            <p>O site é desenvolvido com foco em velocidade. Otimizamos imagens, scripts e recursos para reduzir o tempo de carregamento, o que melhora tanto a experiência do usuário quanto o desempenho em campanhas de tráfego pago e posições no Google.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Segurança, certificados e boas práticas de desenvolvimento</h3>
                            <p>Configuramos HTTPS, certificados de segurança e boas práticas de desenvolvimento para reduzir riscos e transmitir confiança ao usuário. Isso é fundamental para formulários, dados sensíveis e e-commerce.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Integrações com WhatsApp, formulários, CRM e automações</h3>
                            <p>Conectamos o site às ferramentas que você já usa ou pretende usar: WhatsApp, e-mail marketing, CRM, plataformas de automação, sistemas de agendamento e outras integrações necessárias para o seu modelo de negócio.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">7</div>
                        <div className="mil-step-content">
                            <h3>UX, acessibilidade e experiência do usuário em primeiro lugar</h3>
                            <p>Trabalhamos com foco em UX, garantindo navegação intuitiva, hierarquia clara de informação, botões bem posicionados e leitura confortável. Também consideramos boas práticas de acessibilidade para tornar o site mais inclusivo.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* O que está incluso na criação de sites Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="o-que-esta-incluso" style={{ whiteSpace: 'normal' }}>
                        O que está incluso na criação <br className="mil-mobile-br" />
                        de sites BeChange
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Diagnóstico inicial da presença digital da sua empresa</h3>
                            <p>Antes de qualquer tela, fazemos um diagnóstico da sua presença atual: site existente, redes sociais, materiais de venda, marca e posicionamento. Assim, o novo site nasce alinhado com a realidade do seu negócio.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLayerGroup /></div>
                        <div className="mil-step-content">
                            <h3>Arquitetura de informação e mapa de páginas do site</h3>
                            <p>Montamos a estrutura do site em um mapa claro, definindo quais páginas serão criadas, como se conectam e qual o objetivo de cada uma. Essa etapa evita retrabalho e deixa o projeto organizado desde o início.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Design exclusivo alinhado à identidade visual da marca</h3>
                            <p>Criamos layouts personalizados, alinhados à sua identidade visual e ao posicionamento desejado. Nada de temas genéricos sem personalidade. O objetivo é que o site pareça realmente da sua empresa, e não igual a todo mundo.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Desenvolvimento em plataforma profissional e escalável</h3>
                            <p>Desenvolvemos o site em ambiente profissional, com estrutura escalável e organizada, facilitando futuras evoluções, integrações e manutenções.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Configurações completas de SEO on-page e rastreamentos</h3>
                            <p>Já entregamos o site com SEO on-page configurado e com a base pronta para ferramentas de análise e rastreamento, como Google Analytics, Google Tag Manager, pixels de anúncios e eventos de conversão.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>Páginas legais e LGPD — política de privacidade, termos e cookies</h3>
                            <p>Incluímos as páginas legais essenciais — política de privacidade, termos de uso e aviso de cookies — ajustadas para o contexto da sua empresa, ajudando a adequar o site às exigências da LGPD.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBook /></div>
                        <div className="mil-step-content">
                            <h3>Treinamento, manual de uso e autonomia para a sua equipe</h3>
                            <p>Você não fica refém de ninguém para atualizar o próprio site. Entregamos um manual simples e treinamento para que a sua equipe possa trocar textos, imagens e pequenos conteúdos com segurança.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserCog /></div>
                        <div className="mil-step-content">
                            <h3>Suporte pós lançamento com acompanhamento inicial</h3>
                            <p>Após o lançamento, acompanhamos o comportamento do site em um período inicial e oferecemos suporte para pequenos ajustes, garantindo que tudo funcione como planejado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Como funciona o processo Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="como-funciona-processo" style={{ whiteSpace: 'normal' }}>
                        Como funciona o processo de <br className="mil-mobile-br" />
                        criação de sites BeChange
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Fase 1 — briefing estratégico e entendimento do seu negócio</h3>
                            <p>Iniciamos com uma conversa estruturada para entender o seu negócio, público alvo, serviços, diferenciais e objetivos com o site.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Fase 2 — definição do escopo, páginas e arquitetura de navegação</h3>
                            <p>Com base no briefing, definimos o que será entregue — páginas, seções, funcionalidades, integrações e prazos. Dessa etapa sai o escopo claro do projeto.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Fase 3 — design das principais telas e aprovação visual</h3>
                            <p>Criamos o layout das páginas principais e apresentamos para ajustes. Essa fase garante que você aprove o visual antes de avançar para desenvolvimento.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Fase 4 — desenvolvimento, integrações e SEO on-page</h3>
                            <p>Com o design aprovado, partimos para o desenvolvimento, configurações técnicas, integrações e implementação de SEO on-page.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Fase 5 — testes em dispositivos reais, ajustes e publicação</h3>
                            <p>Testamos o site em diferentes navegadores e dispositivos, corrigimos eventuais detalhes e, com tudo validado, fazemos o lançamento oficial.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Fase 6 — treinamento da equipe, manual e suporte inicial</h3>
                            <p>Após o lançamento, treinamos a sua equipe, entregamos o manual de uso e acompanhamos o site nos primeiros momentos para garantir estabilidade.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empresas que criaram seus sites Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="casos-de-sucesso" style={{ whiteSpace: 'normal' }}>
                        Empresas que criaram seus sites <br className="mil-mobile-br" />
                        com a BeChange
                    </h2>
                </div>

                <h3 className="mil-up mil-center mil-mb-30">Caso 1 — clínica e consultório que aumentou os agendamentos</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Site institucional para clínica da área de saúde, com foco em agendamento de consultas. Resultado esperado e comunicável neste espaço — aumento de agendamentos e melhoria na qualidade dos contatos recebidos.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Caso 2 — empresa de serviços que passou a gerar leads todos os meses</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Empresa de serviços B2B com site antigo que não gerava retorno. Após reformulação com foco em oferta clara, provas sociais e formulários estratégicos, o site passou a gerar leads qualificados todos os meses.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Caso 3 — negócio digital com landing pages para lançamentos</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Negócio digital com lançamentos recorrentes, que precisava de landing pages consistentes e alinhadas à marca. Estruturamos páginas de captura e vendas para rodar campanhas de tráfego pago com previsibilidade maior.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Ver mais projetos no portfólio BeChange</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '0' }}>
                    Bloco com link para o portfólio completo da BeChange, com projetos de identidade visual, sites institucionais, landing pages e materiais digitais.
                </p>
            </div>

            {/* Para quem é a criação de sites Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="para-quem" style={{ whiteSpace: 'normal' }}>
                        Para quem é a criação de sites <br className="mil-mobile-br" />
                        institucionais e landing pages
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaStethoscope /></div>
                        <div className="mil-step-content">
                            <h3>Profissionais liberais — médicos, dentistas, advogados, terapeutas</h3>
                            <p>Profissionais que precisam de um site sério, claro e confiável para apresentar serviços, especialidades, bio e canais de contato, sem depender apenas de redes sociais.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Pequenas e médias empresas que precisam de presença digital profissional</h3>
                            <p>Negócios que já existem fisicamente ou por indicação, mas ainda não têm um site à altura da qualidade do serviço que entregam.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Negócios digitais, infoprodutores e projetos de lançamento</h3>
                            <p>Projetos que precisam de landing pages, páginas de vendas e áreas de conteúdo para distribuir materiais, capturar leads e vender produtos digitais.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Empresas que precisam reformular um site antigo que não converte</h3>
                            <p>Empresas com site desatualizado, confuso ou difícil de editar, que desejam uma nova estrutura com foco em resultado.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFlag /></div>
                        <div className="mil-step-content">
                            <h3>Marcas que querem posicionamento forte e previsível em 2025</h3>
                            <p>Negócios que entenderam que presença profissional na internet não é luxo, é base para crescer com previsibilidade.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quanto custa criar um site Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="quanto-custa" style={{ whiteSpace: 'normal' }}>
                        Quanto custa criar um <br className="mil-mobile-br" />
                        site profissional
                    </h2>
                </div>

                <h3 className="mil-up mil-center mil-mb-30">Faixas de investimento para site institucional profissional</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    O investimento em um site institucional profissional varia conforme número de páginas, complexidade de conteúdo, integrações necessárias e nível de personalização. Trabalhamos com faixas de valor claras, alinhadas ao escopo definido na proposta.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Fatores que influenciam o preço de um site profissional</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Alguns fatores que impactam o valor final — escopo de páginas, produção de conteúdo ou uso de conteúdo enviado, integrações específicas, área restrita, blog ativo, loja virtual, idiomas adicionais e nível de suporte desejado.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Como funciona a proposta de criação de site na BeChange</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '0' }}>
                    Após o briefing e a definição de escopo, você recebe uma proposta clara, com o que está incluso, prazos, etapas e formas de pagamento. Sem letras pequenas.
                </p>
            </div>

            {/* BeChange x outras formas Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="bechange-vs-outros" style={{ whiteSpace: 'normal' }}>
                        BeChange x outras formas <br className="mil-mobile-br" />
                        de criar site
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserTie /></div>
                        <div className="mil-step-content">
                            <h3>BeChange x freelancer — continuidade, processo e suporte</h3>
                            <p>Freelancers podem entregar bons projetos, mas muitas vezes não oferecem processo estruturado, documentação e suporte contínuo. Na BeChange, você tem uma equipe e um método, não apenas uma pessoa.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>BeChange x agência genérica — foco em estratégia, SEO e conversão</h3>
                            <p>Enquanto muitas agências produzem apenas o visual, nossa entrega parte da estratégia, passa por conteúdo, UX, SEO e termina no site pronto para receber tráfego. O foco não é só estética, é performance.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLayerGroup /></div>
                        <div className="mil-step-content">
                            <h3>BeChange x fazer sozinho em Wix, Elementor ou construtor pronto</h3>
                            <p>Construtores prontos são úteis para testes, mas exigem tempo, conhecimento técnico e visão de marketing. Se o seu foco é tocar o negócio, faz sentido delegar o site para quem vive isso no dia a dia.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBriefcase /></div>
                        <div className="mil-step-content">
                            <h3>Por que ter uma agência parceira pensando em longo prazo</h3>
                            <p>Trabalhar com uma agência parceira permite evoluir o site, criar novas páginas, lançar campanhas e ajustar o posicionamento sem ter que recomeçar do zero a cada ano.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* O que é um site institucional Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="o-que-e-site-institucional" style={{ whiteSpace: 'normal' }}>
                        O que é um site institucional <br className="mil-mobile-br" />
                        e o que é uma landing page
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>O que é um site institucional para empresas e marcas</h3>
                            <p>Site institucional é a base da presença digital da empresa. Apresenta quem você é, o que faz, como faz, para quem faz, além de mostrar provas de qualidade e canais de contato.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>O que é uma landing page de alta conversão</h3>
                            <p>Landing page é uma página única, criada com um único objetivo — gerar cadastro, vender um produto, captar inscrições ou agendar uma conversa. Tudo nela é construído para levar a essa ação.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>Site institucional, landing page ou loja virtual — como escolher para o seu negócio</h3>
                            <p>A escolha depende do momento da empresa e dos objetivos. Em alguns casos, começar por uma landing page faz sentido. Em outros, o site institucional completo é o caminho mais adequado. Quando o foco é venda de produtos, a loja virtual entra na estratégia.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Por que ter um site profissional em 2025 Section */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="por-que-site-2025" style={{ whiteSpace: 'normal' }}>
                        Por que ter um site <br className="mil-mobile-br" />
                        profissional em 2025
                    </h2>
                </div>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaGlobeAmericas /></div>
                        <div className="mil-step-content">
                            <h3>Site profissional como centro da sua presença digital</h3>
                            <p>Em um cenário de múltiplos canais, o site é o ponto central onde tudo se organiza. É o lugar seguro e estável que não depende do algoritmo de nenhuma rede.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Site profissional e redes sociais trabalhando juntos</h3>
                            <p>Redes sociais atraem atenção e geram engajamento. O site organiza, aprofunda e converte essa atenção em negócios. Um canal não substitui o outro, eles se complementam.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSearch /></div>
                        <div className="mil-step-content">
                            <h3>Como um site bem feito reduz dependência de indicações e improviso</h3>
                            <p>Com um site profissional, você passa a ser encontrado por quem está ativamente procurando o que você faz, reduzindo a dependência exclusiva de indicações e de ações pontuais.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div style={{ paddingTop: '0', paddingBottom: '30px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px', marginTop: '0' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="faq" style={{ whiteSpace: 'normal' }}>
                        Perguntas frequentes sobre <br className="mil-desktop-br" />
                        criação de sites profissionais
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
                        Pronto para criar o site profissional <br className="mil-desktop-br" />
                        da sua empresa?
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30">
                    Se você quer um site institucional ou uma landing page profissional que comprove o nível do seu trabalho, transmita profissionalismo e segurança em cada detalhe e siga as boas práticas de SEO, performance e conversão para se destacar no Google, o próximo passo é conversar com a BeChange.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20receber%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20site%20profissional." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                        <span>Solicitar proposta de criação de site</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCriacaoDeSites;
