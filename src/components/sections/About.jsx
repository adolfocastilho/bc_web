import Data from "@data/sections/about.json";
import { FaQuoteLeft } from "react-icons/fa";
import ExportedImage from "@components/common/ExportedImage";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
    const marqueeRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Detect mobile on mount
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Pause marquee animation when not visible (desktop only)
    useEffect(() => {
        if (isMobile) return; // Skip observer on mobile since no animation

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (marqueeRef.current) {
            observer.observe(marqueeRef.current);
        }

        return () => {
            if (marqueeRef.current) {
                observer.unobserve(marqueeRef.current);
            }
        };
    }, [isMobile]);

    return (
        <>
            {/* about */}
            <section id="sobre" className="mil-p-0-90">
                <div className="container">
                    <div className="mil-oval-frame-2 mil-mb-90">
                        <ExportedImage src={Data.avatar.image} alt={Data.avatar.alt} width={1536} height={1536} sizes="120px" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mil-center">
                                <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.title }} />
                                <div className="mil-quote mil-up mil-mb-30"><FaQuoteLeft /></div>
                                <p className="mil-up mil-mb-30 mil-section-description">{Data.description}</p>

                                {/* MOBILE: Static grid with 4 logos */}
                                {isMobile ? (
                                    <div className="mil-logos-static mil-up mil-mb-30">
                                        {Data.logos.slice(0, 4).map((logo, index) => (
                                            <div className="mil-logo-item-static" key={index}>
                                                <ExportedImage src={logo.image} alt={logo.alt} width={400} height={400} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* DESKTOP: Animated marquee */
                                    <div
                                        ref={marqueeRef}
                                        className="mil-logos-wrapper mil-up mil-mb-30"
                                    >
                                        <div
                                            className="mil-marquee-track"
                                            style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
                                        >
                                            {[...Data.logos, ...Data.logos].map((logo, index) => (
                                                <div className="mil-logo-item" key={index}>
                                                    <ExportedImage src={logo.image} alt={logo.alt} width={400} height={400} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mil-center mil-up mil-mt-60">
                                    <a href="#portfolio" className="mil-btn mil-sm-btn mil-rounded">
                                        <span>Ver Portfólio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;