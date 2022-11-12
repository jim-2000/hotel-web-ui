import React from 'react'
import Calendar from 'reactjs-availability-calendar'

const RoomCalender = () => {
    const bookings = [
        {
          from: new Date('11-01-2022'),
          to: new Date('11-03-2022'),
          middayCheckout: true,
        },
        {
          from: new Date('11-05-2022'),
          to: new Date('11-10-2022'),
          middayCheckout: false,
        },
      ]
  return (
    <div className='flex flex-col-reverse'>
            <Calendar                        
            showNumberOfMonths={1}
            bookings={bookings} />   
            <div className='  w-2/4 flex flex-wrap justify-start items-center'>
                <div className='flex mr-2 '>
                    <div className='w-4 h-4 bg-green-500 rounded-full'>
                    <div className='absolute'>
                    <span class="flex h-3 w-3  ">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[#3ed95173]"></span>
                    </span>
                    </div>
                    </div>
                    <p className='text-sm text-green font-bold'>Available</p>
                </div>
                <div className='flex '>                    
                  <div className='w-4 h-4 bg-green-500 rounded-full'>                   
                    <span class="flex h-3 w-3 items-end">                      
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-text"></span>
                    </span>                  
                  </div>
                    <p className='text-sm text-text font-bold'>Not Available</p>
                </div>
                
            </div>                        
    </div>
  )
}

export default RoomCalender