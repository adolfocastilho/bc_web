import Data from "@data/sections/services.json";
import dynamic from "next/dynamic";

const ServicesSlider = dynamic(() => import("../sliders/ServicesSlider"), {
    ssr: false,
});

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
                                    <ServicesSlider items={item.images} />
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