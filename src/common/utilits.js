/**
 * Anchor scroll function - DISABLED
 * Native CSS scroll-behavior and scroll-margin-top are used instead
 */
export const anchorSscroll = () => {
  // Disabled to use native CSS scroll-behavior and scroll-margin-top
};

/**
 * Accordion toggle functionality
 * Handles click events on accordion menu items to expand/collapse panels
 */
export const accordion = () => {
  const acc = document.getElementsByClassName("mil-accordion-menu");

  for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      const panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};