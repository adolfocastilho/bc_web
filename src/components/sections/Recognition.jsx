import Data from "@data/sections/recognition.json";
import { useState, useEffect } from "react";
import Modal from "@components/common/Modal";
import dynamic from "next/dynamic";

import SkeletonLoader from "../common/SkeletonLoader";

const RecognitionSliderDesktop = dynamic(
    () => import("../sliders/RecognitionSlider").then((mod) => mod.RecognitionSliderDesktop),
    {
        ssr: false,
        loading: () => <SkeletonLoader height="400px" />
    }
);

const RecognitionSliderMobile = dynamic(
    () => import("../sliders/RecognitionSlider").then((mod) => mod.RecognitionSliderMobile),
    {
        ssr: false,
        loading: () => <SkeletonLoader height="400px" />
    }
);

import { useMediaQuery } from "@/src/common/hooks/useMediaQuery";

const RecognitionSection = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [mounted, setMounted] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 992px)");

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

    if (!mounted) return null;

    return (
        <>
            <section id="depoimentos" style={{ paddingTop: '30px' }}>
                <div style={{ padding: 0 }}>
                    <div className="mil-section-title mil-up">
                        <div className="mil-divider"></div>
                        <h2>{Data.title}</h2>
                    </div>
                    <p className="mil-up mil-p-0-10 mil-section-description">{Data.description}</p>
                </div>

                {/* DESKTOP VERSION (3 Columns) - Only rendered on desktop */}
                {isDesktop && (
                    <div style={{ padding: 0 }}>
                        <div className="row justify-content-between align-items-center" style={{ margin: 0 }}>
                            <RecognitionSliderDesktop items={Data.items} handlePlay={handlePlay} />
                        </div>
                    </div>
                )}

                {/* MOBILE VERSION (Reviews Style) - Only rendered on mobile */}
                {!isDesktop && (
                    <div style={{ padding: 0 }}>
                        <div className="row justify-content-center mil-reviews-slider-frame" style={{ margin: 0 }}>
                            <div className="col-lg-8">
                                <RecognitionSliderMobile items={Data.items} handlePlay={handlePlay} />
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
                )}
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
                    loading="lazy"
                ></iframe>
            </Modal>
        </>
    );
};

export default RecognitionSection;