import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { useEffect, useState, useMemo } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import ExportedImage from "@components/common/ExportedImage";

const ServicesSlider = ({ items }) => {
    // MOBILE OPTIMIZATION: Use initial value, skip resize listener on mobile
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < 768;
    });

    useEffect(() => {
        // Only add resize listener on desktop (mobile doesn't need it)
        if (window.innerWidth >= 768) {
            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <Swiper
            key={isMobile ? 'mobile' : 'desktop'}
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            effect={isMobile ? "slide" : "fade"}
            style={{ width: '100%', aspectRatio: '1/1' }}
            onSwiper={(swiper) => {
                // MOBILE OPTIMIZATION: Skip random delay on mobile to reduce callbacks
                if (isMobile) return;

                if (swiper.autoplay) {
                    swiper.autoplay.stop();
                    const randomDelay = Math.floor(Math.random() * 1875);
                    setTimeout(() => {
                        if (swiper && swiper.autoplay) {
                            swiper.autoplay.start();
                        }
                    }, randomDelay);
                }
            }}
        >
            {items.map((img, i) => (
                <SwiperSlide key={`service-img-${i}`}>
                    <div style={{ display: 'block', width: '100%', height: '100%', cursor: 'default' }}>
                        {img.endsWith('.mp4') ? (
                            <video
                                src={img}
                                preload="none"
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-hidden="true"
                                role="presentation"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <ExportedImage
                                src={img}
                                loading="lazy"
                                alt={`Service Image ${i + 1}`}
                                width={800}
                                height={800}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServicesSlider;
