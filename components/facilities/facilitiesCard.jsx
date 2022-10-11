import React from 'react'

const FacilitiesCard = () => {
  return (
    <div>
        <img 
        src='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        alt='facilities'
        className='w-[100%] h-[200px] md:h-[240px] object-cover hover:opacity-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 mb-2 '
        />
        <h6 className='text-center text-text font-bold py-2 '>Swiming Pool</h6>
    </div>
  )
}

export default FacilitiesCard