import Data from "@data/sections/portfolio.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Custom hook for media query
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

const PortfolioSection = () => {
    const isDesktop = useMediaQuery("(min-width: 992px)");

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const openLightbox = (imgSrc) => {
        setSelectedImage(imgSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <div className="mil-section-title mil-up">
                <div className="mil-divider"></div>
                <h3>{Data.title}</h3>
            </div>

            {/* portfolio grid */}
            <section id="portfolio" className="mil-p-90-30">
                <div className="row g-0 align-items-center">
                    {Data.items.map((item, key) => {
                        let borderRadius = '0';
                        const total = Data.items.length;

                        if (isDesktop) {
                            // Desktop: 4 columns
                            if (key === 0) borderRadius = '20px 0 0 0'; // Top-left
                            else if (key === 3) borderRadius = '0 20px 0 0'; // Top-right
                            else if (key === total - 4) borderRadius = '0 0 0 20px'; // Bottom-left
                            else if (key === total - 1) borderRadius = '0 0 20px 0'; // Bottom-right
                        } else {
                            // Mobile/Tablet: 2 columns
                            if (key === 0) borderRadius = '20px 0 0 0'; // Top-left
                            else if (key === 1) borderRadius = '0 20px 0 0'; // Top-right
                            else if (key === total - 2) borderRadius = '0 0 0 20px'; // Bottom-left
                            else if (key === total - 1) borderRadius = '0 0 20px 0'; // Bottom-right
                        }

                        return (
                            <div key={`portfolio-item-${key}`} className="col-6 col-lg-3" style={{ padding: 0 }}>
                                <div className="mil-icon-box mil-center">
                                    <div className="mil-service-slider" style={{
                                        width: '100%',
                                        borderRadius: borderRadius,
                                        overflow: 'hidden'
                                    }}>
                                        <Swiper
                                            modules={[Autoplay, EffectFade]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            loop={true}
                                            autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false,
                                            }}
                                            effect={"fade"}
                                            style={{ width: '100%', aspectRatio: '1/1' }} // Enforce a square aspect ratio
                                            onSwiper={(swiper) => {
                                                // Use setTimeout(0) to ensure we stop autoplay AFTER initialization
                                                setTimeout(() => {
                                                    if (swiper.autoplay) {
                                                        swiper.autoplay.stop();
                                                        setTimeout(() => {
                                                            if (swiper.autoplay) {
                                                                swiper.autoplay.start();
                                                            }
                                                        }, Math.random() * 3000); // Random start time for shuffled effect
                                                    }
                                                }, 0);
                                            }}
                                        >
                                            {item.images.map((img, i) => (
                                                <SwiperSlide key={`portfolio-img-${key}-${i}`}>
                                                    <img
                                                        src={img}
                                                        loading="lazy"
                                                        alt={`${item.title} ${i + 1}`}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                                        onClick={() => openLightbox(img)}
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            {/* portfolio grid end */}

            {/* Lightbox Modal via Portal */}
            {mounted && lightboxOpen && createPortal(
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 999999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '40px',
                        boxSizing: 'border-box',
                        cursor: 'zoom-out'
                    }}
                    onClick={closeLightbox}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            src={selectedImage}
                            alt="Full size"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                                boxShadow: '0 0 30px rgba(0,0,0,0.8)'
                            }}
                        />
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                background: 'rgba(0,0,0,0.5)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px solid #fff',
                                color: '#fff',
                                fontSize: '24px',
                                lineHeight: '1',
                                cursor: 'pointer',
                                padding: 0,
                                zIndex: 100000
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default PortfolioSection;

