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
                                    overflow: 'hidden',
                                    border: 'solid 1px rgba(0, 0, 0, 0.05)'
                                }}>
                                    <Swiper
                                        modules={[Autoplay, EffectFade]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={false} // Disable default autoplay to handle it manually
                                        effect={"fade"}
                                        style={{ width: '100%', aspectRatio: '1/1' }} // Enforce a square aspect ratio
                                        onSwiper={(swiper) => {
                                            // Manually configure and start autoplay with a random delay
                                            const randomDelay = Math.floor(Math.random() * 2500);

                                            // Ensure autoplay params are set
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
                                        {item.images.map((img, i) => (
                                            <SwiperSlide key={`service-img-${key}-${i}`}>
                                                <div style={{ display: 'block', width: '100%', height: '100%', cursor: 'default' }}>
                                                    {img.endsWith('.mp4') ? (
                                                        <video
                                                            src={img}
                                                            poster="/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo1.webp" // Placeholder poster using an existing thumb
                                                            preload="none"
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                    ) : (
                                                        <img
                                                            src={img}
                                                            loading="lazy"
                                                            alt={`${item.title} ${i + 1}`}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <h5 className="mil-up mil-mb-30">
                                    <span style={{ color: 'inherit', textDecoration: 'none', cursor: 'default' }}>
                                        {item.title}
                                    </span>
                                </h5>
                                <p className="mil-up mil-mb-5">{item.text}</p>
                                <span className="mil-up mil-mb-30" style={{ display: "block", fontWeight: "bold", color: "inherit", cursor: 'default' }}>{item.linkText || "Saiba mais..."}</span>
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