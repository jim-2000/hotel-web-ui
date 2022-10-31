import Image from 'next/image'
import React from 'react'
import { IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'

const RoomReviews = () => {
  return (
    <>
        <div className='flex   p-2 gap-2'>
            <div className='w-24 h-20 relative'>
                <Image 
                src={'/imgs/review/thumb1.jpg'}
                layout='fill'
                className=' rounded-full object-cover'
                />
            </div>
            <div className='flex flex-col justify-start items-start flex-wrap space-y-1 py-2 pl-5 shadow-lg '>
                <div className='flex items-center justify-evenly'>
                    <IoIosStarOutline
                    color='#FFC107'

                    />
                    <IoIosStarOutline
                    color='#FFC107'
                    />
                    <IoIosStarOutline
                    color='#FFC107'
                    />
                    <IoIosStarHalf 
                    color='#FFC107'
                    />
                </div>
                <h6 className='text-text font-body font-bold'>John Doe</h6>
                <h6 className='text-gray font-body font-semibold'>Felecia Lawson - Paris, France</h6>
                <h6 className='text-gray font-body font-light'>Extremely nice environment, the room was great, the service was awesome, really helpful and great service I'll visit them again in the near future.</h6>
            </div>
        </div>
    </>
  )
}

export default RoomReviews