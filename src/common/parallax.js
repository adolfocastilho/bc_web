import Parallax from "parallax-js"

export const parallaxAnimation = () => {
    // MOBILE OPTIMIZATION: Skip parallax on mobile (no #scene element anyway)
    if (window.innerWidth < 768) return;

    var scene = document.getElementById('scene');
    if (scene != undefined) {
        var parallaxInstance = new Parallax(scene, {
            limitY: 15,
        });
    }
}