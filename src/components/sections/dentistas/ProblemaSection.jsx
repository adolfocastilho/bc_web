import Data from "@data/sections/dentistas/problema-dentistas.json";

const ProblemaSection = () => {
    return (
        <>
            {/* problema section */}
            <section id="problema" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-section-title mil-up mil-mb-30">
                        <div className="mil-divider" />
                        <h2>{Data.title}</h2>
                    </div>
                    <p className="mil-up mil-p-0-10 mil-section-description" style={{ whiteSpace: 'pre-line' }}>
                        {Data.intro}
                    </p>

                    {/* problema cards */}
                    <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                        <div className="row justify-content-between align-items-start">
                            {Data.problemas.map((problema, key) => (
                                <div key={`problema-item-${key}`} className="col-lg-4">
                                    <div className="mil-icon-box mil-center mil-mb-60">
                                        <h3 className="mil-up mil-mb-30" style={{ color: '#c62828', minHeight: '80px' }}>
                                            {problema.title}
                                        </h3>
                                        <p className="mil-up mil-mb-30" style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
                                            {problema.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* problema cards end */}
                </div>
            </section>
            {/* problema section end */}
        </>
    );
};

export default ProblemaSection;
