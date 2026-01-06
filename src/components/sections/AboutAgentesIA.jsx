import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importações dos ícones utilizados
import {
    FaQuoteLeft,
    FaChevronDown,
    FaRobot,
    FaWhatsapp,
    FaBrain,
    FaLink,
    FaDollarSign,
    FaHandshake,
    FaMobileAlt,
    FaClock,
    FaUserTie,
    FaBuilding,
    FaShoppingCart,
    FaHome,
    FaDumbbell,
    FaHospital,
    FaBriefcase,
    FaBullseye,
    FaCogs,
    FaFlask,
    FaRocket,
    FaChartLine,
    FaShieldAlt,
    FaTools,
    FaBookOpen,
    FaPlug,
    FaClipboardCheck,
    FaSync,
    FaComments,
    FaLock,
    FaUsers,
    FaMoneyBillWave,
    FaPhone,
    FaCalendarAlt
} from "react-icons/fa";

import ExportedImage from "@components/common/ExportedImage";
import SkeletonLoader from "@components/common/SkeletonLoader";

// Dynamic import para RecognitionSection
const RecognitionSection = dynamic(
    () => import("@components/sections/Recognition"),
    { ssr: false, loading: () => <SkeletonLoader height="400px" /> }
);


const AboutAgentesIA = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
    };

    const faqItems = [
        {
            icon: <FaRobot />,
            question: 'O Agente de IA vai substituir minha equipe de atendimento completamente?',
            answer: 'Não substitui, potencializa seu time existente. Agente cuida de trabalho repetitivo e braçal: perguntas frequentes, agendamentos, confirmações, qualificação básica. Equipe humana foca em fechar negócios complexos, resolver casos específicos e cuidar de clientes VIP que precisam atenção personalizada. Automação libera talento humano para atividades de alto valor.'
        },
        {
            icon: <FaSync />,
            question: 'E se o cliente quiser falar com atendente humano real?',
            answer: 'Transbordo para humano é imediato e suave. IA percebe sozinha quando conversa precisa de toque humano ou cliente pode pedir explicitamente. Transferência acontece com todo histórico preservado: atendente vê tudo que foi conversado, não precisa pedir para repetir. Experiência fluida que mantém profissionalismo e respeita preferência do cliente.'
        },
        {
            icon: <FaShieldAlt />,
            question: 'O WhatsApp não pode bloquear meu número usando automação?',
            answer: 'Trabalhamos exclusivamente com WhatsApp Business API oficial homologada pela Meta. Seguimos rigorosamente todas as políticas e boas práticas da plataforma. Seu número opera com segurança total, tem suporte direto da Meta e zero risco de bloqueio. Não usamos soluções não oficiais que colocam sua operação em risco.'
        },
        {
            icon: <FaChartLine />,
            question: 'Vale a pena mesmo para quem recebe poucos contatos?',
            answer: 'Se você perde vendas porque demora para responder, vale muito. Velocidade de resposta é fator crítico de conversão: cliente que recebe resposta em dois minutos converte exponencialmente mais que cliente que espera duas horas. Agente de IA garante tempo de resposta zero independente do volume. Conversão aumenta mesmo com poucos contatos diários.'
        },
        {
            icon: <FaPlug />,
            question: 'Quais sistemas vocês conseguem integrar com o agente?',
            answer: 'Integramos com absolutamente tudo que tem API disponível: WhatsApp Business API, CRMs populares, sistemas de agendamento, plataformas de e-commerce, ERPs, Google Calendar, planilhas, gateways de pagamento, ferramentas de email marketing. Se seu sistema tem API, conseguimos conectar. Se não tem, avaliamos alternativas técnicas viáveis.'
        },
        {
            icon: <FaClock />,
            question: 'Quanto tempo leva para implementar e colocar no ar?',
            answer: 'Implementação completa leva de duas a quatro semanas dependendo da complexidade. Inclui análise profunda, treinamento da IA, integrações técnicas, testes extensivos e go-live monitorado. Não aceleramos artificialmente porque qualidade da implementação define sucesso da operação. Melhor investir tempo correto no início que apagar incêndio depois.'
        },
        {
            icon: <FaBrain />,
            question: 'O agente aprende sozinho com as conversas ou preciso treinar sempre?',
            answer: 'Agente aprende continuamente com interações reais através de nossa curadoria. Analisamos conversas, identificamos gaps de conhecimento, adicionamos respostas para perguntas novas. Não é aprendizado completamente autônomo porque isso seria arriscado, mas evolução é constante e gerenciada. Cada mês o agente fica mais preparado.'
        },
        {
            icon: <FaComments />,
            question: 'Consigo personalizar o tom de voz e personalidade do agente?',
            answer: 'Totalmente personalizável. Durante imersão inicial, mapeamos tom de comunicação da sua marca: formal ou casual, uso de emojis, gírias permitidas, estilo de linguagem. Treinamos o agente para conversar exatamente como você quer que sua marca seja percebida. Personalidade conversacional alinhada com identidade de marca.'
        },
        {
            icon: <FaMobileAlt />,
            question: 'Funciona em outros canais além do WhatsApp?',
            answer: 'Sim, o mesmo agente inteligente atende em múltiplos canais: WhatsApp, Instagram Direct, chat do site, Facebook Messenger. Implementação omnichannel com memória unificada permite cliente começar conversa em um canal e continuar em outro sem perder contexto. Experiência consistente em todos os pontos de contato.'
        },
        {
            icon: <FaLock />,
            question: 'Os dados das conversas ficam seguros e privados?',
            answer: 'Absoluta segurança e privacidade. Todas as conversas são criptografadas, armazenadas em servidores seguros e acessíveis apenas por pessoas autorizadas da sua empresa. Cumprimos rigorosamente LGPD e boas práticas de segurança de dados. Seus dados e dos seus clientes estão protegidos com mesmo padrão de bancos e fintechs.'
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
                        A evolução do atendimento: do chatbot travado para o Agente de IA
                    </h2>
                    <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        O mercado digital brasileiro está cansado de chatbots burros que frustram clientes com menu de opções que ninguém aguenta. Você já viu: o cliente digita uma pergunta simples e o robô responde "não entendi, digite 1 para vendas, 2 para suporte". O resultado é previsível, cliente irritado abandona a conversa e compra do concorrente que respondeu em dois minutos. Esse modelo de atendimento automatizado está morto.
                    </p>
                    <p className="mil-up mil-mb-30 mil-section-description">
                        Agentes de IA representam uma mudança completa de paradigma. Não são menus disfarçados, são assistentes virtuais que entendem linguagem natural, mantêm contexto da conversa e respondem de forma fluida como um atendente humano treinado. A tecnologia que permite isso existe agora, está acessível e empresas que implementam convertem até sete vezes mais no WhatsApp que aquelas presas em atendimento manual ou chatbots tradicionais ultrapassados.
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-60">
                        <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20agente%20de%20IA." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                            <span>Agendar demonstração</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 2: DIAGNÓSTICO (DORES) */}
            <div className="mil-p-90-30" style={{ paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="por-que-perde-vendas" style={{ whiteSpace: 'normal' }}>
                        Por que seu atendimento atual <br className="mil-mobile-br" />
                        está perdendo vendas todo dia
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria das empresas brasileiras ainda depende de atendimento manual no WhatsApp ou usa chatbots básicos de menu que mais atrapalham que ajudam. Ambas as situações destroem conversão e deixam dinheiro na mesa. O cliente moderno espera resposta imediata, relevante e personalizada. Qualquer coisa abaixo disso significa venda perdida para concorrente mais rápido.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRobot /></div>
                        <div className="mil-step-content">
                            <h3>O trauma do robô burro que afasta clientes</h3>
                            <p>Você ou já implementou ou conhece alguém que implementou chatbot que só atrapalha. Cliente faz pergunta simples, robô não entende e fica pedindo para repetir ou oferece menu genérico que não resolve. A experiência é tão frustrante que o cliente prefere não entrar em contato de novo. Chatbots tradicionais de menu pré-programado matam mais vendas do que geram porque foram projetados para economizar atendente, não para vender.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaClock /></div>
                        <div className="mil-step-content">
                            <h3>Lead esfria em cinco minutos e compra do concorrente</h3>
                            <p>Cliente entra em contato às dez da noite ou final de semana quando está pesquisando opções. Ninguém responde porque sua equipe já foi embora. Ele espera até o dia seguinte, mas enquanto isso recebeu resposta imediata de três concorrentes e já tomou decisão. Quando você finalmente responde na segunda-feira de manhã, ele já comprou, já agendou ou simplesmente perdeu interesse. Demora mata conversão.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaSync /></div>
                        <div className="mil-step-content">
                            <h3>Passagem de robô para humano perde todo o contexto</h3>
                            <p>O chatbot básico até consegue responder perguntas simples, mas quando o cliente precisa de algo específico e pede atendente humano, a conversa recomeça do zero. O atendente não sabe o que foi falado, o cliente precisa repetir tudo e a experiência vira pesadelo. Não existe continuidade, histórico desaparece e profissionalismo vai junto. Atendimento híbrido mal feito é pior que não ter automação.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPlug /></div>
                        <div className="mil-step-content">
                            <h3>Promessa de integração que nunca funciona de verdade</h3>
                            <p>Você contratou ferramenta de chatbot que prometia integrar com sua agenda, seu sistema de gestão, seu estoque. Na prática não integra nada, o robô só consegue dar respostas genéricas porque não acessa dados reais da empresa. Cliente pergunta disponibilidade de horário, robô não sabe. Pergunta se tem produto em estoque, robô não sabe. Vira apenas FAQ automatizado sem inteligência real.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Sem dados sobre o que realmente acontece nas conversas</h3>
                            <p>Você implementou automação mas não tem ideia se está funcionando. Não sabe quantas conversas viraram venda, onde o cliente desiste, qual pergunta trava o fluxo, qual horário tem mais demanda. Opera no escuro tomando decisões baseadas em achismo porque a ferramenta não entrega inteligência de dados. Automação sem análise é desperdício de investimento.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 3: SOLUÇÃO BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="agentes-ia-bechange" style={{ whiteSpace: 'normal' }}>
                        Agentes de IA BeChange: <br className="mil-mobile-br" />
                        inteligência real que entende e vende
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Na BeChange, não implementamos chatbots de menu ultrapassados. Implementamos Agentes de IA com processamento de linguagem natural que mantêm conversas fluidas, entendem contexto, acessam dados reais da sua empresa e são treinados especificamente para o seu negócio. A diferença entre nosso agente e um chatbot comum é a mesma diferença entre ter um vendedor expert e ter uma secretária eletrônica gravada.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBrain /></div>
                        <div className="mil-step-content">
                            <h3>Inteligência conversacional que não parece robô nenhum</h3>
                            <p>Treinamos o agente de IA com a voz e personalidade da sua marca. Ele usa emojis quando apropriado, adapta tom conforme o cliente, entende gírias e contexto brasileiro. Responde de forma natural e fluida, não com frases engessadas e robóticas. O cliente conversa sem perceber que está falando com IA porque a experiência é indistinguível de atendente humano bem treinado. Tecnologia invisível, resultado visível.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaLink /></div>
                        <div className="mil-step-content">
                            <h3>Integração profunda que dá cérebro real para o agente</h3>
                            <p>Nosso agente não chuta respostas genéricas. Ele consulta sua agenda em tempo real, verifica estoque disponível, acessa tabela de preços atualizada, consulta CRM para histórico do cliente. Quando responde sobre disponibilidade de horário ou produto, está informando dados reais e precisos. Essa integração técnica profunda é o que transforma chatbot burro em assistente inteligente que realmente resolve.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaDollarSign /></div>
                        <div className="mil-step-content">
                            <h3>Foco absoluto em conversão, não apenas suporte</h3>
                            <p>O objetivo do agente não é só tirar dúvida ou dar suporte básico. É qualificar lead, agendar consulta, fechar venda ou encaminhar para vendedor com cliente aquecido. Todo fluxo conversacional é desenhado estrategicamente para levar o cliente até o sim. Usamos técnicas de copywriting persuasiva, gatilhos mentais e perguntas qualificadoras que aumentam drasticamente taxa de conversão.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaHandshake /></div>
                        <div className="mil-step-content">
                            <h3>Atendimento híbrido perfeito: IA trabalha, humano fecha</h3>
                            <p>A IA cuida do trabalho pesado e repetitivo: responde perguntas frequentes, qualifica interesse, agenda horários, envia informações. Quando identifica oportunidade quente ou cliente com dúvida complexa, transfere para atendente humano com todo histórico da conversa preservado. Seu time recebe apenas leads qualificados prontos para fechar, não perde tempo com perguntas básicas respondidas mil vezes.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMobileAlt /></div>
                        <div className="mil-step-content">
                            <h3>Omnichannel real: mesmo cérebro em todos os canais</h3>
                            <p>O mesmo agente inteligente atende no WhatsApp, Instagram Direct e chat do site com memória unificada. Cliente começa conversa no Instagram, continua no WhatsApp e o agente lembra perfeitamente do contexto. Não é integração superficial, é orquestração verdadeira de atendimento multicanal que oferece experiência consistente independente de onde o cliente te encontra.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depoimentos Section */}
            <RecognitionSection />

            {/* SEÇÃO 4: SOLUÇÕES POR SEGMENTO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="solucoes-segmento" style={{ whiteSpace: 'normal' }}>
                        Soluções de Agentes de IA <br className="mil-mobile-br" />
                        por tipo de negócio
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Cada segmento tem necessidades específicas de automação. Não acreditamos em solução genérica que serve para todos. Desenvolvemos agentes especializados com fluxos conversacionais desenhados para o comportamento e expectativas do seu cliente específico.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaHospital /></div>
                        <div className="mil-step-content">
                            <h3>Para clínicas e consultórios: agendamento automático inteligente</h3>
                            <p>Agente de IA que gerencia agenda completa: confirma consultas, oferece horários disponíveis em tempo real, faz encaixe quando tem cancelamento, envia lembretes automáticos, tira dúvidas sobre procedimentos e preparo de exames. Reduz no-show em até quarenta por cento porque o paciente recebe confirmação e lembrete no momento certo. Libera recepcionista para cuidar de quem está presente na clínica.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBriefcase /></div>
                        <div className="mil-step-content">
                            <h3>Para prestadores de serviço e B2B: qualificação profunda de leads</h3>
                            <p>A IA faz a triagem completa antes de envolver seu time comercial. Pergunta sobre orçamento disponível, prazo de decisão, necessidades específicas, autoridade de compra. Qualifica interesse real versus curiosidade. Entrega para o vendedor apenas oportunidades maduras com todas as informações necessárias para proposta customizada. Seu time comercial para de perder tempo com lead frio.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>Para e-commerce e varejo: recuperação e aumento de ticket</h3>
                            <p>Agente recupera carrinho abandonado com abordagem personalizada, avisa sobre ofertas de produtos que o cliente demonstrou interesse, informa status de pedido automaticamente, sugere produtos complementares baseado em histórico de compra. Aumenta lifetime value do cliente através de comunicação relevante e oportuna que acontece no momento certo da jornada.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaHome /></div>
                        <div className="mil-step-content">
                            <h3>Para imobiliárias: atendimento e qualificação 24 horas</h3>
                            <p>Cliente interessado em imóvel entra em contato fora do horário comercial. Agente responde imediatamente, qualifica perfil do cliente, orçamento, localização desejada, urgência. Agenda visita para horário disponível do corretor. Cliente recebe atenção imediata quando está quente, corretor recebe apenas visitas qualificadas. Taxa de conversão de visita em negócio multiplica.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaDumbbell /></div>
                        <div className="mil-step-content">
                            <h3>Para academias e estúdios: agendamento e retenção de alunos</h3>
                            <p>Agente agenda aulas experimentais, confirma presença em treinos, envia lembretes de renovação de plano, responde dúvidas sobre horários e modalidades disponíveis. Reduz evasão porque mantém comunicação constante e personalizada com cada aluno. Aumenta ocupação de horários através de lembretes estratégicos e ofertas de reposição.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 5: DIFERENCIAIS BECHANGE */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="diferenciais" style={{ whiteSpace: 'normal' }}>
                        Por que escolher a BeChange <br className="mil-mobile-br" />
                        para implementar seu Agente de IA
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    A maioria das empresas de automação entrega ferramenta e deixa você se virar sozinho. Resultado previsível: frustração, configuração errada, performance baixa e desistência. Na BeChange você não compra software, você contrata operação completa funcionando com acompanhamento contínuo.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaBullseye /></div>
                        <div className="mil-step-content">
                            <h3>Não vendemos ferramenta, entregamos operação funcionando</h3>
                            <p>Diferença fundamental entre nós e plataformas SaaS: eles vendem acesso, você configura sozinho e torce para funcionar. Nós fazemos toda implementação técnica, treinamento da IA, integração com sistemas, testes extensivos e entregamos agente pronto e otimizado. Você liga o interruptor e está vendendo. Zero curva de aprendizado ou tentativa e erro custoso.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaRobot /></div>
                        <div className="mil-step-content">
                            <h3>Curadoria de IA: escolhemos a melhor tecnologia para seu caso</h3>
                            <p>Não somos casados com uma única tecnologia. Usamos GPT-4 da OpenAI, Claude da Anthropic, Llama da Meta, dependendo do caso de uso específico. Cada modelo tem pontos fortes diferentes. Analisamos sua necessidade e escolhemos a stack tecnológica ideal para performance máxima. Você se beneficia da melhor IA disponível sem precisar entender diferenças técnicas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCogs /></div>
                        <div className="mil-step-content">
                            <h3>Implementação completa com integrações profundas</h3>
                            <p>Conectamos o agente com absolutamente tudo que você usa: WhatsApp Business API oficial, CRM, sistema de agendamento, plataforma de e-commerce, ERP, Google Calendar, planilhas. Integrações reais via API que permitem o agente acessar e modificar dados. Não é integração superficial de nome, é automação verdadeira que move informação entre sistemas.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaChartLine /></div>
                        <div className="mil-step-content">
                            <h3>Monitoramento contínuo e otimização baseada em dados</h3>
                            <p>Acompanhamos performance do agente diariamente: taxa de conversão, pontos de abandono, perguntas não respondidas, satisfação do cliente. Otimizamos fluxos conversacionais com base em dados reais, não em teoria. Cada mês o agente fica mais inteligente porque aprende com as interações. Evolução contínua inclusa no serviço.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShieldAlt /></div>
                        <div className="mil-step-content">
                            <h3>API oficial do WhatsApp para segurança total</h3>
                            <p>Trabalhamos exclusivamente com WhatsApp Business API oficial homologada pela Meta. Seu número está protegido, opera dentro das políticas, tem suporte direto e zero risco de bloqueio. Não usamos soluções não oficiais que prometem economia mas colocam seu número e reputação em risco. Profissionalismo técnico que garante estabilidade.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 6: PROCESSO/METODOLOGIA */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="como-funciona-processo" style={{ whiteSpace: 'normal' }}>
                        Como funciona a implementação <br className="mil-mobile-br" />
                        do Agente de IA BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Metodologia estruturada garante que o agente entende profundamente seu negócio antes de começar a atender clientes. Não ativamos nada sem testes extensivos e aprovação sua de cada detalhe.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">1</div>
                        <div className="mil-step-content">
                            <h3>Imersão completa e treinamento especializado da IA</h3>
                            <p>Estudamos profundamente seu negócio, produtos, serviços, diferenciais, objeções comuns, tom de comunicação. Treinamos o agente com essa inteligência: ensinamos como responder cada tipo de pergunta, como lidar com objeções, quando transferir para humano. IA absorve conhecimento da sua empresa como funcionário sendo integrado.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">2</div>
                        <div className="mil-step-content">
                            <h3>Integração técnica com todos os sistemas necessários</h3>
                            <p>Conectamos o agente com WhatsApp Business API, seu sistema de agendamento, CRM, plataforma de vendas, estoque, qualquer ferramenta que precise acessar dados. Configuramos webhooks, APIs, autenticações. Testamos cada integração exaustivamente para garantir fluxo de dados confiável e preciso. Tecnicamente impecável antes de ativar.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">3</div>
                        <div className="mil-step-content">
                            <h3>Teste de estresse com simulação de clientes difíceis</h3>
                            <p>Simulamos dezenas de cenários reais: cliente confuso, cliente apressado, cliente com dúvida técnica complexa, cliente querendo negociar preço. Testamos limites do agente, identificamos pontos fracos, refinamos respostas. Só aprovamos para produção depois que passar por bateria completa de testes que replica situações reais do dia a dia.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">4</div>
                        <div className="mil-step-content">
                            <h3>Go-live monitorado com acompanhamento em tempo real</h3>
                            <p>Ativamos o agente inicialmente com volume controlado enquanto monitoramos cada conversa em tempo real. Primeiros dias são cruciais para ajustes finos baseados em comportamento real dos seus clientes. Equipe técnica está de prontidão para corrigir qualquer desvio imediatamente. Transição suave e segura para operação completa.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number">5</div>
                        <div className="mil-step-content">
                            <h3>Otimização contínua baseada em performance real</h3>
                            <p>Analisamos relatórios semanais de performance, identificamos oportunidades de melhoria, testamos variações de fluxo conversacional, adicionamos respostas para perguntas novas que surgirem. Agente evolui continuamente se tornando cada vez mais eficiente e preciso. Não é projeto com começo e fim, é operação viva que melhora sempre.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 7: PARA QUEM É */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="para-quem" style={{ whiteSpace: 'normal' }}>
                        Para quem é o Agente de IA BeChange
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Automação com IA funciona excepcionalmente bem para negócios que recebem volume alto de contatos repetitivos ou que perdem vendas por demora no atendimento. Se seu time passa o dia respondendo as mesmas perguntas, você precisa de agente de IA.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaPhone /></div>
                        <div className="mil-step-content">
                            <h3>Empresas que recebem alto volume de contatos diários</h3>
                            <p>Se você recebe dezenas ou centenas de mensagens por dia no WhatsApp, atender manualmente é impossível sem equipe grande. Agente de IA escala atendimento infinitamente: responde dez ou mil clientes simultaneamente com mesma qualidade. Libera equipe humana para atividades que realmente precisam de toque pessoal.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaCalendarAlt /></div>
                        <div className="mil-step-content">
                            <h3>Clínicas e consultórios que perdem tempo agendando</h3>
                            <p>Se recepcionista passa metade do dia só agendando e confirmando consultas, está desperdiçando talento em tarefa que IA faz melhor. Agente agenda, confirma, remarca e envia lembretes automaticamente. Recepcionista foca em recepcionar bem quem está presente, não em atender telefone o dia inteiro.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaUserTie /></div>
                        <div className="mil-step-content">
                            <h3>Prestadores de serviço que precisam qualificar antes de gastar tempo</h3>
                            <p>Se seu time comercial perde horas com leads frios que nunca vão fechar, precisa de qualificação automática. Agente de IA faz perguntas certas, identifica interesse real, entrega para vendedor apenas oportunidades maduras. Produtividade comercial multiplica porque tempo é gasto apenas com quem tem potencial concreto.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaShoppingCart /></div>
                        <div className="mil-step-content">
                            <h3>E-commerces com alto índice de abandono de carrinho</h3>
                            <p>Se muitos clientes adicionam produtos mas não finalizam compra, recuperação automática é essencial. Agente identifica abandono, entra em contato oferecendo ajuda, remove objeções, oferece desconto estratégico se necessário. Taxa de recuperação sobe drasticamente com abordagem personalizada no momento certo.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaClock /></div>
                        <div className="mil-step-content">
                            <h3>Negócios que perdem vendas fora do horário comercial</h3>
                            <p>Se cliente te procura à noite ou fim de semana e só recebe resposta na segunda-feira, você perde vendas. Agente de IA atende vinte e quatro horas por dia, sete dias por semana, trezentos e sessenta e cinco dias por ano. Cliente recebe atenção imediata independente do horário, conversão aumenta drasticamente.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEÇÃO 8: INVESTIMENTO */}
            <div className="mil-p-90-30" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                <div className="mil-divider mil-up" style={{ marginBottom: '60px' }}></div>
                <div className="mil-center mil-up mil-mb-30">
                    <h2 id="investimento" style={{ whiteSpace: 'normal' }}>
                        Quanto custa implementar um Agente de IA profissional
                    </h2>
                </div>
                <p className="mil-up mil-mb-60 mil-section-description mil-center">
                    Investimento em automação inteligente tem dois componentes: implementação inicial para treinar e configurar o agente, e mensalidade de operação que cobre infraestrutura, monitoramento e otimização contínua. Valor varia conforme complexidade e volume.
                </p>

                <div className="mil-process-steps mil-mb-60">
                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaMoneyBillWave /></div>
                        <div className="mil-step-content">
                            <h3>O custo invisível de não ter automação inteligente</h3>
                            <p>Cada venda perdida por demora no atendimento custa dinheiro real. Cliente que desiste porque ninguém respondeu em cinco minutos comprou do concorrente. Multiplicado por dezenas ou centenas de oportunidades perdidas por mês, o custo de não ter automação supera amplamente o investimento em implementar. Deixar de investir não é economia, é prejuízo disfarçado.</p>
                        </div>
                    </div>

                    <div className="mil-process-step mil-up">
                        <div className="mil-step-number"><FaTools /></div>
                        <div className="mil-step-content">
                            <h3>Modelo de investimento: setup profissional e mensalidade de operação</h3>
                            <p>Cobramos taxa única de implementação que cobre análise, treinamento da IA, integrações técnicas, testes e go-live. Mensalidade recorrente cobre infraestrutura de API, monitoramento diário, suporte técnico, otimizações e evoluções. Modelo transparente sem custos ocultos. Valor específico depende de complexidade e volume de mensagens processadas.</p>
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
                        Agentes de IA e Automação
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
                        Pare de perder vendas <br className="mil-desktop-br" />
                        por demora no atendimento
                    </h2>
                </div>
                <p className="mil-up mil-section-description mil-mb-30">
                    Se você quer atendimento inteligente que funciona vinte e quatro horas por dia, responde como humano treinado e aumenta drasticamente sua taxa de conversão, o próximo passo é ver o agente funcionando. Agendamos demonstração personalizada onde mostramos exatamente como a IA atenderia seus clientes específicos e quanto você pode ganhar com automação profissional.
                </p>
                <div className="mil-center mil-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Link href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20agente%20de%20IA." className="mil-btn mil-sm-btn mil-rounded" target="_blank" rel="noopener noreferrer">
                        <span>Agendar demonstração</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutAgentesIA;
