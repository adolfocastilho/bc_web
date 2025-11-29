import { Formik } from 'formik';
import appData from "@data/app.json";
import { useRouter } from 'next/router';

const ContactSection = () => {
    const router = useRouter();

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
                <Formik
                    initialValues={{ email: '', name: '', message: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        const form = document.getElementById("contactForm");
                        const status = document.getElementById("contactFormStatus");
                        const data = new FormData();

                        data.append('name', values.name);
                        data.append('email', values.email);
                        data.append('message', values.message);

                        fetch(form.action, {
                            method: 'POST',
                            body: data,
                            headers: {
                                'Accept': 'application/json'
                            }
                        }).then(response => {
                            if (response.ok) {
                                form.reset();
                                router.push('/obrigado'); // Redirect to Thank You page
                            } else {
                                response.json().then(data => {
                                    if (Object.hasOwn(data, 'errors')) {
                                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                    } else {
                                        status.innerHTML = "Oops! There was a problem submitting your form"
                                    }
                                })
                            }
                        }).catch(error => {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        });

                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="row align-items-center">
                            <div className="col-lg-6 mil-up">
                                <input
                                    type="text"
                                    placeholder="Seu Nome"
                                    name="name"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div className="col-lg-6 mil-up">
                                <input
                                    type="email"
                                    placeholder="Seu Email"
                                    name="email"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div className="col-lg-12 mil-up">
                                <textarea
                                    placeholder="Conte sobre o seu projeto"
                                    name="message"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                            </div>
                            <div className="col-lg-8 mil-mb-order-2">
                                <p className="mil-up mil-mb-30 mil-text-center-mobile">
                                    <span className="mil-accent">*</span> Seus dados estão protegidos pela BeChange. Respeitamos a LGPD.<br />
                                    contato@bechange.com.br
                                </p>
                            </div>
                            <div className="col-lg-4 mil-mb-order-1">
                                <div className="mil-adaptive-right mil-up mil-mb-30">
                                    <button type="submit" className="mil-btn mil-sm-btn mil-rounded">
                                        <span>Enviar Mensagem</span>
                                    </button>
                                </div>
                            </div>
                            <div className="form-status" id="contactFormStatus" />
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default ContactSection;
