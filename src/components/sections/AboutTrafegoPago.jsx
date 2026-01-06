import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importações dos ícones utilizados
import {
    FaQuoteLeft,
    FaChevronDown,
    FaGoogle,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaChartLine,
    FaSearchDollar,
    FaBullseye,
    FaShoppingCart,
    FaUserTie,
    FaCogs,
    FaFileAlt,
    FaMedal,
    FaRocket,
    FaLightbulb,
    FaMoneyBillWave,
    FaUsers,
    FaClipboardCheck,
    FaHandshake,
    FaBuilding,
    FaSync,
    FaChartBar,
    FaTools,
    FaSearchPlus,
    FaLayerGroup,
    FaLink,
    FaClock,
    FaDollarSign,
    FaMobileAlt,
    FaPalette,
    FaPauseCircle,
    FaProjectDiagram
} from "react-icons/fa";

import ExportedImage from "@components/common/ExportedImage";
import SkeletonLoader from "@components/common/SkeletonLoader";

// Dynamic import para RecognitionSection
const RecognitionSection = dynamic(
    () => import("@components/sections/Recognition"),
    { ssr: false, loading: () => <SkeletonLoader height="400px" /> }
);


const AboutTrafegoPago = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    const faqItems = [
        {
            icon: <FaDollarSign />,
            question: 'Quanto custa a gestão de tráfego pago e qual o investimento mínimo em mídia?',
            answer: 'O valor da gestão de tráfego pago varia de acordo com o investimento total em mídia, quantidade de campanhas ativas, plataformas utilizadas e complexidade do projeto. Na BeChange, trabalhamos com proposta personalizada que considera suas metas de conversão, canais estratégicos e orçamento disponível para mídia. O investimento mínimo em mídia paga recomendado depende do segmento e objetivo, mas geralmente campanhas começam a ter resultados consistentes e dados suficientes para otimização a partir de R$ 1.500 a R$ 3.000 mensais em verba de anúncios.'
        },
        {
            icon: <FaClock />,
            question: 'Em quanto tempo os resultados das campanhas aparecem?',
            answer: 'Campanhas de tráfego pago começam a gerar dados e primeiros resultados imediatos após a ativação, mas performance consistente e otimizada geralmente aparece entre 30 e 60 dias. Esse prazo inclui o período de aprendizado das plataformas (fase em que os algoritmos coletam dados para entender qual público converte melhor), testes iniciais de públicos e criativos, e ciclo de otimização baseado em dados reais de conversão. Resultados podem aparecer antes, mas maturidade de campanha e ROI estável levam esse tempo.'
        },
        {
            icon: <FaMobileAlt />,
            question: 'Vocês trabalham com Google Ads, Meta Ads ou outras plataformas?',
            answer: 'Sim, trabalhamos com gestão profissional de campanhas no Google Ads (Rede de Pesquisa, Display, YouTube, Performance Max, Shopping), Meta Ads (Facebook e Instagram), LinkedIn Ads para B2B e outras plataformas conforme a estratégia definida para cada cliente. A escolha dos canais é feita com base no perfil do público-alvo, tipo de produto ou serviço, objetivo de negócio e orçamento disponível. Não empurramos plataforma, escolhemos o canal certo para o seu resultado.'
        },
        {
            icon: <FaClipboardCheck />,
            question: 'O que exatamente está incluso no serviço de gestão de tráfego pago?',
            answer: 'O serviço completo inclui planejamento estratégico de campanhas, criação e configuração técnica de anúncios, segmentação refinada de públicos, definição de estratégias de lance e orçamentos, instalação e configuração de pixels e rastreamento, análise diária de métricas, otimização contínua, testes A/B, relatórios mensais detalhados com análise de performance e reuniões de acompanhamento estratégico. Não está incluso produção de criativos avançados (fotos e vídeos profissionais) nem o valor da mídia paga em si, que você paga diretamente para Google e Meta.'
        },
        {
            icon: <FaRocket />,
            question: 'Preciso ter um site para fazer campanhas de tráfego pago?',
            answer: 'Ter um site ou landing page otimizada para conversão é altamente recomendado e em muitos casos obrigatório para campanhas efetivas. Um site profissional, rápido e focado em conversão aumenta drasticamente as taxas de conversão, permite implementação correta de pixels e eventos de rastreamento, dá credibilidade para o público que vem dos anúncios e possibilita remarketing estratégico. Se você ainda não tem site ou tem um site antigo e ruim, podemos criar junto com a estratégia de tráfego para garantir resultado máximo do investimento em mídia.'
        },
        {
            icon: <FaPalette />,
            question: 'Vocês criam os criativos (imagens e vídeos) dos anúncios?',
            answer: 'A gestão de tráfego pago foca na estratégia de campanhas, segmentação, veiculação, otimização e análise de performance. Criativos publicitários (fotos profissionais, vídeos, motion graphics) podem ser produzidos separadamente pela BeChange através dos serviços de design gráfico e edição de vídeo, ou você pode fornecer esses materiais se já tiver produção interna ou outro fornecedor. Para anúncios de texto e copies persuasivas, isso está incluso na gestão.'
        },
        {
            icon: <FaChartBar />,
            question: 'Recebo relatórios de desempenho e com qual frequência?',
            answer: 'Sim, você recebe relatórios mensais completos e detalhados com todas as métricas relevantes: impressões, alcance, cliques, CTR (taxa de cliques), custo por clique, conversões, custo por conversão, ROAS (retorno sobre investimento em anúncios) e análise qualitativa dos resultados com insights e recomendações estratégicas. Além dos relatórios formais, fazemos reuniões mensais de acompanhamento para discutir performance, ajustes táticos e planejamento dos próximos ciclos.'
        },
        {
            icon: <FaSync />,
            question: 'Qual a diferença entre gestão de tráfego e produção de conteúdo orgânico?',
            answer: 'Gestão de tráfego pago é focada em campanhas pagas nas plataformas de anúncios (Google Ads, Meta Ads, LinkedIn Ads) para gerar cliques, leads e vendas de forma acelerada, mensurável e escalável com investimento em mídia. Produção de conteúdo para redes sociais é focada em posts orgânicos, stories, reels, crescimento de comunidade e engajamento sem investimento direto em anúncios. São estratégias complementares com objetivos e métricas diferentes: tráfego pago gera resultado rápido e previsível, orgânico constrói relacionamento e autoridade no longo prazo.'
        },
        {
            icon: <FaPauseCircle />,
            question: 'Posso pausar ou cancelar as campanhas a qualquer momento?',
            answer: 'Sim, você tem controle total sobre suas campanhas e investimento em mídia. Podemos pausar, ajustar orçamento, redirecionar estratégia ou encerrar campanhas a qualquer momento conforme necessidade do seu negócio. Os contratos de gestão geralmente têm período mínimo recomendado (normalmente 3 meses) para garantir tempo suficiente de otimização e maturidade de campanha, mas as campanhas em si nas plataformas podem ser gerenciadas com flexibilidade total.'
        },
        {
            icon: <FaProjectDiagram />,
            question: 'Como a BeChange integra tráfego pago com estratégia de marca e design?',
            answer: 'Na BeChange, gestão de tráfego pago não é um serviço isolado do resto da estratégia digital. Integramos as campanhas com o posicionamento de marca, identidade visual, tom de comunicação e arquitetura de conversão já estabelecidos ou desenvolvemos tudo de forma coordenada se você ainda não tiver isso estruturado. Isso garante consistência na mensagem do primeiro clique até o pós-venda, fortalece reconhecimento de marca e melhora drasticamente a performance das campanhas porque o público encontra a mesma linguagem, visual e proposta de valor em todos os pontos de contato.'
        }
    ];

    return (
        <section id="sobre">
            {/* Intro Section */}
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
                        Por que sua empresa precisa de Gestão de Tráfego Profissional?
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Suas campanhas de anúncios não podem ser apenas cliques e impressões. O mercado digital brasileiro está saturado de empresas queimando dinheiro em campanhas sem estratégia, desperdiçando orçamento com segmentações amadoras e perdendo vendas por falta de mensuração adequada. A diferença entre gastar e investir está na gestão profissional que entende o ciclo completo: da segmentação estratégica até a conversão final no seu site ou landing page.
                    </p>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Fazemos gestão de tráfego pago estratégica para Google Ads, Facebook Ads e Instagram Ads, alinhando mídia, mensagem e destino para sua empresa atrair leads qualificados e vender mais de forma previsível. Aqui você não contrata apenas veiculação de anúncios, você contrata aceleração de resultados com transparência total sobre cada real investido e retorno gerado.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20gratuita%20de%20tr%C3%A1fego%20pago." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                            <span>Solicitar análise gratuita</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 2: DIAGNÓSTICO (DORES) */}
            <div className="mil-p-90-30" style={{ paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="por-que-nao-traz-resultados" style={{ whiteSpace: 'normal' }}>
                        Por que suas campanhas atuais <br className="mil-mobile-br" />
                        não trazem o retorno esperado
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria das empresas que nos procura já tentou fazer tráfego pago antes e teve experiências frustrantes. Investiram milhares de reais, viram números bonitos de alcance e cliques, mas o telefone não tocou e as vendas não vieram. O problema raramente está no canal ou na plataforma. O problema está na execução amadora, na falta de estratégia integrada e na ausência de otimização baseada em dados reais de conversão.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMoneyBillWave /></div>
                        <div className="mil-step-content">
                            <h3>Investimento em mídia sem estratégia clara de conversão</h3>
                            <p>Muita empresa coloca dinheiro em anúncios sem definir objetivos claros, mapear a jornada de compra do cliente ou estabelecer métricas de sucesso mensuráveis. O resultado é verba desperdiçada em campanhas genéricas que não conversam com quem realmente está pronto para comprar. Sem estratégia definida, você atira para todos os lados esperando acertar algo, gerando cliques caros de pessoas que nunca vão converter em clientes reais.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Segmentação errada e público amplo demais</h3>
                            <p>Anúncios que aparecem para todo mundo geralmente não funcionam para ninguém. Configurar campanhas com segmentação ampla, sem refinar público por interesse real, comportamento de compra e estágio no funil é jogar dinheiro fora. Sem trabalhar audiências customizadas, lookalike de clientes reais e remarketing estratégico, a campanha alcança milhares de pessoas que nunca vão comprar de você, inflando custos e destruindo o ROI.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Landing page fraca ou destino inadequado para conversão</h3>
                            <p>Não adianta ter a melhor campanha do mundo se o destino do clique é um site genérico, lento, confuso ou sem call-to-action claro. Landing pages mal estruturadas, sem foco em conversão e com péssima experiência mobile desperdiçam todo o tráfego conquistado. A taxa de conversão despenca, o custo por lead dispara e você culpa a plataforma de anúncios quando o problema está na casa mal arrumada.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Falta de mensuração e otimização contínua baseada em dados</h3>
                            <p>Campanhas que não são analisadas diariamente e ajustadas com base em performance real perdem eficiência ao longo do tempo. Sem acompanhamento de métricas importantes, testes A/B constantes e otimização de lances e segmentações, você repete os mesmos erros indefinidamente. O algoritmo das plataformas precisa de dados de conversão para aprender e melhorar, mas sem otimização ativa você deixa dinheiro na mesa todos os dias.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCogs /></div>
                        <div className="mil-step-content">
                            <h3>Rastreamento mal configurado que impede otimização inteligente</h3>
                            <p>Pixel do Facebook instalado errado, conversões do Google Ads não configuradas corretamente, eventos importantes não rastreados. Sem rastreamento técnico impecável, você navega no escuro. Não sabe qual anúncio gerou a venda, qual público converte melhor, qual horário tem mais conversões. Toma decisões baseadas em achismos em vez de dados concretos, e as plataformas não conseguem otimizar automaticamente porque não recebem os sinais de conversão.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 3: SOLUÇÃO BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="gestao-trafego-bechange" style={{ whiteSpace: 'normal' }}>
                        Gestão de Tráfego Pago BeChange: <br className="mil-mobile-br" />
                        estratégia, execução e resultados mensuráveis
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Na BeChange, gestão de tráfego pago não é só apertar o botão "impulsionar" e torcer para funcionar. É estratégia de negócio aplicada ao ambiente digital, com planejamento criterioso, execução técnica impecável e otimização incansável focada no que realmente importa: conversão e retorno sobre investimento. Cada campanha é construída para gerar resultado concreto no seu negócio, seja lead qualificado, venda direta, agendamento ou qualquer ação que represente receita real para sua empresa.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Campanhas estruturadas para conversão, não para métricas de vaidade</h3>
                            <p>O foco não é gastar orçamento e gerar milhões de impressões que não servem para nada. Estruturamos cada campanha com objetivo claro e mensurável de conversão desde o primeiro dia. Seja captura de lead qualificado, venda no e-commerce, agendamento de consulta ou contato comercial, definimos as métricas que importam para o seu negócio e otimizamos cada centavo investido para maximizar esse resultado específico.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaGoogle /></div>
                        <div className="mil-step-content">
                            <h3>Google Ads e Meta Ads com estratégia integrada e complementar</h3>
                            <p>Trabalhamos com as principais plataformas de mídia paga do mercado: Google Ads (Pesquisa, Display, YouTube, Performance Max) e Meta Ads (Facebook e Instagram), escolhendo os canais certos para o seu público-alvo e objetivo de negócio. A estratégia é integrada: usamos Google para capturar demanda ativa de quem já busca seu produto, e Meta para gerar desejo e reconhecimento em quem ainda não conhece sua marca. Tudo coordenado para guiar o cliente pela jornada de compra completa.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUsers /></div>
                        <div className="mil-step-content">
                            <h3>Segmentação precisa e públicos refinados para conversão máxima</h3>
                            <p>Refinamos públicos por interesse real, comportamento de compra, localização geográfica, faixa etária e estágio no funil de vendas. Trabalhamos com audiências lookalike baseadas nos seus melhores clientes, remarketing estratégico para recuperar visitantes que não converteram, e públicos customizados com base em listas de contatos e comportamento no site. Seus anúncios aparecem apenas para quem tem real potencial de se tornar cliente pagante.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartBar /></div>
                        <div className="mil-step-content">
                            <h3>Rastreamento blindado e mensuração transparente de cada real investido</h3>
                            <p>Configuramos pixel do Facebook, API de Conversões, Google Analytics 4, Google Tag Manager e todos os eventos de conversão necessários para rastreamento perfeito. Você sabe exatamente de onde vêm seus leads e vendas, qual campanha, qual anúncio, qual público está gerando resultado. Isso permite otimização inteligente baseada em dados reais e tomada de decisão segura sobre onde investir mais e onde cortar orçamento.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depoimentos Section */}
            <RecognitionSection />

            {/* SEÇÃO 4: CANAIS E ESPECIALIDADES */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="tipos-de-campanhas" style={{ whiteSpace: 'normal' }}>
                        Plataformas e tipos de campanhas <br className="mil-mobile-br" />
                        que dominamos
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Cada plataforma de mídia paga tem suas particularidades, formatos específicos e públicos com comportamentos diferentes. Não acreditamos em receita de bolo ou em aplicar a mesma estratégia para todos os clientes. Dominamos tecnicamente todas as principais plataformas do mercado e escolhemos a combinação certa de canais e formatos para o perfil do seu negócio, produto e objetivo comercial.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaGoogle /></div>
                        <div className="mil-step-content">
                            <h3>Google Ads: captura de demanda ativa em múltiplos formatos</h3>
                            <p><strong>Rede de Pesquisa:</strong> Campanhas para capturar clientes no momento exato em que buscam ativamente pelo seu produto ou serviço no Google. Apareça no topo dos resultados quando seu cliente ideal está procurando exatamente o que você vende.</p>
                            <p><strong>Display e YouTube:</strong> Campanhas de awareness e consideração para construir reconhecimento de marca, educar o mercado e trabalhar remarketing visual em toda a rede de sites parceiros do Google.</p>
                            <p><strong>Performance Max:</strong> Campanhas automatizadas que otimizam entrega em todos os canais do Google simultaneamente usando machine learning para encontrar as melhores oportunidades de conversão.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFacebook /></div>
                        <div className="mil-step-content">
                            <h3>Meta Ads: Facebook e Instagram para geração de demanda e vendas</h3>
                            <p><strong>Feed, Stories e Reels:</strong> Campanhas para geração de leads, vendas de e-commerce, promoção de eventos e reconhecimento de marca. Trabalhamos com formatos de imagem estática, carrossel de produtos e vídeos curtos.</p>
                            <p><strong>Catálogo e Dynamic Ads:</strong> Para e-commerces, integramos seu catálogo de produtos com campanhas dinâmicas que mostram automaticamente os itens certos para cada pessoa com base no comportamento de navegação.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSync /></div>
                        <div className="mil-step-content">
                            <h3>Remarketing estratégico e recuperação de carrinho abandonado</h3>
                            <p>Alcançamos pessoas que já visitaram seu site, interagiram com seus anúncios, assistiram seus vídeos ou abandonaram o carrinho de compras sem finalizar. Remarketing bem feito recupera até 70% das conversões perdidas, retomando contato com leads quentes e clientes em potencial que já demonstraram interesse, com custo de aquisição muito menor que campanhas de prospecção fria.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLinkedin /></div>
                        <div className="mil-step-content">
                            <h3>LinkedIn Ads e campanhas B2B para vendas corporativas</h3>
                            <p>Para empresas que vendem para outras empresas, estruturamos campanhas no LinkedIn e Google com segmentação precisa por cargo, setor de atuação, tamanho de empresa e senioridade. Foco total em geração de leads qualificados para alimentar o pipeline comercial com oportunidades reais de negócio de alto valor.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 5: O QUE ESTÁ INCLUSO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="o-que-esta-incluso" style={{ whiteSpace: 'normal' }}>
                        O que está incluso na Gestão de <br className="mil-mobile-br" />
                        Tráfego Pago BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Gestão de tráfego pago profissional não é só criar anúncio e deixar rodando. É um processo contínuo de planejamento estratégico, execução técnica impecável, monitoramento constante e otimização baseada em dados reais. Aqui você tem uma equipe dedicada cuidando das suas campanhas todos os dias, ajustando o que não está funcionando e escalando o que traz resultado.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaClipboardCheck /></div>
                        <div className="mil-step-content">
                            <h3>Planejamento estratégico completo alinhado aos objetivos de negócio</h3>
                            <p>Antes de criar qualquer campanha, fazemos diagnóstico profundo do seu mercado, análise de concorrência, mapeamento da jornada de compra e definição clara de objetivos mensuráveis. Alinhamos metas de conversão, orçamento disponível, canais prioritários e público-alvo para garantir que cada real investido tem propósito estratégico claro.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCogs /></div>
                        <div className="mil-step-content">
                            <h3>Configuração técnica completa e estrutura de campanhas otimizada</h3>
                            <p>Configuramos as campanhas do zero nas plataformas escolhidas: estrutura de grupos de anúncios, textos persuasivos, extensões, segmentações refinadas, estratégias de lance e distribuição de orçamento. Tudo alinhado à estratégia definida e às melhores práticas de cada plataforma para maximizar performance desde o primeiro dia.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUsers /></div>
                        <div className="mil-step-content">
                            <h3>Criação e refinamento de públicos e audiências customizadas</h3>
                            <p>Criamos públicos personalizados com base em dados demográficos, interesses, comportamento online e listas de clientes. Trabalhamos com audiências lookalike dos seus melhores compradores, remarketing segmentado por ação no site e públicos de intenção de compra. Refinamento constante para garantir que seus anúncios aparecem apenas para quem tem perfil real de se tornar cliente.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaTools /></div>
                        <div className="mil-step-content">
                            <h3>Otimização diária e testes A/B para melhoria contínua</h3>
                            <p>Acompanhamos as campanhas todos os dias úteis, ajustando lances, pausando anúncios com baixa performance, redistribuindo orçamento para o que está convertendo e testando variações de criativos, copies e públicos. Performance de mídia paga melhora com iteração constante, e otimização ativa é o que separa campanha amadora de gestão profissional.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFileAlt /></div>
                        <div className="mil-step-content">
                            <h3>Relatórios mensais detalhados com análise de performance e recomendações</h3>
                            <p>Você recebe relatórios completos todo mês com todas as métricas importantes: impressões, cliques, CTR, custo por clique, conversões, custo por conversão, ROAS e análise qualitativa dos resultados. Não jogamos números na sua cara sem contexto. Explicamos o que funcionou, o que não funcionou, por que e quais ajustes vamos fazer no próximo ciclo.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaHandshake /></div>
                        <div className="mil-step-content">
                            <h3>Reuniões de acompanhamento e suporte estratégico contínuo</h3>
                            <p>Mantemos contato regular para discutir resultados, alinhar expectativas, ajustar estratégias conforme mudanças no mercado e nas metas do seu negócio. Você não está sozinho. Tem uma equipe acessível para tirar dúvidas, discutir oportunidades e ajustar o rumo sempre que necessário.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 6: PROCESSO/METODOLOGIA */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="como-funciona-processo" style={{ whiteSpace: 'normal' }}>
                        Como funciona o processo de <br className="mil-mobile-br" />
                        Gestão de Tráfego BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Metodologia estruturada é o que diferencia gestão profissional de improvisação. Seguimos um processo testado e validado em dezenas de clientes de diferentes segmentos, garantindo setup técnico impecável, estratégia sólida e otimização constante para resultados crescentes ao longo do tempo.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Diagnóstico completo e entendimento profundo do negócio</h3>
                            <p>Analisamos seu mercado, concorrência, público-alvo, histórico de campanhas anteriores (se houver), margem de lucro e objetivos de crescimento. Entendemos o ciclo de vendas, ticket médio, lifetime value do cliente e capacidade de atendimento para dimensionar as campanhas de acordo com a realidade operacional do seu negócio.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Planejamento estratégico e definição de metas mensuráveis</h3>
                            <p>Definimos canais prioritários, orçamentos por plataforma, públicos estratégicos, formatos de anúncio e metas claras de conversão. Apresentamos o plano completo com previsão de resultados realista para aprovação antes de iniciar qualquer veiculação. Você sabe exatamente o que vai ser feito e o que esperar.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Configuração de rastreamento e instalação de pixels</h3>
                            <p>Instalamos e configuramos todos os pixels, eventos de conversão, Google Tag Manager e integrações necessárias para mensuração perfeita. Testamos tudo antes de ativar campanhas para garantir que cada conversão será rastreada corretamente e as plataformas receberão os sinais necessários para otimização automática.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Criação, revisão e ativação das campanhas</h3>
                            <p>Com toda a base técnica pronta, criamos os anúncios, configuramos segmentações e ativamos as campanhas. Os primeiros 7 a 14 dias são período de aprendizado intensivo das plataformas, com monitoramento constante e ajustes rápidos para corrigir qualquer desvio de performance.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Otimização contínua e escala do que funciona</h3>
                            <p>Com volume suficiente de dados (geralmente após 30 dias), otimizamos campanhas para reduzir custos e aumentar conversões. Pausamos o que não performa, escalamos orçamento no que está trazendo retorno positivo e testamos novas hipóteses constantemente. O objetivo é melhorar resultados mês após mês.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Relatórios, análise e reuniões de alinhamento estratégico</h3>
                            <p>Entregamos relatórios mensais detalhados e mantemos reuniões regulares para discutir resultados, apresentar insights e planejar os próximos passos. Transparência total sobre o que está sendo feito, quanto está sendo investido e qual retorno está sendo gerado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 7: PARA QUEM É */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="para-quem" style={{ whiteSpace: 'normal' }}>
                        Para quem é a Gestão de <br className="mil-mobile-br" />
                        Tráfego Pago BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Gestão de tráfego pago profissional funciona para qualquer negócio que vende produtos ou serviços e quer crescimento acelerado e previsível. Mas funciona especialmente bem para empresas que já têm operação estruturada, entendem o valor do cliente e estão prontas para escalar com investimento estratégico em aquisição.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Empresas de serviços que precisam de fluxo constante de leads qualificados</h3>
                            <p>Escritórios de advocacia, consultorias, clínicas de saúde, empresas de tecnologia e prestadores de serviço B2B que precisam alimentar o time comercial com oportunidades reais todos os meses. Se você vende serviço de ticket médio ou alto e precisa previsibilidade no pipeline, tráfego pago bem feito é a solução.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>E-commerces que querem escalar vendas com rentabilidade</h3>
                            <p>Lojas virtuais que já vendem organicamente ou por outros canais e querem acelerar crescimento com campanhas otimizadas para conversão. Trabalhamos catálogo de produtos, remarketing de carrinho abandonado, promoções sazonais e construção de audiências para compra recorrente.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserTie /></div>
                        <div className="mil-step-content">
                            <h3>Profissionais liberais e especialistas que buscam autoridade e clientes</h3>
                            <p>Médicos, advogados, arquitetos, psicólogos, contadores e outros profissionais que querem atrair clientes qualificados através de posicionamento estratégico nas plataformas digitais. Campanhas que constroem autoridade e geram agendamentos de consultas e orçamentos qualificados.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMedal /></div>
                        <div className="mil-step-content">
                            <h3>Empresas que já investem em mídia mas querem resultados melhores</h3>
                            <p>Se você já faz campanhas por conta própria ou com outra agência mas sente que o resultado não corresponde ao investimento, uma gestão profissional pode identificar gargalos, corrigir erros técnicos e escalar o que já está funcionando. Muitas vezes pequenos ajustes geram impacto gigante no ROI.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 8: DIFERENCIAIS BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="diferenciais" style={{ whiteSpace: 'normal' }}>
                        O diferencial BeChange: <br className="mil-mobile-br" />
                        Tráfego Pago integrado com Conversão
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria das agências de tráfego só faz uma coisa: cria anúncio e manda tráfego. O problema é que tráfego sem conversão é dinheiro jogado fora. Na BeChange, você não contrata apenas gestão de campanhas. Você contrata uma visão integrada que une mídia paga, otimização de conversão e mensuração estratégica para maximizar cada centavo investido.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Tráfego qualificado em site otimizado = conversão multiplicada</h3>
                            <p>Não adianta ter a melhor campanha do Google Ads se seu site é lento, confuso e não tem call-to-action claro. Tráfego em site ruim é dinheiro queimado. Aqui, além de gerenciar suas campanhas, analisamos e otimizamos a experiência de conversão no destino dos cliques. Landing pages bem estruturadas, formulários otimizados e experiência mobile impecável para transformar mais visitantes em leads e clientes.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartBar /></div>
                        <div className="mil-step-content">
                            <h3>Instalação profissional de rastreamento e mensuração blindada</h3>
                            <p>Pixel do Facebook configurado corretamente com API de Conversões, eventos customizados do Google Ads, Google Tag Manager estruturado e Google Analytics 4 implementado. Rastreamento técnico impecável é a base de tudo. Sem isso, você não consegue otimizar campanhas, não sabe o que funciona e toma decisões erradas que custam caro.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLink /></div>
                        <div className="mil-step-content">
                            <h3>Visão integrada de Marketing Digital e Posicionamento de Marca</h3>
                            <p>Na BeChange, tráfego pago não é uma ilha isolada. Integramos as campanhas com a estratégia de posicionamento da marca, identidade visual, tom de comunicação e objetivos de negócio. Isso garante consistência em todos os pontos de contato com o cliente, reconhecimento de marca e performance superior porque a mensagem está alinhada do anúncio até o pós-venda.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 9: FAQ */}
            <div style={{ paddingTop: '0', paddingBottom: '30px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px', marginTop: '0' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="faq" style={{ whiteSpace: 'normal' }}>
                        Perguntas frequentes sobre <br className="mil-desktop-br" />
                        Gestão de Tráfego Pago
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

            {/* CTA FINAL */}
            <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 style={{ whiteSpace: 'normal' }}>
                        Pronto para transformar investimento <br className="mil-desktop-br" />
                        em mídia em vendas reais?
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30">
                    Se você quer campanhas de tráfego pago que realmente convertem, com estratégia clara focada no seu objetivo de negócio, mensuração transparente de cada real investido e otimização constante para maximizar retorno, o próximo passo é conversar com a BeChange. Vamos analisar seu negócio, entender suas metas e apresentar uma estratégia personalizada de gestão de tráfego pago para escalar seus resultados de forma previsível e sustentável.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20receber%20uma%20proposta%20de%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                        <span>Solicitar proposta</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutTrafegoPago;
