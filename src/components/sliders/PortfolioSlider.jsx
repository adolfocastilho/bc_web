import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import ExportedImage from "@components/common/ExportedImage";

const PortfolioSlider = ({ items, title, onItemClick }) => {
    return (
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
            style={{ width: '100%', aspectRatio: '1/1' }}
            onSwiper={(swiper) => {
                setTimeout(() => {
                    if (swiper.autoplay) {
                        swiper.autoplay.stop();
                        setTimeout(() => {
                            if (swiper.autoplay) {
                                swiper.autoplay.start();
                            }
                        }, Math.random() * 3000);
                    }
                }, 0);
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
                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => onItemClick(img)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PortfolioSlider;
