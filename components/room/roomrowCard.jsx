import React from 'react'
import { useRouter } from 'next/router'
import { IoIosAddCircleOutline, IoIosCheckmarkCircleOutline, IoIosInformation, IoIosInformationCircle, IoIosPin, IoIosStar, IoIosStarOutline, IoIosWifi, IoIosWine, IoMdBed } from 'react-icons/io'
import { sortText } from '../../func/sortText'

//
const RoomrowCard = ({roomData}) => {
 const router = useRouter();
  return (
    <>
	<div>
		 
	</div>
    <div id="app" className="flex items-start justify-start w-full bg-gray-200 p-4 h-full cursor-pointer"
	onClick={() => {
		router.push(`/roomdetails`,)
	}}
	>	
	{/* max-w-2xl */}
	<div className="w-full shadow-lg  bg-white sm:flex">
			<div className="w-full sm:w-1/4  bg-center bg-cover border relative h-48 sm:h-auto shadow-inner"
            
            style={{
                // backgroundImage: `url(${'https://www.citystyleandliving.com/wordpress/wp-content/uploads/2019/01/outside.jpg'})`
				backgroundImage: `url(${roomData.image})`
            }}
            >
				<div className="w-full absolute bottom-0 flex justify-start bg-gradient-black-transparent">
					<ul className="text-xs sm:font-semibold my-2 flex sm:block justify-around w-full sm:w-auto text-white">
						<li className="my-1 flex items-center">
                            <IoIosAddCircleOutline 
                            size={8}
                            className='mr-1 h-3 w-3 fill-current'
                            />
							Free cancelation
						</li>
			 
							<li className="my-1 flex items-center">
								<IoIosWine 
								size={8}
								className='mr-1 h-3 w-3 fill-current'
								/>
								Breakfast included
							</li>
					 
				 
							<li className="my-1 flex items-center">
								<IoIosWifi 
								size={8}
								className="mr-1 h-3 w-3 fill-current"
								/>
								<span>Wifi included</span>
							</li>
						 
					</ul>
				</div>
			</div>
			<div className="w-full sm:w-3/4 p-3">				
				<div className="flex justify-between items-center border-b pb-3">
					<div>
						<div className="sm:flex items-center mb-1">
							<h2 className="text-lg font-semibold text-gray-600">{roomData.name}</h2>
							<div className="flex sm:ml-3">
								<IoIosStar 
                                size={16}
                                className='text-yellow-400'
                                />	
                                <IoIosStar 
                                size={16}
                                className='text-yellow-400'
                                />
                                <IoIosStar 
                                size={16}
                                className='text-yellow-400'
                                />							 
								
							</div>
						</div>
						<div className="flex items-center">
							
                        <IoIosPin
                        size={15}
                        className='text-teal-700'
                        />
							<p className="text-xs text-gray-600">{roomData.branch ==1 ? "London" : roomData.branch == 2 ? "Dubai" : "Thailand"} <a className="font-semibold text-gray-700" href="">Show on Map</a></p>
						</div>
					</div>
					<div>
						<div className="text-right text-xl leading-tight text-gray-600 font-semibold">
						${roomData.price}  {roomData.minBookingNight} nights
						</div>
					</div>
				</div>
				
				<div className="flex mt-3">
					<div className=''>
						<IoIosInformationCircle
                        size={15}
                        className='text-blue-600'

                        />
					</div>
					<p className="text-xs ml-1 text-text">
						{
							sortText(roomData.description, 100)
						}
					</p>
				</div>
				
				<div className="flex mt-3 items-center">
					<div>
						<IoMdBed 
                        size={15}
                        className='text-main'
                        />
						
					</div>
					{/* <p className="text-xs ml-1 text-gray-600 font-semibold">
						Deluxe room,{roomData.bedTipe} bed
					</p> */}
					<p className="text-xs ml-1 text-gray-600 font-semibold">
						{roomData.bedTipe} bed
					</p>
				</div>
				
				<div className="sm:flex mt-3 items-center justify-between">
					<div>
						<p className="text-xs text-green-700">
							<strong>2.5/5 Avgerage.</strong> See 431 reviews
						</p>
					</div>
					<div className="mt-3 md:mt-0">
						<button className="btn btn-primary-outline">Resurve Now</button>
					</div>
				</div>
				
			</div>
		
	</div>
	
	</div>
    </>
  )
}

export default RoomrowCard