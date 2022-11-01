import React from 'react'
import { IoIosBed, IoIosPeople, IoIosSquareOutline, IoMdHome } from 'react-icons/io'

const RoomSpecility = () => {
  return (
    <>
                    <div className='flex justify-between items-center'>
                        <div className='px-2'>
                            <IoIosPeople 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray' >Max Guests</p>
                            <p className='text-base text-text font-semibold' >4 Adults / 2 Children</p>
                            
                        </div>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className='px-2'>
                            <IoMdHome 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray' >Booking Nights</p>
                            <p className='text-base text-text font-semibold' >3 Min.</p>
                            
                        </div>
                    </div>     
                    <div className='flex justify-between items-center '>
                        <div className='px-2'>
                            <IoIosBed 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray'>Bed Type</p>
                            <p className='text-base text-text font-semibold' >Twins Bed</p>
                            
                        </div>
                    </div>        
                    <div className='flex justify-between items-center mr-4 '>
                        <div className='px-2'>
                            <IoIosSquareOutline 
                            size={26}
                            className='text-gray '
                            />
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-sm text-gray'>Bed Type</p>
                            <p className='text-base text-text font-semibold' >Twins Bed</p>
                            
                        </div>
                    </div>   
    </>
  )
}

export default RoomSpecility