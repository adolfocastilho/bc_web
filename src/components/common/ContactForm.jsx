import { Formik } from 'formik';
import { useRouter } from 'next/router';

const ContactForm = ({ formspreeURL }) => {
    const router = useRouter();

    return (
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
                <form onSubmit={handleSubmit} id="contactForm" action={formspreeURL} className="row align-items-center">
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
    );
};

export default ContactForm;
