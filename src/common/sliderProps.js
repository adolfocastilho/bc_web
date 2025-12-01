import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  milReviewsSlider: {
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    allowTouchMove: true,
    grabCursor: true,
    navigation: {
      nextEl: '.mil-reviews-next',
      prevEl: '.mil-reviews-prev',
    },
    pagination: {
      el: '.swiper-reviews-pagination',
      clickable: true,
    },
  },
  milPortfolioCarousel: {
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    mousewheel: {
      enable: true
    },
    navigation: {
      nextEl: '.mil-portfolio-next',
      prevEl: '.mil-portfolio-prev',
    },
    pagination: {
      el: '.mil-portfolio-pagination',
      type: 'fraction',
    },
    breakpoints: {
      1200: {
        spaceBetween: 90,
      },
    },
  }
};
