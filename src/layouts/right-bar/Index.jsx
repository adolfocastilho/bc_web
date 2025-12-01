import ExportedImage from "@components/common/ExportedImage";

const rightPanelModule = ({ background, img }) => {
    return (
        <>
            <div className="mil-right-banner" id="scene">
                {/* scrollbar */}
                <div className="mil-progress-track">
                    <div className="mil-progress" />
                </div>
                {/* scrollbar end */}
                <div className="mil-banner-wrapper" data-depth="1">
                    <div id="swupBg" className="mil-banner-frame">
                        <ExportedImage src={background} alt="background" width={1920} height={1080} className={img ? "mil-banner-bg mil-blur" : "mil-banner-bg"} loading="lazy" />
                    </div>
                </div>
                <div className="mil-banner-wrapper" data-depth="0.2">
                    {img != undefined &&
                        <div id="swupPerson" className="mil-banner-frame">
                            <ExportedImage src={img} alt="person" width={800} height={800} className="mil-banner-person" loading="lazy" />
                        </div>
                    }
                </div>
                <div className="mil-flying-skills" data-depth="0.1">
                    {img != undefined &&
                        <div id="swupSkills" className="mil-skills-frame">
                            <div className="mil-item" style={{ "top": "30%", "left": "10%" }}>
                                <ExportedImage src="/img/logos/1.jpg" alt="logo" width={110} height={110} />
                            </div>
                            <div className="mil-item" style={{ "bottom": "15%", "left": "20%" }}>
                                <ExportedImage src="/img/logos/2.jpg" alt="logo" width={110} height={110} />
                            </div>
                            <div className="mil-item" style={{ "bottom": "45%", "right": "15%" }}>
                                <ExportedImage src="/img/logos/3.jpg" alt="logo" width={110} height={110} />
                            </div>

                            <div className="mil-el mil-addition-el-1">+</div>
                            <div className="mil-el mil-addition-el-2">+</div>
                            <div className="mil-el mil-addition-el-3" />
                            <div className="mil-el mil-addition-el-4" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
};
export default rightPanelModule;