import { useEffect } from "react";
// import { scrollAnimation } from "../common/scrollAnims";
// import { preloaderAnimation } from "../common/preloader";
// import { countersAnimation } from "../common/counters";
// import { parallaxAnimation } from "../common/parallax";
// import { anchorSscroll } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Preloader from "./preloader/Index";
import LeftPanel from "./left-bar/Index";
import RightPanel from "./right-bar/Index";
import BackToTop from "./back-to-top/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  fullWidth,
  rightPanelBackground,
  rightPanelImg,
  fullWidth100,
  extraClass,
}) => {
  let bodyClass = false;
  let containerClass = false;

  if (fullWidth && fullWidth100) {
    bodyClass = ['mil-fw-page', 'mil-100-page'];
    containerClass = 'mil-container-100';
  } else if (fullWidth) {
    bodyClass = 'mil-fw-page';
    containerClass = 'mil-container-fw';
  } else {
    bodyClass = false;
  }

  useEffect(() => {
    // Defer heavy animations until browser is idle to reduce TBT
    const loadHeavyScripts = async () => {
      const { preloaderAnimation } = await import("../common/preloader");
      // preloaderAnimation();

      const { scrollAnimation } = await import("../common/scrollAnims");
      scrollAnimation();

      const { countersAnimation } = await import("../common/counters");
      countersAnimation();

      const { parallaxAnimation } = await import("../common/parallax");
      parallaxAnimation();

      const { anchorSscroll } = await import("../common/utilits");
      anchorSscroll();
    };

    // Use requestIdleCallback to defer loading until browser is idle
    // This significantly reduces Total Blocking Time (TBT)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => loadHeavyScripts(), { timeout: 2000 });
    } else {
      // Fallback for Safari: use setTimeout with small delay
      setTimeout(loadHeavyScripts, 100);
    }


    if (document != undefined && bodyClass) {
      const body = document.querySelector('body');
      body.classList.add(...bodyClass);
      // Failsafe to ensure body is visible if preloader CSS hid it
      body.style.display = 'block';
      body.style.opacity = '1';
      body.style.visibility = 'visible';
    } else {
      const body = document.querySelector('body');
      body.classList.remove('mil-fw-page');
      body.classList.remove('mil-100-page');
      // Failsafe to ensure body is visible if preloader CSS hid it
      body.style.display = 'block';
      body.style.opacity = '1';
      body.style.visibility = 'visible';
    }
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      {/* <Preloader /> */}

      <div className="mil-frame">

        {!noHeader && (
          <Header
            layout={header}
            extraclassName={extraClass}
          />
        )}

        <LeftPanel />

        <BackToTop />
      </div>

      <main className="mil-content">
        <div className="mil-scroll-wrapper transition-fade" id="swupMain">
          <div className={containerClass ? containerClass : "mil-container"}>
            {children}

            {!noFooter && <Footer layout={footer} />}
          </div>
        </div>

        {!fullWidth &&
          <RightPanel background={rightPanelBackground} img={rightPanelImg} />
        }

      </main>
    </div>
  );
};
export default Layouts;
