import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import ExportedImage from "@components/common/ExportedImage";

const ServicesSlider = ({ items }) => {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={false}
            effect={"fade"}
            style={{ width: '100%', aspectRatio: '1/1' }}
            onSwiper={(swiper) => {
                const randomDelay = Math.floor(Math.random() * 2500);
                if (!swiper.params.autoplay) {
                    swiper.params.autoplay = {};
                }
                Object.assign(swiper.params.autoplay, {
                    delay: 2000,
                    disableOnInteraction: false,
                });
                setTimeout(() => {
                    if (swiper.autoplay) {
                        swiper.autoplay.start();
                    }
                }, randomDelay);
            }}
        >
            {items.map((img, i) => (
                <SwiperSlide key={`service-img-${i}`}>
                    <div style={{ display: 'block', width: '100%', height: '100%', cursor: 'default' }}>
                        {img.endsWith('.mp4') ? (
                            <video
                                src={img}
                                poster="/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo1.webp"
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
