import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';
import './styles/slider.css'
import amazonIcon from './assets/Amazon.svg'
import BnN from './assets/B&N.svg'
import dangdang from './assets/DangDang.svg'
import flipkart from './assets/Flipkart.svg'
import gBook from './assets/GBooks.svg'
import iBook from './assets/iBooks.svg'
import kobo from './assets/Kobo.svg'
import pencil from './assets/Pencil.svg'
import scribd from './assets/Scribd.svg'
import storytel from './assets/Storytel.svg'

const Slider = () => {
  return (
    <>
    
      <Swiper
        className='swiper-class'
        
        modules={[Autoplay]}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        slidesPerView={6}
      >
        <SwiperSlide><img className='slider-icons' src={amazonIcon} alt="amazonIcon" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={BnN} alt="B&N" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={dangdang} alt="dangdang" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={flipkart} alt="flipkart" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={gBook} alt="gBook" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={iBook} alt="iBook" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={kobo} alt="kobo" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={pencil} alt="pencil" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={scribd} alt="scribd" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={storytel} alt="storytel" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={amazonIcon} alt="amazonIcon" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={BnN} alt="B&N" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={dangdang} alt="dangdang" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={flipkart} alt="flipkart" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={gBook} alt="gBook" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={iBook} alt="iBook" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={kobo} alt="kobo" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={pencil} alt="pencil" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={scribd} alt="scribd" /></SwiperSlide>
        <SwiperSlide><img className='slider-icons' src={storytel} alt="storytel" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;