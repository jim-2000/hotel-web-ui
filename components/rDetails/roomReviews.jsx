import Image from 'next/legacy/image'
import React from 'react'
import { IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'

const RoomReviews = () => {
  return (
    <>
        <div className='flex items-center  p-2 gap-2 '>
            <div className='hidden md:block md:w-24 md:h-14 lg:w-20 lg:h-20 relative rounded ring-2 ring-text'>
                <Image 
                src={'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'}
                layout='fill'
                className='max-w-full h-auto  object-cover'
                alt='review'
                loader={({ src }) => src}
                />
            </div>
            <div className='flex flex-col justify-start items-start flex-wrap space-y-1 py-2 pl-5 shadow-lg border-b-2 border-b-text md:border-none 
             '>
                    <div className='block md:hidden w-20 h-20  relative  rounded-full ring-4 ring-text'>
                        <Image 
                        src={'/imgs/review/thumb1.jpg'}
                        layout='fill'
                        className='max-w-full h-auto rounded-full object-cover'
                        alt='review'
                        />
                    </div>
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