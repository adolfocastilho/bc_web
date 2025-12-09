import Data from "@data/sections/services.json";
import dynamic from "next/dynamic";
import LazyLoadComponent from "../common/LazyLoadComponent";
import Link from "next/link";

import SkeletonLoader from "../common/SkeletonLoader";

const ServicesSlider = dynamic(() => import("../sliders/ServicesSlider"), {
    ssr: false,
    loading: () => <SkeletonLoader height="500px" />,
});

const ServicesSection = () => {
    return (
        <section id="servicos" style={{ paddingTop: '50px' }}>
            <div style={{ padding: 0 }}>
                <div className="mil-section-title mil-up">
                    <div className="mil-divider"></div>
                    <h2>{Data.title}</h2>
                </div>
                <p className="mil-up mil-p-0-10 mil-section-description">{Data.description}</p>
            </div>

            {/* services */}
            <div style={{ padding: 0 }}>
                <div className="row justify-content-between align-items-center">
                    {Data.items.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-lg-4">
                            <div className="mil-icon-box mil-center mil-mb-30">
                                {/* ... inside the map loop */}
                                <div className="mil-service-slider mil-mb-30" style={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: 'solid 1px rgba(0, 0, 0, 0.05)'
                                }}>
                                    <LazyLoadComponent>
                                        <ServicesSlider items={item.images} />
                                    </LazyLoadComponent>
                                </div>
                                <h3 className="mil-up mil-mb-30">
                                    <span style={{ color: 'inherit', textDecoration: 'none', cursor: 'default', whiteSpace: 'pre-line' }}>
                                        {item.title}
                                    </span>
                                </h3>
                                <p className="mil-up mil-mb-5">{item.text}</p>
                                {item.link && item.link !== "/services/service-1" && item.link !== "/services/service-2" && item.link !== "/services/service-3" && item.link !== "/services/service-4" && item.link !== "/services/service-5" && item.link !== "/services/service-6" ? (
                                    <Link href={item.link} className="mil-up mil-mb-30 mil-link" style={{ display: "block", fontWeight: "bold" }}>
                                        {item.linkText || "Saiba mais..."}
                                    </Link>
                                ) : (
                                    <span className="mil-up mil-mb-30" style={{ display: "block", fontWeight: "bold", color: "inherit", cursor: 'default' }}>{item.linkText || "Saiba mais..."}</span>
                                )}
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