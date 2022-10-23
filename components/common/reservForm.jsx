import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { IoIosCalendar } from 'react-icons/io';
import { useBooking } from '../../context/DataContex';
import Link from 'next/link';
//
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
//
const ReservForm = ({css, hidebtn=false}) => {
  const { booking, setBooking } = useBooking()
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //
 
  return (
    <div className={`flex flex-col md:flex-row justify-between 
    rounded-md p-4 items-start ${isOpen ? 'border-none shadow-lg' :'border-2 border-text'}
         space-y-3 md:space-x-2  overflow-hidden
       md:space-y-0 ${css}`}>
        {/* <hr className='w-full md:w-0.5 h-10 bg-gray hidden md:block' /> */}

         <div className={`flex flex-col  gap-2  `}>
              <div className='flex items-center'>
                <IoIosCalendar 
                    style={{fontSize: '2rem', }}
                    className='text-text cursor-pointer hover:text-main'
                    onClick={() => setIsOpen(!isOpen)} 
                    /> 
                <span 
                className='text-text text-sm
                font-semibold cursor-pointer ml-2'
                onClick={() => setIsOpen(!isOpen)}            
                >
                {
                    booking.checkIn && booking.checkOut ?  `${booking.checkIn} to ${booking.checkOut}` :`${format(date[0].startDate, 'MMM dd')} to ${format(date[0].endDate, 'MMM dd')}`
                }  
                    
                </span>  
              </div>
              {
                isOpen && (
                <>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(ranges) => {
                      const countDay = Number(ranges.selection.endDate - ranges.selection.startDate)/1000/60/60/24 +1;
                      const countnight = Number(ranges.selection.endDate - ranges.selection.startDate)/1000/60/60/24 ;
                     
                      setDate([ranges.selection]);                       
                      setBooking({
                        ...booking, 
                      checkIn: format(ranges.selection.startDate, 'EEE-dd-MM-yyyy'), 
                      checkOut: format(ranges.selection.endDate, 'EEE-dd-MM-yyyy'),                    
                      nights:countnight,
                      })
                    }}
                    
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date-range"
                    minDate={new Date()}
                    rangeColors={["#9B51E0"]}
                  />
                </>
                )
              }           
        </div>
        <hr className='w-full md:w-0.5 h-10 bg-gray hidden md:block' />
         <div className=''>         
            <div className='flex items-center justify-between space-x-1  w-full'>
                    <select                    
                    onChange={(e)=>{
                   
                      setBooking({
                        ...booking,
                        adults: e.currentTarget.value
                      })
                    }}
                    className=' bg-green  '
                    >
                      <option disabled selected >Adult</option>
                      <option value="1" 
                      className='bg-text hover:bg-green '
                      >1</option>
                      <option value="2"      className='bg-text hover:bg-green ' >2</option>                  
                      <option value="3"      className='bg-text hover:bg-green ' >3</option>                  
                      <option value="4"       className='bg-text hover:bg-green '>5</option>                  
                      <option value="5"       className='bg-text hover:bg-green '>5</option>                  
                    </select>
                    <select
                       onChange={(e)=>{
                        setBooking({
                          ...booking,
                          children: e.currentTarget.value
                        })
                      }}
                      className=' bg-green outline-none focus:outline-none'
                    >
                      <option disabled selected >Children</option>
                      <option value="1"      className='bg-text hover:bg-green ' >1</option>
                      <option value="2"      className='bg-text hover:bg-green ' >2</option>
                      <option value="3"      className='bg-text hover:bg-green ' >3</option>
                      <option value="4"      className='bg-text hover:bg-green ' >4</option>
                      <option value="5"      className='bg-text hover:bg-green ' >5</option>                  
                    </select>
            </div>
        </div>
        {
            !hidebtn && <hr className='w-full md:w-0.5 h-10 bg-gray hidden md:block' />
        }
        
        {
            !hidebtn && (<Link  
                href={'/booking'}
                
                >
                    <button className='btn btn-primary-outline uppercase transition duration-75 
                ease-in-out hover:text-main'>Reserve Now</button>
                </Link>)
        }
            
         
    </div>
  )
}

export default ReservForm