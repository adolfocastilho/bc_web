import Data from "@data/sections/hero-1.json";
import { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { ANIMATION } from "@common/constants";

const HeroOne = () => {
    const el = useRef(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * ANIMATION.SCROLL_ROTATION_SPEED);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: Data.typedStrings,
            typeSpeed: ANIMATION.TYPE_SPEED,
            backSpeed: ANIMATION.BACKSPACE_SPEED,
            backDelay: ANIMATION.BACKSPACE_DELAY,
            loop: true,
            showCursor: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-side-banner mil-center">
                <div className="mil-banner-top mil-up"></div>
                <div className="mil-banner-title">
                    <img src="/img/icons/icone_hero_bechange.svg" alt="BeCHANGE" width={180} height={250} className="mil-up mil-mb-30 mil-hero-icon" />
                    <div className="mil-upper mil-dark mil-up mil-mb-30">{Data.subtitle}</div>
                    <h1 className="mil-up mil-mb-30" style={{ minHeight: '1.2em' }}>
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
                        <a href="#about" className="mil-button">
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