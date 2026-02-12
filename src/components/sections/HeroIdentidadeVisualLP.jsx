import { useEffect, useState } from "react";
import { ANIMATION } from "@common/constants";
import ExportedImage from "@components/common/ExportedImage";
import Link from "next/link";

const HeroIdentidadeVisualLP = () => {
    const [rotation, setRotation] = useState(0);
    const [viewportSize, setViewportSize] = useState('desktop');

    // Detect viewport size on mount
    useEffect(() => {
        const getViewportSize = () => {
            const width = window.innerWidth;
            if (width < 768) return 'mobile';
            if (width < 1024) return 'tablet';
            if (width < 1200) return 'smallLaptop';
            return 'desktop';
        };

        setViewportSize(getViewportSize());
        const handleResize = () => setViewportSize(getViewportSize());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let rafId;
        const handleScroll = () => {
            // Disable rotation animation on mobile to save CPU
            if (window.innerWidth < 768) return;

            rafId = requestAnimationFrame(() => {
                setRotation(window.scrollY * ANIMATION.SCROLL_ROTATION_SPEED);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title" style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: viewportSize === 'mobile' ? '15px' : '30px'
                }}>
                    <ExportedImage
                        src="/img/icons/icone_hero_bechange.svg"
                        alt="BeCHANGE"
                        width={180}
                        height={250}
                        sizes="180px"
                        className="mil-up mil-hero-icon"
                    />
                    <div className="mil-upper mil-dark mil-up">ORÇAMENTO GRATUITO</div>

                    {/* Static H1 Title */}
                    <h1
                        className="mil-up mil-hero-title-lp"
                        style={{
                            fontWeight: 600,
                            textAlign: 'center',
                            color: 'rgba(32, 33, 36, 1)',
                            margin: 0,
                            padding: viewportSize === 'mobile' ? '0 20px' : '0'
                        }}
                    >
                        {viewportSize === 'mobile' ? (
                            <>
                                Identidade Visual<br />
                                Profissional para<br />
                                Sua Empresa
                            </>
                        ) : (
                            <>
                                Identidade Visual Profissional<br />
                                que Faz Sua Empresa se<br />
                                Destacar no Mercado
                            </>
                        )}
                    </h1>

                    <p className="mil-upper mil-dark mil-up" style={{ textAlign: 'center', maxWidth: '700px' }}>
                        {viewportSize === 'mobile' ? (
                            'Logo estratégico, paleta de cores, tipografia e manual de aplicação.'
                        ) : (
                            <>
                                Logo estratégico, paleta de cores, tipografia e manual de aplicação.<br />
                                Tudo que sua marca precisa para se posicionar com profissionalismo.
                            </>
                        )}
                    </p>

                    {/* CTA Button */}
                    <div className="mil-up" style={{ marginTop: '20px' }}>
                        <Link
                            href="https://api.whatsapp.com/send?phone=5511912005640&text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito%20para%20identidade%20visual."
                            className="mil-btn mil-sm-btn mil-rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>QUERO MEU ORÇAMENTO GRATUITO</span>
                        </Link>
                    </div>
                </div>
                <div className="mil-up mil-oval-frame">
                    <div className="mil-circle-text">
                        {/* SVG circular text - only on desktop */}
                        {viewportSize !== 'mobile' && (
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
                                style={{ transform: `scale(2) rotate(${rotation}deg)` }}
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
                        )}
                        <a href="#beneficios" className="mil-button" aria-label="Role para baixo">
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
export default HeroIdentidadeVisualLP;
