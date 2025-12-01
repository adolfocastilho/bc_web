import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { sliderProps } from "@/src/common/sliderProps";

export const RecognitionSliderDesktop = ({ items, handlePlay }) => {
    return (
        <Swiper
            {...sliderProps.milReviewsSlider}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            className="mil-services-slider"
        >
            {items.map((item, key) => (
                <SwiperSlide key={`recognition-desktop-${key}`}>
                    <div className="mil-icon-box mil-center mil-mb-60">
                        <div className="mil-video-thumbnail" style={{ marginBottom: '30px' }} onClick={() => handlePlay(item.videoId)}>
                            <img
                                src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                alt={item.title}
                            />
                            <div className="mil-play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </div>
                        <h5 className="mil-up mil-mb-5">{item.title} <span style={{ marginLeft: '8px', fontSize: '16px', opacity: 1 }}>{item.flag}</span></h5>
                        <p className="mil-up mil-mb-15" style={{ fontSize: '14px', fontWeight: 500 }}>
                            <span className="text-muted">{item.location}</span>
                        </p>
                        <p className="mil-up mil-mb-30" style={{ marginTop: '15px', fontSize: '14px' }}>{item.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export const RecognitionSliderMobile = ({ items, handlePlay }) => {
    return (
        <Swiper
            {...sliderProps.milReviewsSlider}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className="swiper-container mil-reviews-slider mil-mb-30"
        >
            {items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`recognition-mobile-${key}`}>
                    <div className="mil-review mil-center" data-swiper-parallax-opacity="0" data-swiper-parallax="-90" data-swiper-parallax-scale=".8">
                        <div className="mil-review-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Video Thumbnail */}
                            <div
                                className="mil-video-thumbnail mil-up"
                                style={{ maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '60px' }}
                                onClick={() => handlePlay(item.videoId)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className="mil-play-button mil-play-button-large">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </div>
                            </div>

                            <div className="mil-name">
                                <h4 className="mil-up" style={{ marginBottom: 0 }}>{item.title} <span style={{ marginLeft: '8px', fontSize: '18px', opacity: 1 }}>{item.flag}</span></h4>
                                <p className="mil-upper mil-up" style={{ fontSize: '14px' }}>
                                    <span style={{ opacity: 0.7 }}>{item.location}</span>
                                </p>
                            </div>
                        </div>
                        <p className="mil-up" style={{ maxWidth: '600px', margin: '20px auto 0', fontSize: '14px' }}>{item.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
