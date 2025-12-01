import appData from "@data/app.json";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../common/ContactForm"), {
    ssr: false,
});

const ContactSection = () => {
    return (
        <section id="contact" className="mil-p-0-0 mil-mt-90">
            <div className="mil-center mil-mb-60">
                <div className="mil-section-title mil-up mil-mb-30">
                    <div className="mil-divider" />
                    <h3>Vamos conversar</h3>
                </div>
                <p className="mil-up mil-p-0-10" style={{ maxWidth: '800px', margin: '30px auto 30px', textAlign: 'center' }}>
                    Se você enxerga potencial de crescimento mas sabe que sua presença digital atual não sustenta esse próximo passo, seja pela marca que não transmite autoridade, pelo site que não converte, ou pela estrutura despreparada para tráfego pago, este é o ponto de partida. Solicite uma Reunião de Avaliação Estratégica de 60 minutos (cortesia). Vamos analisar sua situação atual, identificar o que está impedindo vendas e desenhar um plano técnico e financeiramente viável para escalar com solidez.
                </p>
            </div>
            <div className="mil-center mil-up mil-mb-60">
                <a href="https://wa.me/5561996090943?text=Ol%C3%A1%2C%20Adolfo.%20Acessei%20o%20site%20da%20BeChange%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" className="mil-btn mil-sm-btn mil-rounded">
                    <span>Agendar Reunião Estratégica</span>
                </a>
            </div>

            {/* contact form */}
            <div className="mil-p-0-60">
                <ContactForm formspreeURL={appData.settings.formspreeURL} />
            </div>
        </section>
    );
};

export default ContactSection;
