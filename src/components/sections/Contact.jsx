import { Formik } from 'formik';
import appData from "@data/app.json";

const ContactSection = () => {
    return (
        <section id="contact" className="mil-p-0-0">
            <div className="mil-section-title mil-up">
                <div className="mil-divider" />
                <h3>Vamos Conversar</h3>
            </div>
            <p className="mil-up mil-p-0-10" style={{ maxWidth: '800px', margin: '30px auto 60px', textAlign: 'center' }}>Se você enxerga potencial de crescimento, mas não quer decisões no improviso, este é o ponto de partida. Envie uma mensagem objetiva e eu retorno com um olhar técnico sobre o cenário da sua marca.</p>

            {/* info */}
            <div className="mil-p-90-0">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <ul className="mil-puplication-details mil-up mil-mb-90">
                            <li>
                                <span className="mil-upper mil-accent">Cel: </span>&nbsp;&nbsp;
                                <a href="https://wa.me/5561996090943" target="_blank" rel="noopener noreferrer" className="mil-upper mil-dark">+55 (61) 99609-0943</a>
                            </li>
                            <li>
                                <span className="mil-upper mil-accent">EMAIL: </span>&nbsp;&nbsp;
                                <span className="mil-upper mil-dark">adolfo@bechange.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className="mil-p-90-60">
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
                                status.innerHTML = "Thanks for your submission!";
                                form.reset()
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
                            <div className="col-lg-8">
                                <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="mil-adaptive-right mil-up mil-mb-30">
                                    <button type="submit" className="mil-btn mil-sm-btn">
                                        <span>Enviar mensagem</span>
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
