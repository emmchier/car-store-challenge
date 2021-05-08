import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import CarImg1 from './../../assets/hardcode-info/car-img-1.jpg';
import CarImg2 from './../../assets/hardcode-info/car-img-2.jpg';
import CarImg3 from './../../assets/hardcode-info/car-img-3.jpg';
import CarImg4 from './../../assets/hardcode-info/car-img-4.jpg';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);

export const DetailSlider = ({ gallery }) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const mockImageList = [
    CarImg1, CarImg2, CarImg3, CarImg4
  ];

    return (
      <>
      <Swiper 
        style={{
          '--swiper-navigation-color': 
          '#423A3D'
        }} 
        loop={false} 
        spaceBetween={10} 
        navigation={true} 
        thumbs={{ swiper: thumbsSwiper }} 
        className="mySwiper2">
          <SwiperSlide>
            <img src={ CarImg1 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg2 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg3 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg4 } />
          </SwiperSlide>    
        </Swiper>
        <Swiper 
          onSwiper={setThumbsSwiper} 
          loop={false} 
          spaceBetween={10} 
          slidesPerView={4} 
          freeMode={true} 
          watchSlidesVisibility={true} 
          watchSlidesProgress={true} 
          className="mySwiper">
            <SwiperSlide>
            <img src={ CarImg1 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg2 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg3 } />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ CarImg4 } />
          </SwiperSlide>
        </Swiper>
        </>
    )
}
