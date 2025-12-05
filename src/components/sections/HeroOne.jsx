import Data from "@data/sections/hero-1.json";
import { useEffect, useRef, useState } from "react";
import { ANIMATION } from "@common/constants";
import dynamic from "next/dynamic";

import ExportedImage from "@components/common/ExportedImage";

// Dynamically import VaporizeTextCycle to avoid SSR issues with canvas
const VaporizeTextCycle = dynamic(
    () => import("@components/common/VaporizeTextCycle"),
    { ssr: false }
);

const HeroOne = () => {
    const el = useRef(null);
    const [rotation, setRotation] = useState(0);
    const typedInstance = useRef(null);
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

    // Helper to check if mobile
    const isMobile = viewportSize === 'mobile';

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

    /* 
    // ========================================================================
    // TYPED.JS EFFECT (ORIGINAL - COMMENTED OUT)
    // ========================================================================
    useEffect(() => {
        let isMounted = true;

        const initTyped = () => {
            import("typed.js").then((TypedModule) => {
                if (!isMounted || !el.current) return;

                const Typed = TypedModule.default;
                typedInstance.current = new Typed(el.current, {
                    strings: Data.typedStrings,
                    typeSpeed: ANIMATION.TYPE_SPEED,
                    backSpeed: ANIMATION.BACKSPACE_SPEED,
                    backDelay: ANIMATION.BACKSPACE_DELAY,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|'
                });
            });
        };

        // Delay Typed.js on mobile to reduce initial TBT
        if (window.innerWidth < 768) {
            const timer = setTimeout(initTyped, 800);
            return () => {
                clearTimeout(timer);
                isMounted = false;
                if (typedInstance.current) {
                    typedInstance.current.destroy();
                    typedInstance.current = null;
                }
            };
        } else {
            initTyped();
            return () => {
                isMounted = false;
                if (typedInstance.current) {
                    typedInstance.current.destroy();
                    typedInstance.current = null;
                }
            };
        }
    }, []);
    */


    /* 
    // ========================================================================
    // FADE EFFECT (TEMPORARY - FOR SIZE COMPARISON)
    // ========================================================================
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Start fade out
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % Data.typedStrings.length);
                setIsVisible(true); // Start fade in
            }, 500); // Wait for fade out transition (matches CSS transition duration)
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(interval);
    }, []);
    */

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: viewportSize === 'mobile' ? '15px' : '30px' }}>
                    <ExportedImage src="/img/icons/icone_hero_bechange.svg" alt="BeCHANGE" width={180} height={250} sizes="180px" className="mil-up mil-hero-icon" />
                    <div className="mil-upper mil-dark mil-up">{Data.subtitle}</div>

                    {/* ========================================================================
                        VAPORIZE TEXT EFFECT (ACTIVE - FIXED HEIGHT)
                        ======================================================================== */}
                    <div className="mil-up" style={{
                        width: '100%',
                        maxWidth: viewportSize === 'mobile' ? '100%' : '1000px',
                        padding: viewportSize === 'mobile' ? '0 15px' : '0',
                        height: { mobile: '55px', tablet: '100px', smallLaptop: '120px', desktop: '138px' }[viewportSize],
                        minHeight: { mobile: '40px', tablet: '72px', smallLaptop: '80px', desktop: '92px' }[viewportSize],
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <VaporizeTextCycle
                            texts={Data.typedStrings}
                            font={{
                                fontSize: { mobile: '36px', tablet: '64px', smallLaptop: '76px', desktop: '92px' }[viewportSize],
                                fontWeight: 600
                            }}
                            color="rgba(32, 33, 36, 1)"
                            spread={5}
                            density={5}
                            animation={{
                                vaporizeDuration: 1.5,
                                fadeInDuration: 0.2,
                                waitDuration: 2
                            }}
                            direction="left-to-right"
                            alignment="center"
                            tag="h1"
                        />
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

                    <p className="mil-upper mil-dark mil-up">{Data.description}</p>
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
                            style={{ transform: `scale(2) rotate(${rotation}deg)` }}
                        >
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none" />
                            <g>
                                <use xlinkHref="#circlePath" fill="none" />
                                <text style={{ "letterSpacing": "3px" }}>
                                    {/* circle text */}
                                    <textPath xlinkHref="#circlePath">Deslize para baixo - Deslize para baixo - </textPath>
                                </text>
                            </g>
                        </svg>
                        <a href="#about" className="mil-button" aria-label="Role para baixo">
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