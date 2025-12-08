import appData from "@data/app.json";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../common/ContactForm"), {
    ssr: false,
});

const ContactSection = () => {
    return (
        <section id="contato" style={{ paddingTop: '90px' }}>
            <div style={{ padding: 0 }}>
                <div className="mil-section-title mil-up">
                    <div className="mil-divider"></div>
                    <h2>Agenda restrita</h2>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description">
                    Trabalhamos apenas com clientes que entendem que marca forte e site estratégico são investimento, não gasto. Que sabem diferenciar designer de executor. Que buscam parceiro de longo prazo, não fornecedor pontual. Se este é o seu perfil, agende 60 minutos de análise estratégica sem custo. Vamos avaliar se faz sentido trabalharmos juntos, identificar o que impede seus resultados e desenhar um plano claro para o próximo nível.
                </p>
            </div>
            <div className="mil-center mil-up" style={{ margin: 0, paddingBottom: '70px' }}>
                <a href="https://wa.me/5561996090943?text=Ol%C3%A1%2C%20Adolfo.%20Acessei%20o%20site%20da%20BeChange%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" className="mil-btn mil-sm-btn mil-rounded">
                    <span>Agendar Reunião Estratégica</span>
                </a>
            </div>

            {/* contact form */}
            <div style={{ padding: 0 }}>
                <ContactForm formspreeURL={appData.settings.formspreeURL} />
            </div>
        </section>
    );
};

export default ContactSection;
