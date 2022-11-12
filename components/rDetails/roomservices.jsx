import React from 'react'
import { IoIosPeople } from 'react-icons/io'

const Roomservices = () => {
  return (
    <>
        <div className='flex flex-wrap items-center justify-start p-2  border-dotted border-2 border-text'>
                            <div className='px-2'>
                                <IoIosPeople 
                                size={26}
                                className='text-gray '
                                />                                
                            </div>
                            <p className='text-sm text-text font-semibold' >{"services"}</p>
        </div>
    </>
  )
}

export default Roomservices