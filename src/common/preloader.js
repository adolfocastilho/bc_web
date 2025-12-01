import { gsap } from "gsap";

export const preloaderAnimation = () => {
    const preloaderContent = document.querySelector(".mil-preloader-content");
    if (!preloaderContent) return;

    var timeline = gsap.timeline();

    // Entry animation removed to prevent FOUC - preloader is now visible by default via inline styles
    timeline.set(".mil-preloader-content", {
        opacity: 1,
        scale: 1,
        y: 0
    });

    timeline.to(".mil-preloader-content", {
        ease: "sine",
        y: '-200',
        duration: 0.4,
        scale: .6,
        opacity: 0,
        delay: '1.2',
    });

    timeline.to(".mil-preloader-frame", {
        ease: "sine",
        duration: 0.4,
        height: 0,
        onComplete: function () {
            document.querySelector('html').classList.remove('is-animating');
        }
    });
}