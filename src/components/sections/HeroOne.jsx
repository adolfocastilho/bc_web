import Data from "@data/sections/hero-1.json";
import { useEffect, useRef, useState } from "react";
import { ANIMATION } from "@common/constants";

import ExportedImage from "@components/common/ExportedImage";

const HeroOne = () => {
    const el = useRef(null);
    const heroRef = useRef(null);
    const [rotation, setRotation] = useState(0);
    const typedInstance = useRef(null);
    const [viewportSize, setViewportSize] = useState('desktop');
    const [isHeroVisible, setIsHeroVisible] = useState(true);

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

    // Helper to check if mobile
    const isMobile = viewportSize === 'mobile';

    // Intersection Observer to pause text cycle when hero is not visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
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

    // ========================================================================
    // FADE EFFECT - Only runs on DESKTOP when hero is visible
    // MOBILE: Static text to match identidade-visual performance
    // ========================================================================
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // MOBILE OPTIMIZATION: Skip animation on mobile - static text
        if (isMobile) return;

        // Only run interval when hero is visible (desktop only)
        if (!isHeroVisible) return;

        const interval = setInterval(() => {
            setIsVisible(false); // Start fade out
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % Data.typedStrings.length);
                setIsVisible(true); // Start fade in
            }, 500); // Wait for fade out transition (matches CSS transition duration)
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(interval);
    }, [isHeroVisible, isMobile]);

    return (
        <>
            {/* banner */}
            <section ref={heroRef} className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: viewportSize === 'mobile' ? '15px' : '30px' }}>
                    <ExportedImage src="/img/icons/icone_hero_bechange.svg" alt="BeCHANGE" width={180} height={250} sizes="180px" className="mil-up mil-hero-icon" />
                    <div className="mil-upper mil-dark mil-up">{Data.subtitle}</div>

                    {/* ========================================================================
                        FADE TEXT EFFECT - Same animation for mobile and desktop
                        ======================================================================== */}
                    <div className="mil-up" style={{
                        width: '100%',
                        maxWidth: '1000px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h1 className="mil-hero-title-home">
                            <span
                                className="mil-fade-text"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: isMobile ? 'none' : 'opacity 0.5s ease-in-out',
                                    display: 'inline-block'
                                }}
                            >
                                {isMobile ? Data.typedStrings[1] : Data.typedStrings[textIndex]}
                            </span>
                        </h1>
                    </div>

                    {/* ========================================================================
                        FADE EFFECT (COMMENTED OUT - KEPT FOR EASY REVERSION)
                        ========================================================================
                    <h1 className="mil-up" style={{ minHeight: '1.2em' }}>
                        <span style={{
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                            display: 'inline-block'
                        }}>
                            {Data.typedStrings[textIndex]}
                        </span>
                    </h1>
                    */}

                    <p className="mil-upper mil-dark mil-up">
                        {isMobile ? (
                            <>Agência de Criação de Sites<br />e Identidade Visual</>
                        ) : (
                            Data.description
                        )}
                    </p>
                </div>
                <div className="mil-up mil-oval-frame">
                    <div className="mil-circle-text">
                        {/* SVG circular text - only on desktop to avoid LCP issues */}
                        {!isMobile && (
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
                        <a href="#sobre" className="mil-button" aria-label="Role para baixo">
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
export default HeroOne;