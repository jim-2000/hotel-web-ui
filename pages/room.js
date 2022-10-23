import React from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
import RoomCard from '../components/room/roomCard'
import RoomrowCard from '../components/room/roomrowCard'

const Room = () => {
  return (
    <div>
        <Header />
        <HeroSection 
        Title={"OUR ROOM & RATE"}        
        imgcls={'bg-room'}  

        />
        <div className='container py-10 grid grid-cols-1 gap-2 md:grid-cols-1 '>
            {
                [1,2,3,4,5,6].map((item,index)=>(
                  <>
                  <RoomrowCard key={index} />
                  </>
                ))
            }
        </div>
        <FotterPart/>
    </div>
  )
}

export default Room