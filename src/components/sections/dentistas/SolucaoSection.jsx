import Data from "@data/sections/dentistas/solucao-dentistas.json";

const SolucaoSection = () => {
    return (
        <>
            {/* solucao section */}
            <section id="solucao" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-section-title mil-up mil-mb-30">
                        <div className="mil-divider" />
                        <h2>{Data.title}</h2>
                    </div>
                    <p className="mil-up mil-p-0-10 mil-section-description">
                        {Data.intro}
                    </p>

                    {/* solucao cards */}
                    <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                        <div className="row justify-content-between align-items-start">
                            {Data.entregas.map((entrega, key) => (
                                <div key={`entrega-item-${key}`} className="col-lg-4">
                                    <div className="mil-icon-box mil-center mil-mb-60">
                                        <div className="mil-up mil-mb-20" style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}>
                                            {key + 1}
                                        </div>
                                        <h3 className="mil-up mil-mb-30" style={{ minHeight: '80px' }}>
                                            {entrega.title}
                                        </h3>
                                        <p className="mil-up mil-mb-30" style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
                                            {entrega.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* solucao cards end */}
                </div>
            </section>
            {/* solucao section end */}
        </>
    );
};

export default SolucaoSection;
