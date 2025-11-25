import Data from "@data/sections/recognition.json";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/common/sliderProps";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const RecognitionSection = () => {
    // State to track which video is active in the modal
    const [activeVideo, setActiveVideo] = useState(null);

    const handlePlay = (videoId) => {
        setActiveVideo(videoId);
    };

    const handleClose = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <div className="mil-section-title mil-up">
                <div className="mil-divider"></div>
                <h3>{Data.title}</h3>
            </div>

            {/* DESKTOP VERSION (3 Columns) - Hidden on mobile */}
            <section className="mil-p-90-30 d-none d-lg-block">
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
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="mil-services-slider"
                    >
                        {Data.items.map((item, key) => (
                            <SwiperSlide key={`recognition-desktop-${key}`}>
                                <div className="mil-icon-box mil-center mil-mb-60">
                                    <div className="mil-service-slider mil-mb-30" style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        paddingBottom: '56.25%', // 16:9 aspect ratio
                                        height: 0,
                                        cursor: 'pointer'
                                    }} onClick={() => handlePlay(item.videoId)}>
                                        <img
                                            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                            alt={item.title}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 2,
                                            transition: 'transform 0.3s ease'
                                        }} className="mil-play-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <h5 className="mil-up mil-mb-15">{item.title}</h5>
                                    <p className="mil-up mil-mb-15 text-muted" style={{ fontSize: '14px', fontWeight: 500 }}>
                                        {item.location} <span style={{ marginLeft: '8px', fontSize: '16px' }}>{item.flag}</span>
                                    </p>
                                    <p className="mil-up mil-mb-30">{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>



            {/* MOBILE VERSION (Reviews Style) - Hidden on desktop */}
            <section className="mil-p-90-90 d-lg-none">
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
                                            <div className="mil-video-container mil-up mil-mb-30" style={{
                                                width: '100%',
                                                maxWidth: '600px',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                paddingBottom: '56.25%', // 16:9 aspect ratio based on width
                                                height: 0,
                                                cursor: 'pointer',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                            }} onClick={() => handlePlay(item.videoId)}>
                                                <img
                                                    src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                                    alt={item.title}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '70px',
                                                    height: '70px',
                                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    zIndex: 2,
                                                    transition: 'transform 0.3s ease'
                                                }} className="mil-play-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="mil-name">
                                                <h4 className="mil-up mil-mb-5">{item.title}</h4>
                                                <p className="mil-upper mil-up" style={{ fontSize: '14px', opacity: 0.7 }}>
                                                    {item.location} <span style={{ marginLeft: '8px', fontSize: '18px' }}>{item.flag}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mil-up" style={{ maxWidth: '600px', margin: '0 auto' }}>{item.text}</p>
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
            </section>
            {/* Video Modal */}
            {activeVideo && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }} onClick={handleClose}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '900px',
                        aspectRatio: '16/9',
                        backgroundColor: '#000',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }} onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleClose} style={{
                            position: 'absolute',
                            top: '-40px',
                            right: '0',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '30px',
                            cursor: 'pointer',
                            padding: '5px'
                        }}>&times;</button>
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="YouTube video player"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 0
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecognitionSection;