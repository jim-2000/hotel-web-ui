import Head from "next/head"
import React from 'react'
import Banner from '../components/common/banner'
import FotterPart from '../components/common/footer'
import GridTwoLayout from '../components/common/gridTwoLayout'
import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
import OfferCard from '../components/offers/offerCard'
import SpecialOffer from '../components/offers/specialOffer'

const Offers = () => {
  return (
    <div className=''>
      <Head>
        <title>OFFER</title>
      </Head>
        <Header />
        <HeroSection 
        Title={"Facilities"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        imgcls={'bg-facilities'}
        />
      
        <div className='container py-3 md:py-5 '>
           <h1 className='text-center section-title'><span>Villa's</span>offer</h1>
            
            {
              [1,2,3,4,5,6].map((item, index) => (
                <>
                  <SpecialOffer 
                    Title={"10% off on all services"}
                    subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    imgcls={item %2 !=0 ? 'bg-room': 'bg-offer'}
                    css={'h-60 flex flex-col justify-center items-center my-3 rounded-md'}
                    anyComponent={
                      <>
                        <button className='btn btn-primary-outline uppercase transition duration-75 ease-in-out hover:text-white hover:tracking-[1px]'>Book Now</button>
                      </>              
                    }
                    isright={item %2 !=0 ? true: false}
         
            />
                </>
              ))
            }
        </div>
      
       <FotterPart />
    </div>
  )
}

export default Offers