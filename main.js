import 'normalize.css';
import 'swiper/css'
import './index.sass'
import { clickAnimation } from './js/clickAnimation';
import { faqHandler } from './js/faqHandler';
import { heroSwiper } from './js/heroSwiper';
import { reviewsSwiper } from './js/reviewsSwiper';

clickAnimation();
heroSwiper();
reviewsSwiper();
faqHandler();
