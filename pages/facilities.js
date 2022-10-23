import React from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import HeroSection from '../components/common/Hero'
import FacilitiesCard from '../components/facilities/facilitiesCard'
import AboutHotel from '../components/home/aboutHotel'

const Facilities = () => {
  return (
    <div>
        <Header />
        <HeroSection 
        Title={"Facilities"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        imgcls={'bg-facilities'}
        />
        <div className='container py-3 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-x-11'>
 
               {
                    [1,2,3,4,5,6,7,8,9,10].map((item, index) => { 
                      return (
                        <FacilitiesCard />
                      )
                    })
               }          
        </div>
        <div className='container py-3'>
            <div className='flex'>
                <div className='w-1/2'>
                <h5 className='font-bold text-main text-xl'>We also Offer</h5>
                </div>
                <div className='w-1/2'>
                    <p className='text-text text-sm font-bold text-right hover:underline hover:cursor-pointer'>View all</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-y-0 gap-y-2 mt-2'>
                <p className='text-text text-sm font-bold'>Library service</p>
                <p className='text-text text-sm font-bold'>Free WI-FI</p>
                <p className='text-text text-sm font-bold'>Adequate safety/ security</p>
                <p className='text-text text-sm font-bold'>Laundry servic</p>
                <p className='text-text text-sm font-bold'>Delicious meals</p>
                <p className='text-text text-sm font-bold'>Air cooling in all rooms</p>
                <p className='text-text text-sm font-bold'>Room services</p>
                <p className='text-text text-sm font-bold'>Ticket books</p>
                <p className='text-text text-sm font-bold'>Shuffle/ Private transfers</p>
                <p className='text-text text-sm font-bold'>Neccessities for babies and chidren</p>
            </div>
        </div>
        <div>
          <div class="divider">
            <span></span>
            <span>Request For new Facilities</span>
            <span></span>
          </div>
        </div>
 
        <div className='bg-lmain py-3'>
            <div className='container flex flex-col md:flex-row justify-between  items-center'>
                <div className='py-3 md:py-0 md:w-1/2 w-full '>                   
                      <AboutHotel />
                </div>
                
                  <form className=' md:w-96 w-full  bg-text rounded shadow-md'>
                    <div className='flex flex-col drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] p-3'>                                        
                        <input type="email" name="email" id="email" class="bg-gray-50 text-black text-base rounded outline-none w-full p-2.5 my-1 " placeholder="johndoe@gmail.com" required />  
                        <textarea type="text" name="email" id="email" class="bg-gray-50 text-text text-sm rounded outline-none w-full p-2.5 my-2 " placeholder="can you add GYM service ?" required />                            
                        <button type="submit" class="btn btn-primary-circle">Request</button>
                    </div>
                  </form>
                
            </div>
        </div>

        <div>
          <FotterPart />
        </div>
    </div>
  )
}

export default Facilities