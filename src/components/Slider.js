"use client"; 

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
    <Swiper
    autoplay={true}
    loop={true}
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
  >
  {
    images.map((image,idx)=>{
      return <SwiperSlide key={idx}>
      <img src={image}className="w-full h-96 object-cover object-center" alt="poster"/>
    </SwiperSlide>
    })
  }
    
  </Swiper>
  );
};

export default Slider;
