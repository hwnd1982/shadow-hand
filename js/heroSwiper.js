import Swiper from 'swiper';
import { Navigation, Parallax} from 'swiper/modules';

export const heroSwiper = () => {
  const swiperEl = document.querySelector('.hero__swiper');

  if (!swiperEl) return;

  new Swiper(swiperEl, {
    speed: 600,
    parallax: true,
    modules: [Navigation, Parallax],
    navigation: {
      nextEl: '.hero__swiper-right',
      prevEl: '.hero__swiper-left'
    }
  });
}
