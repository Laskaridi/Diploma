import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {Autoplay, Keyboard, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import './home.css';

function Slider(props) {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/vite.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Slider;