import React from 'react'
import Header from '../components/common/Header'
import InputFiled from '../components/common/inputFiled';
 
import data from '../data.json'
import RoomText from '../components/rDetails/roomText';
import RoomCarousel from '../components/rDetails/roomCarousel';
 
//
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { IoIosCalendar } from 'react-icons/io';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import ScrollToTop from 'react-scroll-to-top';

// daynamic import for lady loading
const RoomCalender = dynamic(() => import('../components/rDetails/roomCalender'), { ssr: false });
const RoomSpecility = dynamic(() => import('../components/rDetails/roomSpecility'), { });
const Roomservices = dynamic(() => import('../components/rDetails/roomservices'), { ssr: false });
const RoomReviews = dynamic(() => import('../components/rDetails/roomReviews'), { ssr: false });
const SimilarRoom = dynamic(() => import('../components/rDetails/similarRoom'), { ssr: false });


 

const Roomdetails = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  return (
    <div className=''>
        <div className='container py-2 flex justify-between items-center'>
            <h6 className='text-text font-extrabold text-2xl '>Family Room</h6>
            <div className='flex flex-col justify-start items-center'>
                <h6 className='text-gray font-extrabold font-body text-2xl'>$200</h6>
                <h6 className='text-text font-semibold font-body'>per night</h6>
            </div>            
        </div>
        <div className='px-3  py-5 grid  md:grid-cols-[3fr,1fr] grid-cols-1 gap-16 md:gap-1 flex-wrap'>
            <div className='w-full -z-10 '>
                  {/* bookign image carousel  */}
                <div className='w-full'>
                 <RoomCarousel />
                </div>
                  {/* room specility   */}
                <div className='flex flex-wrap py-5  justify-between md:items-center  '>
                    <RoomSpecility />       
                </div>
                {/* bookign details   */}
                <div className='flex flex-col justify-start items-start flex-wrap space-y-2 container'>
                    <h6 className='text-xl font-semibold text-text'>Booking Details</h6>
                     <RoomText />
                </div>
                <div className='py-5 mb-5 '>
                    <h6 className='text-xl font-semibold text-text'>Room Availability</h6>
                    <div className='flex flex-col justify-start items-start flex-wrap space-y-2 py-2 h-96'>
                        <RoomCalender />                        
                    </div>
                </div>
              
                <div className='py-5  '>
                    <h6 className='text-xl font-semibold text-text pb-6'>Additional Services</h6>
                    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense '>
                       {
                       [1,2,3,4,5,6,7,8,9,10,11,12,13].map((item,index)=>{
                            return <Roomservices key={index} />                            
                        })
                       }                        
                    </div>
                </div>
              
                <div className='py-5  '>
                    <h6 className='text-xl font-semibold text-text pb-6'>Room Services</h6>
                    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense '>
                       {
                       [1,2,3,4,5,6,7,8,9,10,11,12,13].map((item,index)=>{
                            return <Roomservices key={index} />
                        })
                       }                        
                    </div>
                </div>
                <div className='py-5  '>
                    <h6 className='text-xl font-semibold text-text pb-6'>Room Reviews</h6>
                    <div className='container '>
                       {
                          [1,2,3].map((item,index)=><RoomReviews key={index} />)
                       }
                    </div>
                </div>
                <div className='py-5'>
                    <h6 className='text-xl font-semibold text-text pb-6'>Similar Room</h6>  
                    <div className='container w-full grid grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-4 grid-flow-row-dense '>
                          {
                            [1,2,3,4].map((item,index)=>{
                                return <SimilarRoom  key={index} />
                            })
                          }
                    </div>              
                </div>
            </div>

             {/* =============== static second column ============ */}
            <div className='w-full static px-1 row-start-1 md:row-auto'>
                <div className='border border-gray  p-3 mb-5 shadow'>
                    <h6 className='text-xl text-text'>This Room is Part of Zante Italy</h6>
                     
                </div>
                <div className='border border-gray  p-3 shadow'>
                    <h6 className='text-xl text-text'>Book your Room</h6>     
                    <form>
                        <div className='flex flex-wrap'>
                            <InputFiled 
                            isrequired={true}
                            title={'First Name'}
                            type={'text'}
                            placeholder={'First Name'}
                            />
                            <InputFiled 
                            isrequired={true}
                            title={'Last Name'}
                            type={'text'}
                            placeholder={'Last Name'}
                            />
                             <InputFiled 
                            isrequired={true}
                            title={'Your mail'}
                            type={'email'}
                            placeholder={'johndoe@koe'}
                            />
                            
                            <InputFiled 
                                isrequired={true}
                                title={'Phone Number'}
                                type={'text'}
                                placeholder={'+880 123 456 789'}
                            />
                            <div className='flex flex-col items-center justify-between py-3'>
                                <div className='flex items-center'>
                                <IoIosCalendar 
                                style={{fontSize: '2rem', }}
                                className='text-main cursor-pointer hover:text-text'
                                onClick={()=>setIsOpen(!isOpen)}
                                /> 
                                <span 
                                    className='text-text text-sm
                                    font-semibold cursor-pointer ml-2'
                                    onClick={() => setIsOpen(!isOpen)}            
                                    >
                                    {
                                        `${format(date[0].startDate, 'MMM dd')} to ${format(date[0].endDate, 'MMM dd')}`
                                    }  
                                        
                                </span>  
                                </div>
                                <>
                                   {
                                        isOpen && (
                                            <DateRange
                                    editableDateInputs={true}
                                    onChange={(ranges) => {
                                    // const countDay = Number(ranges.selection.endDate - ranges.selection.startDate)/1000/60/60/24 +1;
                                    // const countnight = Number(ranges.selection.endDate - ranges.selection.startDate)/1000/60/60/24 ;
                                    
                                    setDate([ranges.selection]);                       
                                    // setBooking({
                                    //     ...booking, 
                                    // checkIn: format(ranges.selection.startDate, 'EEE-dd-MM-yyyy'), 
                                    // checkOut: format(ranges.selection.endDate, 'EEE-dd-MM-yyyy'),                    
                                    // nights:countnight,
                                    // })
                                    }}
                                    
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date-range"
                                    minDate={new Date()}
                                    rangeColors={["#9B51E0"]}
                                />  
                                        )
                                   }                               
                                </>
                            </div>
                            <button className=' bg-text btn btn-secondary text-white px-3 py-2 rounded-md w-full mt-3'>Book Now</button>
                            
                        </div>
                    </form>                
                </div>
              <div className='flex flex-wrap gap-1'>
                <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>
                    <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room5.jpg)`,
                    }}
                    >
                        <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>
                    <div className='border border-gray  w-full md:w-full md:h-96 p-3 shadow mt-5 h-24 bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(/imgs/room/room4.jpg)`,
                    }}
                    >
                        <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                    </div>

             </div>
            </div>
        </div>
    </div>
  )
}
 
export default Roomdetails