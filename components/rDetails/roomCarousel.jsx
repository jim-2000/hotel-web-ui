import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'

const RoomCarousel = () => {
    const imgArry=[
        "/imgs/room/room1.jpg",
        "/imgs/room/room2.jpg",
        "/imgs/room/room3.jpg",
        "/imgs/room/room4.jpg",
        "/imgs/room/room5.jpg",
        "/imgs/room/room6.jpg"
    ]
  return (
    < >
    <Carousel
                  showThumbs={false}
                  className='w-full h-full'
                  autoPlay={true}
                  interval={3000}
                  infiniteLoop={true}
                  showStatus={false}
                  >
                     {
                            imgArry.map((item,index)=>(
                                <div className='w-full h-96 md:h-[480px] relative'>
                                 <Image 
                                layout='fill'
                                src={item}
                                />
                                <p>HEllow</p>
                               </div>
                            ))
                     }
                  </Carousel> 
    </>
  )
}

export default RoomCarousel