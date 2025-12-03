import Data from "@data/sections/dentistas/comparacao-dentistas.json";

const ComparacaoSection = () => {
    return (
        <>
            {/* comparacao section */}
            <section id="comparacao" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-section-title mil-up mil-mb-30">
                        <div className="mil-divider" />
                        <h2>{Data.title}</h2>
                    </div>
                    <p className="mil-up mil-p-0-10 mil-section-description">
                        {Data.intro}
                    </p>

                    {/* tabela comparativa */}
                    <div className="mil-p-90-30" style={{ paddingTop: '60px' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="mil-up" style={{ overflowX: 'auto' }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '0.95rem'
                                    }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid #333' }}>
                                                {Data.tabela.colunas.map((coluna, idx) => (
                                                    <th key={`col-${idx}`} style={{
                                                        padding: '15px 10px',
                                                        textAlign: 'left',
                                                        fontWeight: 'bold',
                                                        background: idx === 3 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                                                        color: idx === 3 ? '#fff' : 'inherit'
                                                    }}>
                                                        {coluna}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data.tabela.linhas.map((linha, idx) => (
                                                <tr key={`row-${idx}`} style={{ borderBottom: '1px solid #eee' }}>
                                                    <td style={{ padding: '15px 10px', fontWeight: '600' }}>{linha.criterio}</td>
                                                    <td style={{ padding: '15px 10px' }}>{linha.canva}</td>
                                                    <td style={{ padding: '15px 10px' }}>{linha.freelancer}</td>
                                                    <td style={{ padding: '15px 10px', background: 'rgba(102, 126, 234, 0.05)' }}>{linha.bechange}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mil-up mil-mt-60" style={{ whiteSpace: 'pre-line', textAlign: 'center', fontSize: '1.05rem' }}>
                                    {Data.conclusao}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* tabela comparativa end */}
                </div>
            </section>
            {/* comparacao section end */}
        </>
    );
};

export default ComparacaoSection;
