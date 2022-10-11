import React from 'react'

const FotterPart = () => {
  return (
    < > 
      <div className="footer bg-text text-white py-4 w-full bottom-0">
        <div className="container grid grid-cols-2 md:grid-cols-4   gap-5 justify-items-stretch ">
          <div className="flex flex-col">
             <h5 className="text-xl font-extrabold text-white"><span className="text-main">Hotel</span>Lunar</h5> 
            <p className='md:font-body text-[12px] mb-2 leading-none'>will give you the comfort you deserve</p>
              <div className='space-y-0'>
                <p>41 (0)54 2344 00</p>
                <p>revs@hoteller.com</p>
                <p></p>
              </div>
          </div>
          
          {/*============ website link===========  */}
          <div className="flex flex-col item-center justify-center">
            <ul className='space-y-2'>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          
           {/*================== Social link =================  */}
           <div className="flex flex-col item-center justify-center">
            <ul className='space-y-2'>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          {/* app link  */}
          <div className='m-0 p-0'>
            <h5 className='text-base font-bold'>
            “Offer more than a gift voucher, offer an experience”
            </h5>
            <button className='bg-main text-white py-2 px-4 rounded-md mt-4'>BOOK NOW</button>
          </div>



        </div>
      </div>
    </ >
  )
}


export default  FotterPart;