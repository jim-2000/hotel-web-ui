import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

//
const OurGellary = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}       
        navigation={true}
        modules={[ Navigation]}
        className="h-[150px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]"
      >
         {
          [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
            <SwiperSlide className="h-[300px] md:h-96 bg-slate-600" key={index}>
              <Image

               layout="fill"
              src="/imgs/room.jpg"
              className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))
        }
         
       
        
      </Swiper>
    </>
  )
}

export default OurGellary