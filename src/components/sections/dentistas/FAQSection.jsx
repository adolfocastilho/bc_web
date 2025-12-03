import Data from "@data/sections/dentistas/faq-dentistas.json";
import { useState } from "react";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* faq section */}
            <section id="faq" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-section-title mil-up mil-mb-30">
                        <div className="mil-divider" />
                        <h2>{Data.title}</h2>
                    </div>

                    {/* faq accordion */}
                    <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {Data.perguntas.map((item, index) => (
                                    <div key={`faq-${index}`} className="mil-up mil-mb-30" style={{
                                        border: '1px solid #eee',
                                        borderRadius: '10px',
                                        overflow: 'hidden'
                                    }}>
                                        <h3
                                            onClick={() => toggleAccordion(index)}
                                            style={{
                                                padding: '20px 25px',
                                                margin: 0,
                                                cursor: 'pointer',
                                                background: activeIndex === index ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
                                                color: activeIndex === index ? '#fff' : '#333',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <span>{item.pergunta}</span>
                                            <span style={{
                                                fontSize: '1.5rem',
                                                transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                +
                                            </span>
                                        </h3>
                                        <div style={{
                                            maxHeight: activeIndex === index ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease'
                                        }}>
                                            <p style={{
                                                padding: '25px',
                                                margin: 0,
                                                whiteSpace: 'pre-line',
                                                lineHeight: '1.8',
                                                background: '#fff'
                                            }}>
                                                {item.resposta}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* faq accordion end */}
                </div>
            </section>
            {/* faq section end */}
        </>
    );
};

export default FAQSection;
