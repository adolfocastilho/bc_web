import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importações dos ícones utilizados
import {
    FaQuoteLeft,
    FaChevronDown,
    FaVideo,
    FaFilm,
    FaMobileAlt,
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaLinkedin,
    FaBullseye,
    FaBolt,
    FaPalette,
    FaMagic,
    FaChartLine,
    FaRocket,
    FaClock,
    FaDollarSign,
    FaUsers,
    FaBuilding,
    FaShoppingCart,
    FaUserTie,
    FaClipboardCheck,
    FaFileAlt,
    FaHandshake,
    FaCogs,
    FaSync,
    FaPlay,
    FaDesktop,
    FaMicrophone,
    FaBox,
    FaEdit,
    FaLayerGroup,
    FaImage,
    FaCube
} from "react-icons/fa";

import ExportedImage from "@components/common/ExportedImage";
import SkeletonLoader from "@components/common/SkeletonLoader";

// Dynamic import para RecognitionSection
const RecognitionSection = dynamic(
    () => import("@components/sections/Recognition"),
    { ssr: false, loading: () => <SkeletonLoader height="400px" /> }
);


const AboutEdicaoDeVideo = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    const faqItems = [
        {
            icon: <FaVideo />,
            question: 'Vocês editam vídeos que já gravei ou fazem gravação também?',
            answer: 'Focamos em edição e pós-produção de material que você já tem gravado. Não fazemos serviço de captação com equipamento e equipe de filmagem. Se precisar de gravação profissional, indicamos parceiros especializados. Nosso trabalho começa quando você já tem o material bruto.'
        },
        {
            icon: <FaClock />,
            question: 'Qual o tempo de entrega para editar um vídeo?',
            answer: 'Depende da complexidade e duração. Vídeo simples para redes sociais como Reel ou TikTok fica pronto em dois a três dias úteis. Motion design complexo ou vídeo longo leva cinco a sete dias úteis. Explicamos prazos específicos durante o briefing inicial. Pacotes mensais têm prioridade de entrega.'
        },
        {
            icon: <FaFileAlt />,
            question: 'Quais formatos de arquivo vocês trabalham?',
            answer: 'Aceitamos qualquer formato comum: MP4, MOV, MKV, AVI, ProRes, outros. Qualidade mínima recomendada é Full HD 1080p, mas trabalhamos com 4K quando disponível. Se gravou no celular em resolução alta, funciona perfeitamente.'
        },
        {
            icon: <FaClipboardCheck />,
            question: 'Vocês criam roteiro e storyboard ou só editam material pronto?',
            answer: 'Focamos em edição e pós-produção do material já gravado. Se precisar de consultoria de roteiro antes de gravar, podemos ajudar com orientações estratégicas. Se precisar de produção completa com roteiro profissional, direção e captação, trabalhamos com parceiros especializados nisso.'
        },
        {
            icon: <FaDesktop />,
            question: 'É possível editar vídeos muito longos como webinars e documentários?',
            answer: 'Sim, fazemos edição de conteúdo long-form de uma, duas ou mais horas de duração. Também criamos recortes estratégicos e versões curtas reutilizáveis para distribuição nas redes sociais. Maximize retorno do conteúdo longo transformando em vários formatos menores.'
        },
        {
            icon: <FaMobileAlt />,
            question: 'Posso usar os vídeos editados em todas as plataformas?',
            answer: 'Sim, você é proprietário do conteúdo final. Vídeo editado fica completamente em sua posse para usar onde, quando e quantas vezes quiser. Entregamos em múltiplos formatos otimizados para facilitar publicação em cada canal específico.'
        },
        {
            icon: <FaEdit />,
            question: 'Qual diferença entre editar sozinho no CapCut e edição profissional?',
            answer: 'Edição profissional significa correção de cor cinematográfica, mixagem de áudio para som limpo sem ruídos, ritmo estratégico pensado para retenção, efeitos integrados naturalmente. CapCut e apps similares são rápidos e acessíveis mas entregam resultado amador que não sustenta credibilidade de marca séria.'
        },
        {
            icon: <FaMagic />,
            question: 'Vocês trabalham com motion design e animação personalizada?',
            answer: 'Sim, motion design é integrado com serviço de edição. Animação customizada específica depende da complexidade técnica, mas atendemos a maioria das necessidades. Consultamos viabilidade e orçamento durante briefing inicial do projeto.'
        },
        {
            icon: <FaBox />,
            question: 'Como recebo o vídeo final? Qual resolução?',
            answer: 'Entregamos em 4K ou Full HD conforme qualidade do material original e sua preferência. Enviamos em múltiplos formatos já otimizados por plataforma: versão quadrada para Instagram Feed, vertical para Reels e TikTok, horizontal para YouTube. Tudo pronto para publicar.'
        },
        {
            icon: <FaSync />,
            question: 'Posso pedir mudanças depois de receber o vídeo finalizado?',
            answer: 'Pequenos ajustes durante processo de revisão são normais e estão inclusos. Após aprovação final e entrega, mudanças significativas que exigem retrabalho extenso têm custo adicional. Por isso recomendamos revisar cuidadosamente antes de aprovar versão final.'
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
                        Por que sua empresa precisa de Edição de Vídeo Profissional
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Vídeo é o formato que mais cresce no marketing digital brasileiro, mas a maioria das empresas publica conteúdo amador que mata a credibilidade da marca antes mesmo de começar. A diferença entre um vídeo que viraliza e um que ninguém assiste está na edição profissional. Não é apenas cortar e colar gravações. É pensar estrategicamente cada frame para prender atenção, comunicar com clareza e gerar a ação que você quer do público.
                    </p>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        O tempo que você gasta editando sozinho é tempo que não está vendendo, criando conteúdo novo ou cuidando do seu negócio. E pior, o resultado raramente compensa o esforço porque faltam técnica, ferramentas profissionais e conhecimento de como cada plataforma funciona. Edição profissional não é luxo, é necessidade para quem quer ser levado a sério no ambiente digital e competir de igual para igual com marcas maiores.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeo." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                            <span>Solicitar orçamento</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 2: DIAGNÓSTICO (DORES) */}
            <div className="mil-p-90-30" style={{ paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="erros-com-video" style={{ whiteSpace: 'normal' }}>
                        Os erros mais caros que <br className="mil-mobile-br" />
                        você comete com vídeo
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria das empresas e criadores de conteúdo já entendeu que precisa produzir vídeos regularmente. O problema é que gravar é a parte fácil. Transformar aquela gravação bruta em conteúdo profissional que realmente funciona é onde a maioria falha. E cada vídeo amador publicado corrói um pouco da sua autoridade e credibilidade conquistada com tanto esforço em outras áreas do negócio.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaFilm /></div>
                        <div className="mil-step-content">
                            <h3>Gravar é fácil, editar bem é outro nível completamente diferente</h3>
                            <p>Muita gente grava conteúdo em alta resolução com smartphone ou câmera profissional, mas a edição é totalmente amadora. Transições básicas do aplicativo, som inconsistente cheio de ruído, cores desaturadas sem correção, ritmo arrastado que ninguém aguenta assistir até o final. O resultado é um vídeo que parece caseiro, mata toda a credibilidade da sua marca e gera pouquíssimo engajamento mesmo quando você investe em impulsionamento.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaDollarSign /></div>
                        <div className="mil-step-content">
                            <h3>Motion design do zero é caro demais e demora uma eternidade</h3>
                            <p>Você precisa de um vídeo explicativo mostrando como seu produto funciona, motion design apresentando seu serviço de forma visual, ou animação para redes sociais que chame atenção. Mas quando pede orçamento, o valor sobe para cinco a quinze mil reais e você fica aguardando três ou quatro semanas para receber. Resultado previsível: você publica do jeito que consegue fazer sozinho para não atrasar o calendário editorial e perde a oportunidade.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Falta de estilo visual consistente destrói reconhecimento de marca</h3>
                            <p>Cada vídeo que você publica fica completamente diferente do anterior. Cores diferentes, tipografia que muda toda hora, efeitos aleatórios, sem nenhuma aplicação dos brand guidelines que você pagou para criar. Seu público vê seu vídeo no feed do Instagram e não reconhece imediatamente que é seu porque simplesmente não existe identidade visual construída. Você está jogando dinheiro fora em alcance sem construir marca.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBolt /></div>
                        <div className="mil-step-content">
                            <h3>Velocidade versus qualidade parece uma escolha impossível de resolver</h3>
                            <p>Edição rápida significa qualidade comprometida e resultado amador. Edição com qualidade profissional significa esperar semanas e perder o timing do conteúdo. Você precisa escolher qual problema quer ter porque parece impossível conseguir os dois ao mesmo tempo. Mas o mercado não perdoa: conteúdo precisa ser profissional E rápido, senão você perde relevância e oportunidade de vendas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Não sabe se o vídeo vai funcionar porque não mensura nada</h3>
                            <p>Você edita, publica nas redes sociais e torce para funcionar. Não tem dados concretos de como o vídeo performa, qual corte gera mais retenção, qual formato específico traz mais visualizações completas e compartilhamentos. Então publica o próximo vídeo exatamente da mesma forma, esperando que desta vez magicamente funcione melhor. Está desperdiçando tempo e oportunidade por falta de inteligência sobre o que realmente funciona.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 3: SOLUÇÃO BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="edicao-bechange" style={{ whiteSpace: 'normal' }}>
                        Edição de Vídeo e Motion BeChange: <br className="mil-mobile-br" />
                        profissionalismo, velocidade e estratégia
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Na BeChange, edição de vídeo não é apenas cortar e ajustar cor. É pensar estrategicamente cada segundo do vídeo para atingir o objetivo específico do seu conteúdo. Seja viralizar nas redes sociais, vender um produto, explicar um serviço complexo ou construir autoridade, cada escolha de edição é guiada por dados e melhores práticas validadas em centenas de projetos entregues ao longo de vinte e dois anos.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Cada frame é pensado estrategicamente para converter</h3>
                            <p>Não editamos apenas para ficar bonito visualmente. Editamos para o seu objetivo específico de negócio. Vídeo para viralizar no TikTok? Estrutura de gancho nos primeiros três segundos, cortes acelerados, efeitos dinâmicos. Vídeo para vender produto? Ritmo estratégico, demonstração clara, calls-to-action destacados nos momentos certos. Vídeo educativo? Hierarquia visual para o público entender rapidamente conceitos complexos. Edição estratégica que funciona na prática.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBolt /></div>
                        <div className="mil-step-content">
                            <h3>Velocidade profissional sem comprometer qualidade do resultado</h3>
                            <p>Processo otimizado e equipe dedicada que edita cinco a dez vídeos por semana mantendo qualidade de cinema. Você grava na segunda-feira, recebe editado profissionalmente até quinta-feira. Velocidade que você simplesmente não consegue sozinho ou com freelancer individual sobrecarregado. Mantemos calendário editorial funcionando sem atrasos e sem perder padrão de qualidade que sua marca merece.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Identidade visual consistente com brand guidelines aplicados</h3>
                            <p>Instalamos sua identidade visual completa em todos os vídeos produzidos. Cores institucionais, tipografia da marca, efeitos assinatura, temas musicais recorrentes. Seu público vê o vídeo no feed e imediatamente reconhece que é você, mesmo antes de ler o nome. Reconhecimento de marca construído frame a frame, vídeo após vídeo, criando memória visual poderosa.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMagic /></div>
                        <div className="mil-step-content">
                            <h3>Motion design integrado com edição em fluxo único</h3>
                            <p>Não é edição básica separada de motion design. É edição com motion combinados para máximo impacto visual e comunicacional. Intros animadas que prendem atenção, lower thirds dinâmicos apresentando informações, transições com identidade própria da marca, animações explicativas integradas naturalmente no fluxo do vídeo. Tudo pensado como peça única.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMobileAlt /></div>
                        <div className="mil-step-content">
                            <h3>Otimização específica por plataforma de publicação</h3>
                            <p>Cada plataforma tem formato, proporção e ritmo completamente diferentes. Otimizamos cor, duração, cortes, efeitos para cada canal específico. Reels do Instagram tem um estilo e velocidade. Shorts do YouTube tem outro. TikTok tem suas particularidades. LinkedIn pede abordagem diferente. Você não precisa editar três ou quatro versões, entregamos tudo otimizado.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Dados e mensuração de performance para melhoria contínua</h3>
                            <p>Rastreamos performance de cada vídeo publicado, entregamos relatórios de visualizações, taxa de retenção, engajamento e compartilhamentos. Usamos esses dados concretos para refinar edições futuras. Cada vídeo novo é mais inteligente que o anterior porque aprendemos com dados reais do seu público específico, não com achismos.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depoimentos Section */}
            <RecognitionSection />

            {/* SEÇÃO 4: ESPECIALIDADES */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="especialidades" style={{ whiteSpace: 'normal' }}>
                        Especialidades em Edição de Vídeo <br className="mil-mobile-br" />
                        e Motion Design
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Dominamos tecnicamente todos os tipos de produção em vídeo e escolhemos o formato certo para o objetivo do seu conteúdo. Não acreditamos em receita única que serve para tudo. Cada tipo de vídeo tem suas particularidades técnicas e estratégicas, e executamos com excelência em todas as categorias.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaInstagram /></div>
                        <div className="mil-step-content">
                            <h3>Edição para Redes Sociais (Instagram Reels, TikTok, Shorts)</h3>
                            <p>Formato vertical otimizado para mobile, ritmo acelerado com cortes dinâmicos, ganchos estratégicos nos primeiros três segundos para segurar atenção, efeitos visuais que funcionam no contexto de feed. Foco total em viralização e engajamento. Legendas destacadas porque a maioria assiste sem som. Adaptação para as especificidades de cada plataforma.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaYoutube /></div>
                        <div className="mil-step-content">
                            <h3>Edição para YouTube (Conteúdo Longo e Shorts)</h3>
                            <p>Estrutura de conteúdo longo de dez a sessenta minutos com cortes estratégicos, inserção de B-roll ilustrativo, transições suaves, legendas otimizadas para acessibilidade. Ou produção de Shorts de quinze a sessenta segundos para feed. Miniatura customizada, introdução impactante, organização de capítulos, otimização para retenção de audiência.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMagic /></div>
                        <div className="mil-step-content">
                            <h3>Motion Design e Vídeos Explicativos Animados</h3>
                            <p>Vídeos explicativos totalmente animados mostrando como funciona seu produto ou serviço de forma visual e didática. Whiteboard animation, motion graphics em 2D ou 3D, infografias animadas, animação de personagens. Comunicação clara de conceitos complexos através de visualização estratégica.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUsers /></div>
                        <div className="mil-step-content">
                            <h3>Edição de Depoimentos e Cases de Sucesso</h3>
                            <p>Seu cliente gravou depoimento bruto no celular. Transformamos em vídeo profissional com correção de cor e som, transições suaves, citações importantes destacadas na tela, trilha sonora adequada, lower thirds apresentando o depoente. Material de vendas poderoso para site, redes sociais e apresentações comerciais.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPlay /></div>
                        <div className="mil-step-content">
                            <h3>Vídeos Publicitários para Campanhas Pagas</h3>
                            <p>Vídeos curtos de quinze, trinta ou sessenta segundos otimizados especificamente para campanhas pagas no Google Ads, Meta Ads e TikTok Ads. Com calls-to-action claramente destacados, copy persuasivo na tela, estrutura de conversão validada. Edição pensada para performance em mídia paga, não apenas para parecer bonito.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Vídeo Institucional e Corporativo</h3>
                            <p>Vídeos profissionais para site institucional, LinkedIn, apresentações comerciais e materiais de empresa. Seja edição de gravação profissional ou produção com motion design. Comunicação que transmite profissionalismo, credibilidade e solidez para clientes, parceiros e investidores.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMicrophone /></div>
                        <div className="mil-step-content">
                            <h3>Edição de Lives, Webinars e Eventos Online</h3>
                            <p>Transforma sua live bruta de duas horas em conteúdo reutilizável e distribuível. Recortes estratégicos para Reels, compilações dos melhores momentos, highlights com legendas, remoção de partes desnecessárias. Maximize o retorno do conteúdo produzido ao vivo transformando em diversos formatos para publicação posterior.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCube /></div>
                        <div className="mil-step-content">
                            <h3>Animação 2D/3D para Branding e Identidade</h3>
                            <p>Intros animadas personalizadas, logos animados com movimento fluido, transições com identidade visual própria, efeitos motion exclusivos para sua marca. Elementos visuais que ninguém mais tem, construindo diferenciação e memorabilidade no mercado saturado de conteúdo genérico.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 5: DIFERENCIAIS BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="diferenciais" style={{ whiteSpace: 'normal' }}>
                        O diferencial BeChange: <br className="mil-mobile-br" />
                        Edição integrada com Identidade Visual
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria dos editores de vídeo trabalha isoladamente, recebem material bruto e devolvem editado sem conexão com a estratégia maior de marca. Na BeChange, edição de vídeo é parte integrada da identidade visual e posicionamento estratégico da sua empresa. Tudo conectado para máximo impacto.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPalette /></div>
                        <div className="mil-step-content">
                            <h3>Edição que respeita religiosamente sua identidade visual</h3>
                            <p>Paleta de cores definida no projeto de Design? Tipografia corporativa específica? Grafismos proprietários da marca? Integramos absolutamente tudo nos vídeos editados. Cada vídeo reforça identidade visual em vez de trabalhar contra ela. Edição coerente com todos os outros pontos de contato da marca.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRocket /></div>
                        <div className="mil-step-content">
                            <h3>Vídeo, Design e Tráfego trabalhando juntos</h3>
                            <p>Você cria vídeo profissional conosco, amplifica distribuição com Gestão de Tráfego Pago estratégica, e mensura resultados concretos. Ciclo completo de produção de conteúdo, distribuição inteligente e otimização baseada em performance. Máximo retorno sobre investimento em produção.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBolt /></div>
                        <div className="mil-step-content">
                            <h3>Velocidade de agência estruturada, não freelancer isolado</h3>
                            <p>Você não contrata um editor freelancer individual que desaparece quando fica sobrecarregado ou arruma cliente melhor. Contrata uma equipe dentro de uma agência completa de marketing digital. Entrega rápida garantida, suporte contínuo acessível, capacidade de escalar produção facilmente conforme necessidade.</p>
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
                        Edição de Vídeo BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Metodologia estruturada garante qualidade consistente, prazos cumpridos e resultado alinhado com expectativa. Seguimos processo validado em centenas de projetos entregues para clientes de diferentes segmentos e necessidades.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Briefing estratégico e definição de estilo visual</h3>
                            <p>Entendemos profundamente seu objetivo com o vídeo, quem é seu público-alvo, qual ação você quer gerar. Definimos estilo de edição, paleta de cores, efeitos característicos, música de fundo. Alinhamento completo antes de começar qualquer trabalho técnico.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Entrega do material bruto para edição</h3>
                            <p>Você filma com a qualidade que tiver disponível. Pode ser smartphone atual, câmera DSLR ou equipamento profissional completo. Enviamos para nossa equipe de edição através de plataforma segura. Não precisa se preocupar com configurações técnicas complexas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Edição e composição completa do vídeo</h3>
                            <p>Editamos com qualidade de cinema: correção de cor profissional, mixagem de áudio para som limpo, cortes estratégicos, legendas otimizadas para cada plataforma. Aplicação de todos os elementos visuais definidos no briefing inicial.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Motion design e customizações quando necessário</h3>
                            <p>Adicionamos intros animadas personalizadas, lower thirds dinâmicos, transições com identidade própria, infografias explicativas, elementos gráficos animados. Tudo integrado naturalmente com a edição para resultado único.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Revisão e ajustes até aprovação final</h3>
                            <p>Enviamos primeira versão para sua aprovação. Se houver necessidade de ajustes de ritmo, cor, texto ou qualquer elemento, fazemos revisões até ficar exatamente como você precisa. Não entregamos até você aprovar.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">6</div>
                        <div className="mil-step-content">
                            <h3>Entrega final otimizada para publicação</h3>
                            <p>Entregamos em múltiplos formatos já otimizados: versão para Instagram, TikTok, YouTube, LinkedIn, site. Tudo pronto para você simplesmente publicar sem precisar converter ou ajustar. Maximiza seu tempo focando em estratégia.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 7: PARA QUEM É */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="para-quem" style={{ whiteSpace: 'normal' }}>
                        Para quem é a Edição de Vídeo <br className="mil-mobile-br" />
                        e Motion BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Edição de vídeo profissional funciona para qualquer pessoa ou empresa que produz conteúdo regularmente e quer qualidade acima da média sem gastar tempo operacional editando. Mas funciona especialmente bem para quem já entende o poder do vídeo e quer escalar produção.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaVideo /></div>
                        <div className="mil-step-content">
                            <h3>Criadores de conteúdo e influenciadores digitais</h3>
                            <p>Que produzem cinco ou mais vídeos toda semana e precisam de edição rápida e profissional. Você foca em criar conteúdo e gravar, nós cuidamos de transformar em material publicável com qualidade. Escale produção sem contratar equipe interna.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBuilding /></div>
                        <div className="mil-step-content">
                            <h3>Empresas de serviço (consultórios, clínicas, escritórios)</h3>
                            <p>Que precisam de vídeos de depoimento de clientes, antes e depois de tratamentos, explicação de serviços oferecidos, apresentação da equipe. Vídeos que constroem confiança e autoridade sem parecer propaganda amadora.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>E-commerces e startups de tecnologia</h3>
                            <p>Que usam vídeo para campanhas de lançamento de produto, anúncios pagos, demonstrações de uso, comparações. Vídeo é o formato que mais converte em vendas online quando bem produzido.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLayerGroup /></div>
                        <div className="mil-step-content">
                            <h3>Agências digitais e produtoras de conteúdo</h3>
                            <p>Que precisam de parceiro confiável de edição para escalar capacidade de produção sem aumentar custo fixo com equipe interna. White label disponível para agências que revendem.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserTie /></div>
                        <div className="mil-step-content">
                            <h3>Profissionais liberais e especialistas</h3>
                            <p>Que querem construir autoridade e reconhecimento através de conteúdo em vídeo no YouTube, TikTok, LinkedIn. Vídeos educativos, explicação de conceitos, posicionamento como referência no mercado.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 8: INVESTIMENTO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="investimento" style={{ whiteSpace: 'normal' }}>
                        Quanto custa Edição de Vídeo Profissional
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Investimento em edição de vídeo varia conforme complexidade do projeto, duração do vídeo, quantidade de motion design necessário e volume mensal de produção. Trabalhamos com dois modelos principais para atender diferentes necessidades.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBox /></div>
                        <div className="mil-step-content">
                            <h3>Preço por projeto individual versus pacote mensal recorrente</h3>
                            <p>Oferecemos edição de vídeo por projeto único para necessidades pontuais ou pacotes mensais recorrentes para quem produz conteúdo regularmente. Pacote mensal tem custo unitário menor e garante entrega prioritária. Você escolhe o modelo que faz mais sentido para seu volume de produção.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaDollarSign /></div>
                        <div className="mil-step-content">
                            <h3>Valor real está no tempo economizado e qualidade gerada</h3>
                            <p>Ao terceirizar edição profissional, você economiza vinte a quarenta horas todo mês que pode usar para criar mais conteúdo, vender seus produtos ou cuidar do seu negócio. Valor real de edição profissional vai muito além do preço cobrado. É investimento em tempo, qualidade e credibilidade da sua marca.</p>
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
                        Edição de Vídeo
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
                        Pronto para vídeos que realmente <br className="mil-desktop-br" />
                        funcionam e geram resultado?
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30">
                    Se você produz conteúdo regularmente e quer qualidade profissional com velocidade de entrega, vamos conversar. Edição que converte visualizações em engajamento real, autoridade de marca e vendas concretas. Transforme suas gravações em conteúdo que seu público realmente quer assistir e compartilhar.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20de%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeo." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                        <span>Solicitar proposta</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutEdicaoDeVideo;
