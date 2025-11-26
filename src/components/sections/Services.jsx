import Data from "@data/sections/services.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const ServicesSection = () => {
    return (
        <section id="services">
            <div className="mil-section-title mil-up">
                <div className="mil-divider"></div>
                <h3>{Data.title}</h3>
            </div>
            <p className="mil-up mil-p-0-10 mil-section-description">{Data.description}</p>

            {/* services */}
            <div className="mil-p-90-30" style={{ paddingTop: '0' }}>
                <div className="row justify-content-between align-items-center">
                    {Data.items.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-lg-4">
                            <div className="mil-icon-box mil-center mil-mb-60">
                                <div className="mil-service-slider mil-mb-30" style={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden'
                                }}>
                                    <Swiper
                                        modules={[Autoplay, EffectFade]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        effect={"fade"}
                                        style={{ width: '100%', aspectRatio: '4/3' }} // Enforce a rectangular aspect ratio
                                        onSwiper={(swiper) => {
                                            // Use setTimeout(0) to ensure we stop autoplay AFTER initialization
                                            setTimeout(() => {
                                                if (swiper.autoplay) {
                                                    swiper.autoplay.stop();
                                                    setTimeout(() => {
                                                        if (swiper.autoplay) {
                                                            swiper.autoplay.start();
                                                        }
                                                    }, key * 1000);
                                                }
                                            }, 0);
                                        }}
                                    >
                                        {item.images.map((img, i) => (
                                            <SwiperSlide key={`service-img-${key}-${i}`}>
                                                <Link href={item.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                                                    <img src={img} alt={`${item.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <h5 className="mil-up mil-mb-30">
                                    <Link href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        {item.title}
                                    </Link>
                                </h5>
                                <p className="mil-up mil-mb-30">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* services end */}
        </section>
    );
};

export default ServicesSection;