import Data from "@data/sections/services.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const ServicesSection = () => {
    return (
        <>
            <div className="mil-section-title mil-up">
                <div className="mil-divider"></div>
                <h3>{Data.title}</h3>
            </div>

            {/* services */}
            <section className="mil-p-90-30">
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
                                                <img src={img} alt={`${item.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <h5 className="mil-up mil-mb-30">{item.title}</h5>
                                <p className="mil-up mil-mb-30">{item.text}</p>
                                <div className="mil-up">
                                    <Link href={item.link} className="mil-link mil-icon-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* services end */}
        </>
    );
};

export default ServicesSection;