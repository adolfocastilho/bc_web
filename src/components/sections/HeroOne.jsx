import Data from "@data/sections/hero-1.json";
import { useEffect, useRef, useState } from "react";
import { ANIMATION } from "@common/constants";

import ExportedImage from "@components/common/ExportedImage";

const HeroOne = () => {
    const el = useRef(null);
    const [rotation, setRotation] = useState(0);
    const typedInstance = useRef(null);

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

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                    <ExportedImage src="/img/icons/icone_hero_bechange.svg" alt="BeCHANGE" width={180} height={250} sizes="180px" className="mil-up mil-hero-icon" />
                    <div className="mil-upper mil-dark mil-up">{Data.subtitle}</div>
                    <h1 className="mil-up" style={{ minHeight: '1.2em' }}>
                        <span ref={el} />
                    </h1>
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