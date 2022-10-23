import React from 'react'
import { useBooking } from '../../context/DataContex'

const Bookingdetails = () => {
  const { booking, setBooking } = useBooking()

  return (
    <div className='flex justify-between items-center space-y-2 '>
        <div className='flex flex-col space-y-1'>
            <p>Arrival</p>
            <p>{booking.checkIn}</p>
            {/* <p>From 14:00</p> */}            
        </div>
        <hr />
        <div className='flex flex-col  space-y-1'>
            <p>Departure</p>
            <p>{booking.checkOut}</p>
            {/* <p>To 12:00</p> */}
        </div>   
                        
    </div>
  )
}

export default Bookingdetails