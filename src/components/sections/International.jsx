import React from 'react';

const InternationalSection = () => {
    return (
        <section className="mil-p-0-90">
            <div className="mil-section-title mil-up">
                <div className="mil-divider" />
                <h3>Para brasileiros que moram fora do Brasil</h3>
            </div>
            <div className="row justify-content-center mil-mb-60">
                <div className="col-lg-8 mil-center">
                    <p className="mil-up mil-p-0-10 mil-section-description">
                        Você investe em real, fala em português e tem um parceiro estratégico no Brasil para atuar com segurança em outros mercados.
                    </p>
                    <div className="mil-up mil-mt-30">
                        <span className="mil-badge mil-mr-15">Câmbio a favor</span>
                        <span className="mil-badge mil-mr-15">Atendimento online</span>
                        <span className="mil-badge">Foco em brasileiros no exterior</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mil-icon-box mil-center mil-mb-60 mil-up">
                            <h3 className="mil-mb-30">Câmbio que beneficia você</h3>
                            <p>Ganha em euro ou dólar, paga em real. O investimento pesa menos do que contratar uma agência no país onde você mora.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mil-icon-box mil-center mil-mb-60 mil-up">
                            <h5 className="mil-mb-30">Comunicação sem ruído</h5>
                            <p>Briefing e ajustes em português, com alguém que entende sua cultura, seu contexto e o público brasileiro que você quer alcançar.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mil-icon-box mil-center mil-mb-60 mil-up">
                            <h5 className="mil-mb-30">Processo seguro e previsível</h5>
                            <p>Proposta clara, contrato e nota fiscal brasileira, com tudo conduzido online de forma organizada e profissional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternationalSection;
