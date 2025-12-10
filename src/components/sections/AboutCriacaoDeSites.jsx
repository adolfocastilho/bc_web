import { useState } from "react";
import Link from "next/link";
import { FaQuoteLeft, FaPaintBrush, FaPalette, FaFont, FaStar, FaLayerGroup, FaBook, FaFileAlt, FaRocket, FaChevronDown, FaAward, FaCheckCircle, FaPlus, FaSearch, FaBox, FaUserTie, FaBuilding, FaChartLine, FaStethoscope, FaShieldAlt, FaFlag, FaBriefcase, FaUserCog, FaBullseye, FaGlobeAmericas, FaCertificate, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import ExportedImage from "@components/common/ExportedImage";

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

                <h3 className="mil-up mil-center mil-mb-30">Agência de criação de sites institucionais e landing pages profissionais</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    A BeChange é uma agência especializada em criação de sites institucionais e landing pages profissionais para empresas, profissionais liberais e negócios digitais. O foco não é só entregar um layout bonito, mas sim um site que comunique bem, gere confiança e converta visitas em oportunidades reais.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Site alinhado à identidade visual e ao posicionamento da sua marca</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Seu site precisa parecer e se comportar como a sua marca. Integramos posicionamento, identidade visual, tom de voz e estratégia de comunicação para que o site transmita profissionalismo em cada detalhe. Isso vale para cores, tipografia, ícones, fotos, linguagem e estrutura de conteúdo.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Site profissional pensado como máquina de gerar oportunidades 24h por dia</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '0' }}>
                    Tratamos o site como uma máquina de gerar leads que trabalha para você o tempo todo. Estruturamos páginas, blocos e chamadas para guiar o visitante desde o primeiro contato até o pedido de orçamento, o agendamento, o cadastro ou a compra. Sempre com foco em conversão e mensuração de resultados.
                </p>
            </div>

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

                <h3 className="mil-up mil-center mil-mb-30">Profissionais liberais — médicos, dentistas, advogados, terapeutas</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Profissionais que precisam de um site sério, claro e confiável para apresentar serviços, especialidades, bio e canais de contato, sem depender apenas de redes sociais.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Pequenas e médias empresas que precisam de presença digital profissional</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Negócios que já existem fisicamente ou por indicação, mas ainda não têm um site à altura da qualidade do serviço que entregam.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Negócios digitais, infoprodutores e projetos de lançamento</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Projetos que precisam de landing pages, páginas de vendas e áreas de conteúdo para distribuir materiais, capturar leads e vender produtos digitais.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Empresas que precisam reformular um site antigo que não converte</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '30px' }}>
                    Empresas com site desatualizado, confuso ou difícil de editar, que desejam uma nova estrutura com foco em resultado.
                </p>

                <h3 className="mil-up mil-center mil-mb-30">Marcas que querem posicionamento forte e previsível em 2025</h3>
                <p className="mil-up mil-section-description" style={{ marginBottom: '0' }}>
                    Negócios que entenderam que presença profissional na internet não é luxo, é base para crescer com previsibilidade.
                </p>
            </div>

            {/* FAQ Section */}
            <div style={{ paddingTop: '0', paddingBottom: '30px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px', marginTop: '0' }}></div>
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
        </section>
    );
};

export default AboutCriacaoDeSites;
