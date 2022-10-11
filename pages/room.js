import React from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
import RoomCard from '../components/room/roomCard'

const Room = () => {
  return (
    <div>
        <Header />
        <HeroSection 
        Title={"OUR ROOM & RATE"}        
        imgcls={'bg-room'}        
        />
        <div className='container py-10 grid grid-cols-1 gap-10 md:grid-cols-2 '>
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
        </div>
        <FotterPart/>
    </div>
  )
}

export default Room