import Image from "next/legacy/image"
import BgImage from "../components/common/bgImage"
import DetailsImages from "../components/common/gellarys/detailsImages"
import Gellary from "../components/common/gellarys/gellary"
import Header from "../components/common/Header"
import HeroSection from "../components/common/Hero"
import RoomCard from "../components/room/roomCard"
import RoomrowCard from "../components/room/roomrowCard"

const About = () => {
  return (
    <div className=''>
        
    <HeroSection 
    Title={'About US'}
    subtitle={'A Memorable Experience.'}
    btnTitle={'Get Started'}
    imgcls={'bg-about'}
    /> 
     <div className='container py-5 block'>
        <h1 className='text-3xl font-bold text-center'>About Us</h1>
        <div className="h-64 w-60 relative">
        <Image
            layout="fill"
            src={'/imgs/room.jpg'}
            alt='room'
            priority

        />
        <h1 className='text-3xl font-bold text-center'>About Us</h1> 
        </div>
    </div>
   
  </div> 
  )
}

export default About