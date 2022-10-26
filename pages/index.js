import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
 
import GridTwoLayout from '../components/common/gridTwoLayout';
import AboutHotel from '../components/home/aboutHotel';
 
// import Banner from '../components/common/banner';
 
import dynamic from 'next/dynamic';
//
// import OurGellary from '../components/home/ourGellary';
// import Testimonial from '../components/common/testimonial';
// import FotterPart from '../components/common/footer';
// import Subscription from '../components/home/subscription';
// import GetInTouch from '../components/home/getInTouch';
import CountupClient from '../components/home/countup';
import ReservForm from '../components/common/reservForm';
import Image from 'next/image';

// lazy load the map component
const Banner = dynamic(() => import('../components/common/banner'), {});
const OurGellary = dynamic(() => import('../components/home/ourGellary'), {});
const Testimonial = dynamic(() => import('../components/common/testimonial'), {});
const GetInTouch = dynamic(() => import('../components/home/getInTouch'), {});
const FotterPart = dynamic(() => import('../components/common/footer'), {});
const Subscription = dynamic(() => import('../components/home/subscription'), {});

export default function Home() {
 
  return (
  <div className='h-screen'>
    
      {/* Header alerts for 5 seconds */}
    {/* <div className={`  bg-fuchsia-500 ${isopen ? 'flex justify-between items-center' : 'hidden'} px-4`}>
             <p className='text-center text-base text-text'>In publishing and graphic design, Lorem ipsum is a placeholder text </p>
            <IoIosClose 
                style={{fontSize: '3rem', }}
                className='text-white cursor-pointer hover:text-text'
                onClick={ ()=>setisopen(false)}
            />
    </div> */}
    <Header />
    <HeroSection 
    Title={'Welcome to the new era of digital Five Star Hotel'}
    subtitle={'A Memorable Experience.'}
    btnTitle={"Book Exclusive Villa's"}
    imgcls={'bg-hero'}    
    otherComponent={
      <div className='container pt-3'>
      <ReservForm 
      css={'border-2 border-white text-white'}
      />
    </div>
    }
    />
    {/* <div className='container pt-3'>
      <ReservForm />
    </div> */}
    <div
    className='container py-5 md:py-20'
    >
      <GridTwoLayout 
      firstLayout={<AboutHotel />}
      SecondLayout={
        <div className={'h-64 md:h-96 w-full relative'}>
           <Image
            priority
            layout='fill' 
            src={'/imgs/room.jpg'}
            alt='room'
           />
        </div>
      } 
      />
    </div>
    
    
    <div
    className='bg-white container'
    >
      <Banner 
      Title={"Events & Weddings"}
      subtitle={`
      Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
      `}
      imgcls={'bg-hero'}
      />
    </div>

    <div className='container py-5'>
        <h1 className='text-center section-title'><span>Our</span>Galleries</h1>
        <OurGellary />
    </div>
    <div className='container py-5'>
       {/* <h1 className='text-center section-title'>CLIENT<span>STATICS</span></h1> */}
       <CountupClient />
    </div>
    <div className='container py-5'>
    <h1 className='text-center section-title'>CLIENT <span>Spech</span></h1>
        <Testimonial />
    </div>
    <div>
      <GetInTouch />
    </div>
    <div className=''>
      <Subscription />
    </div>
    <div className='w-full bg-text'>
      <FotterPart />
    </div>
  </div> 
)
}

// imgage path: public\images\hero-img.png
