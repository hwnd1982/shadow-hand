import Swiper from 'swiper';
import { Navigation, Controller} from 'swiper/modules';

export const reviewsSwiper = () => {
  const swipers = [...document.querySelectorAll('.reviews__swiper')].map(swiper => new Swiper(swiper, {
    modules: [Navigation, Controller],
    controller: true,
    navigation: {
      nextEl: '.reviews__swiper-right',
      prevEl: '.reviews__swiper-left'
    }
  }));

  swipers.forEach(swiper => swiper.controller.control = swipers.filter(item => swiper !== item));
}
