import React from 'react'

const FotterPart = () => {
  return (
    < > 
      <div className="footer bg-text text-white py-4 w-full relative bottom-0 ">
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
              <li className='footer-li'>Stafs</li>
              <li className='footer-li'>About</li>
              <li className='footer-li'>Term & condition</li>
              <li className='footer-li'>Job</li>
            </ul>
          </div>
          
           {/*================== Social link =================  */}
           <div className="flex flex-col item-center justify-center">
            <ul className='space-y-2'>
              <li className='footer-li'>Facebook</li>
              <li className='footer-li'>Twitter</li>
              <li className='footer-li'>E-mail</li>
              <li className='footer-li'>Linkdin</li>
            </ul>
          </div>
          {/* app link  */}
          <div className='m-0 p-0 space-y-2'>
            <h5 className='text-base'>
            “Offer more than a gift voucher, offer an experience”
            </h5>
            <button className='btn button-2'>BOOK NOW</button>
          </div>



        </div>
      </div>
    </ >
  )
}


export default  FotterPart;