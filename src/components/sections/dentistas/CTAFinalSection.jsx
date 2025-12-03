import Data from "@data/sections/dentistas/cta-final-dentistas.json";

const CTAFinalSection = () => {
    return (
        <>
            {/* cta final section */}
            <section id="cta-final" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-section-title mil-up mil-mb-30">
                        <div className="mil-divider" />
                        <h2>{Data.title}</h2>
                    </div>
                    <p className="mil-up mil-p-0-10 mil-section-description" style={{ whiteSpace: 'pre-line', maxWidth: '800px', margin: '30px auto' }}>
                        {Data.copy}
                    </p>

                    {/* cta buttons */}
                    <div className="mil-up mil-center mil-mb-60 mil-mt-60">
                        <a href={Data.ctaPrimario.link} target="_blank" rel="noopener noreferrer" className="mil-btn mil-sm-btn mil-rounded" style={{ marginRight: '15px', marginBottom: '15px' }}>
                            <span>{Data.ctaPrimario.text}</span>
                        </a>
                        <a href={Data.ctaSecundario.link} className="mil-btn mil-sm-btn mil-rounded mil-outline" style={{ marginBottom: '15px' }}>
                            <span>{Data.ctaSecundario.text}</span>
                        </a>
                    </div>
                    {/* cta buttons end */}
                </div>
            </section>
            {/* cta final section end */}
        </>
    );
};

export default CTAFinalSection;
