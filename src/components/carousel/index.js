'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'

import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import ProductCard from '../product/product_card';


export const Carousel = ({ children }) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    
   autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper"
  >

   {
       
        <>
          {children.map((child, index) => (
            <SwiperSlide key={index} >
               {child}
             </SwiperSlide>
          ))
         
          }

       </>
        
   
    }
  </Swiper>
  )
}




export default Carousel