import Data from "@data/sections/portfolio.json";
import { useState, useEffect } from "react";
import Modal from "@components/common/Modal";
import { useMediaQuery } from "@common/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import LazyLoadComponent from "../common/LazyLoadComponent";

import SkeletonLoader from "../common/SkeletonLoader";

const PortfolioSlider = dynamic(() => import("../sliders/PortfolioSlider"), {
    ssr: false,
    loading: () => <SkeletonLoader height="600px" />,
});

const PortfolioSection = () => {
    const isDesktop = useMediaQuery("(min-width: 992px)");

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const openLightbox = (imgSrc) => {
        const fullImgSrc = imgSrc.replace('/thumb/', '/full/');
        setSelectedImage(fullImgSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <section id="portfolio">
                <div className="mil-section-title mil-up">
                    <div className="mil-divider"></div>
                    <h2>{Data.title}</h2>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description">{Data.description}</p>

                {/* portfolio grid */}
                <div className="mil-p-90-30" style={{ paddingTop: '0' }}>
                    <div className="row g-0 align-items-center">
                        {Data.items.map((item, key) => {
                            let borderRadius = '0';
                            // Calculate effective index for desktop (ignoring mobileOnly items)
                            // This is a simplified approach assuming mobileOnly items are at the end.
                            // If mobileOnly items are interspersed, this logic would need to be more complex.

                            if (isDesktop) {
                                // Desktop: 4 columns
                                // If item is mobileOnly, it will be hidden, so borderRadius doesn't matter much visually,
                                // but we need to ensure the visible items get the correct radius.

                                // We need to know the total VISIBLE items to calculate the last row correctly.
                                const visibleItems = Data.items.filter(i => !i.mobileOnly);
                                const totalVisible = visibleItems.length;

                                // Find the index of this item in the visible list
                                const visibleIndex = visibleItems.indexOf(item);

                                if (visibleIndex !== -1) {
                                    if (visibleIndex === 0) borderRadius = '20px 0 0 0';
                                    else if (visibleIndex === 3) borderRadius = '0 20px 0 0';
                                    else if (visibleIndex === totalVisible - 4) borderRadius = '0 0 0 20px';
                                    else if (visibleIndex === totalVisible - 1) borderRadius = '0 0 20px 0';
                                }
                            } else {
                                // Mobile/Tablet: 2 columns
                                // Use original key and total
                                const total = Data.items.length;
                                if (key === 0) borderRadius = '20px 0 0 0';
                                else if (key === 1) borderRadius = '0 20px 0 0';
                                else if (key === total - 2) borderRadius = '0 0 0 20px';
                                else if (key === total - 1) borderRadius = '0 0 20px 0';
                            }

                            return (
                                <div key={`portfolio-item-${key}`} className={`col-6 col-lg-3 ${item.mobileOnly ? 'd-lg-none' : ''}`} style={{ padding: 0 }}>
                                    <div className="mil-icon-box mil-center">
                                        <div className="mil-service-slider" style={{
                                            width: '100%',
                                            borderRadius: borderRadius,
                                            overflow: 'hidden'
                                        }}>
                                            <LazyLoadComponent>
                                                <PortfolioSlider
                                                    items={item.images}
                                                    title={item.title}
                                                    onItemClick={openLightbox}
                                                />
                                            </LazyLoadComponent>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <Modal
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                variant="image"
                mounted={mounted}
            >
                <img
                    src={selectedImage}
                    alt="Full size"
                />
            </Modal>
        </>
    );
};

export default PortfolioSection;
