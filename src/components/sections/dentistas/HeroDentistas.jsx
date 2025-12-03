import Data from "@data/sections/dentistas/hero-dentistas.json";

const HeroDentistas = () => {
    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                    <div className="mil-upper mil-dark mil-up">{Data.subtitle}</div>
                    <h1 className="mil-up" style={{ textAlign: 'center', maxWidth: '900px' }}>
                        {Data.title}
                    </h1>
                    <p className="mil-upper mil-dark mil-up" style={{ textAlign: 'center', maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {Data.description}
                    </p>
                    <div className="mil-up mil-mb-30 mil-mt-30">
                        <a href={Data.cta.link} target="_blank" rel="noopener noreferrer" className="mil-btn mil-sm-btn mil-rounded">
                            <span>{Data.cta.text}</span>
                        </a>
                    </div>
                </div>
                <div className="mil-up mil-oval-frame">
                    <div className="mil-circle-text">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 300 300"
                            enableBackground="new 0 0 300 300"
                            xmlSpace="preserve"
                            className="mil-ct-svg"
                            style={{ transform: 'scale(2)' }}
                        >
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none" />
                            <g>
                                <use xlinkHref="#circlePath" fill="none" />
                                <text style={{ "letterSpacing": "3px" }}>
                                    <textPath xlinkHref="#circlePath">Deslize para baixo - Deslize para baixo - </textPath>
                                </text>
                            </g>
                        </svg>
                        <a href="#problema" className="mil-button" aria-label="Role para baixo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroDentistas;
