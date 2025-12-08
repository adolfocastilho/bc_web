import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import ExportedImage from "@components/common/ExportedImage";

const PortfolioSlider = ({ items, title, onItemClick }) => {
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
                delay: 1125,
                disableOnInteraction: false,
            }}
            effect={isMobile ? "slide" : "fade"}
            style={{ width: '100%', aspectRatio: '1/1' }}
            onSwiper={(swiper) => {
                // MOBILE OPTIMIZATION: Skip random delay on mobile to reduce callbacks
                if (isMobile) return;

                if (swiper.autoplay) {
                    swiper.autoplay.stop();
                    const randomDelay = Math.floor(Math.random() * 2250);
                    setTimeout(() => {
                        if (swiper && swiper.autoplay) {
                            swiper.autoplay.start();
                        }
                    }, randomDelay);
                }
            }}
        >
            {items.map((img, i) => (
                <SwiperSlide key={`portfolio-img-${i}`}>
                    <ExportedImage
                        src={img}
                        loading="lazy"
                        alt={`${title} ${i + 1}`}
                        width={800}
                        height={800}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => onItemClick(img)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PortfolioSlider;
