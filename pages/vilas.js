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
        <HeroSection 
        Title={"Facilities"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        imgcls={'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
        />
      
        <div className='container py-3 md:py-5 '>
           <h1 className='text-center section-title'><span>Our</span>vilas</h1>
            
            {
              [1,2,3,4,5,6].map((item, index) => (
                <>
                  <SpecialOffer 
                  key={index}
                    Title={"10% off on all services"}
                    subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    // imgcls={item %2 !=0 ? 'bg-room': 'bg-offer'}
                    imgcls={'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                    css={'h-[20rem]  md:h-64 flex flex-col justify-center items-center my-3 rounded-md '}
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
      
    </div>
  )
}

export default Offers