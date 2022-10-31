import React, { useState } from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
import RoomCard from '../components/room/roomCard'
import RoomrowCard from '../components/room/roomrowCard'
import data from '../data.json'
const Room = () => {
  const [roomData, setroomData] = useState(data.roomData)
  return (
    <div>
        <HeroSection 
        Title={"OUR ROOM & RATE"}        
        imgcls={'bg-room'}  

        />
        <div className='container py-10 grid grid-cols-1 gap-2 md:grid-cols-1 '>
            {
                roomData.map((item,index)=>(
                  
                  <RoomrowCard key={index} roomData={item} />
                 
                ))
            }
        </div>
    </div>
  )
}

export default Room