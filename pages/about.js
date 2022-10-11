import Header from "../components/common/Header"
import HeroSection from "../components/common/Hero"

const About = () => {
  return (
    <div className='h-screen'>
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
  </div> 
  )
}

export default About