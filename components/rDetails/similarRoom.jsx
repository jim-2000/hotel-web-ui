import React from 'react'
import { IoIosAddCircleOutline, IoIosWifi, IoIosWine } from 'react-icons/io'

const SimilarRoom = () => {
  return (
    <>
      <div className='w-full h-60  bg-center bg-cover border relative cursor-pointer hover:scale-95 transition duration-500 ease-in-out' style={{
                      backgroundImage: `url(/imgs/room/room1.jpg)`, 
                    }}>
                    <div className="w-full   absolute bottom-0 flex justify-start bg-gradient-black-transparent">
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
    </>
  )
}

export default SimilarRoom