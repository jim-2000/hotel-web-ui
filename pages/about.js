import DetailsImages from "../components/common/gellarys/detailsImages"
import Gellary from "../components/common/gellarys/gellary"
import Header from "../components/common/Header"
import HeroSection from "../components/common/Hero"
import RoomCard from "../components/room/roomCard"
import RoomrowCard from "../components/room/roomrowCard"

const About = () => {
  return (
    <div className='h-screen '>
    {/*
      Header alerts for 5 seconds
    <div className='h-6 bg-main'>
      <p className='text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div> */}
    <Header />
    <HeroSection 
    Title={'About US'}
    subtitle={'A Memorable Experience.'}
    btnTitle={'Get Started'}
    imgcls={'bg-about'}
    />
     
    <div className="container py-4 flex flex-col-reverse md:grid md:grid-cols-[3fr,1fr] gap-3">
    {/* first column    */}
   {/* <div className="w-full ">
   {
      [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => {
        return (
          <RoomrowCard key={index} />
        )
      })

    } 
   </div> */}
    {/* second column  */}
    <div className="w-full ">
    <RoomCard />  
    </div>
     
    </div>
    <div className="container">
      <Gellary />
    </div>
    <div className="container">
      <h1 className='text-center section-title'><span>Our</span>Gallery</h1>
      <DetailsImages />
    </div>
  </div> 
  )
}

export default About