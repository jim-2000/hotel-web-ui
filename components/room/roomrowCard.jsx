import React from 'react'

import { IoIosAddCircleOutline, IoIosCheckmarkCircleOutline, IoIosInformation, IoIosInformationCircle, IoIosPin, IoIosStar, IoIosStarOutline, IoIosWifi, IoIosWine, IoMdBed } from 'react-icons/io'

const RoomrowCard = () => {
  return (
    <>
    <div id="app" class="flex items-start justify-start w-full bg-gray-200 p-4 h-full ">	
	{/* max-w-2xl */}
	<div class="w-full shadow-lg  bg-white sm:flex">
			<div class="w-full sm:w-1/4  bg-center bg-cover border relative h-48 sm:h-auto shadow-inner"
            
            style={{
                backgroundImage: `url(${'https://www.citystyleandliving.com/wordpress/wp-content/uploads/2019/01/outside.jpg'})`
            }}
            >
				<div class="w-full absolute bottom-0 flex justify-start bg-gradient-black-transparent">
					<ul class="text-xs sm:font-semibold my-2 flex sm:block justify-around w-full sm:w-auto text-white">
						<li class="my-1 flex items-center">
                            <IoIosAddCircleOutline 
                            size={8}
                            className='mr-1 h-3 w-3 fill-current'
                            />
							Free cancelation
						</li>
						<li class="my-1 flex items-center">
							<IoIosWine 
                            size={8}
                            className='mr-1 h-3 w-3 fill-current'
                            />
							Breakfast included
						</li>
						<li class="my-1 flex items-center">
							<IoIosWifi 
                            size={8}
                            className="mr-1 h-3 w-3 fill-current"
                            />
							<span>Wifi included</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="w-full sm:w-3/4 p-3">				
				<div class="flex justify-between items-center border-b pb-3">
					<div>
						<div class="sm:flex items-center mb-1">
							<h2 class="text-lg font-semibold text-gray-600">Kensington Suite Hotel</h2>
							<div class="flex sm:ml-3">
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
						<div class="flex items-center">
							
                        <IoIosPin
                        size={15}
                        className='text-teal-700'

                        />
							<p class="text-xs text-gray-600">30-35 Nevern Place <a class="font-semibold text-gray-700" href="">Show on Map</a></p>
						</div>
					</div>
					<div>
						<div class="text-right text-xl leading-tight text-gray-600 font-semibold">
							$ 869 2 nights
						</div>
					</div>
				</div>
				
				<div class="flex mt-3">
					<div className=''>
						<IoIosInformationCircle
                        size={15}
                        className='text-blue-600'

                        />
					</div>
					<p class="text-xs ml-1 text-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora modi natus enim ipsa incidunt eum optio perspiciatis laboriosam reiciendis voluptatem totam, dolorem aliquid provident amet odio adipisci ullam praesentium quos.
					</p>
				</div>
				
				<div class="flex mt-3 items-center">
					<div>
						<IoMdBed 
                        size={15}
                        className='text-main'
                        />
						
					</div>
					<p class="text-xs ml-1 text-gray-600 font-semibold">
						Deluxe room, 1 King Bed
					</p>
				</div>
				
				<div class="sm:flex mt-3 items-center justify-between">
					<div>
						<p class="text-xs text-green-700">
							<strong>2.5/5 Avgerage.</strong> See 431 reviews
						</p>
					</div>
					<div class="mt-3 md:mt-0">
						<button class="btn btn-primary-outline">Resurve Now</button>
					</div>
				</div>
				
			</div>
		
	</div>
	
</div>
    </>
  )
}

export default RoomrowCard