import Data from "@data/sections/recognition.json";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "@components/common/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/common/sliderProps";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const RecognitionSection = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handlePlay = (videoId) => {
        setActiveVideo(videoId);
    };

    const handleClose = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <section id="recognition">
                <div className="mil-section-title mil-up">
                    <div className="mil-divider"></div>
                    <h3>{Data.title}</h3>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description">{Data.description}</p>

                {/* DESKTOP VERSION (3 Columns) - Hidden on mobile */}
                <div className="mil-p-90-30 d-none d-lg-block" style={{ paddingTop: '0' }}>
                    <div className="row justify-content-between align-items-center">
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
                            {Data.items.map((item, key) => (
                                <SwiperSlide key={`recognition-desktop-${key}`}>
                                    <div className="mil-icon-box mil-center mil-mb-60">
                                        <div className="mil-video-thumbnail" onClick={() => handlePlay(item.videoId)}>
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
                                        <h5 className="mil-up mil-mb-15">{item.title} <span style={{ marginLeft: '8px', fontSize: '16px', opacity: 1 }}>{item.flag}</span></h5>
                                        <p className="mil-up mil-mb-15" style={{ fontSize: '14px', fontWeight: 500 }}>
                                            <span className="text-muted">{item.location}</span>
                                        </p>
                                        {/* <p className="mil-up mil-mb-30">{item.text}</p> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>



                {/* MOBILE VERSION (Reviews Style) - Hidden on desktop */}
                <div className="mil-p-90-90 d-lg-none" style={{ paddingTop: '0' }}>
                    <div className="row justify-content-center mil-reviews-slider-frame">
                        <div className="col-lg-8">
                            <Swiper
                                {...sliderProps.milReviewsSlider}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                className="swiper-container mil-reviews-slider mil-mb-30"
                            >
                                {Data.items.map((item, key) => (
                                    <SwiperSlide className="swiper-slide" key={`recognition-mobile-${key}`}>
                                        <div className="mil-review mil-center" data-swiper-parallax-opacity="0" data-swiper-parallax="-90" data-swiper-parallax-scale=".8">
                                            <div className="mil-review-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                {/* Video Thumbnail */}
                                                <div
                                                    className="mil-video-thumbnail mil-up mil-mb-30"
                                                    style={{ maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                                    onClick={() => handlePlay(item.videoId)}
                                                >
                                                    <img
                                                        src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                                        alt={item.title}
                                                    />
                                                    <div className="mil-play-button mil-play-button-large">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="mil-name">
                                                    <h4 className="mil-up mil-mb-5">{item.title} <span style={{ marginLeft: '8px', fontSize: '18px', opacity: 1 }}>{item.flag}</span></h4>
                                                    <p className="mil-upper mil-up" style={{ fontSize: '14px' }}>
                                                        <span style={{ opacity: 0.7 }}>{item.location}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <p className="mil-up" style={{ maxWidth: '600px', margin: '0 auto' }}>{item.text}</p> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="mil-slider-nav mil-up">
                            <div className="mil-reviews-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            <div className="mil-reviews-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div className="swiper-reviews-pagination mil-up" />

                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <Modal
                isOpen={!!activeVideo}
                onClose={handleClose}
                variant="video"
                mounted={mounted}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
};

export default RecognitionSection;