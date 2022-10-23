import React, { useState } from 'react'
import { IoMdList,IoIosClose,IoLogoFacebook,IoLogoInstagram,IoLogoTwitter } from "react-icons/io";
import Link from 'next/link'
const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    // <ion-icon name="list-circle-outline"></ion-icon> 
    const toggleNav = () => {
        setisOpen(!isOpen)
        console.log(isOpen);
    }
 
    // const navigaton = useNavigate();
  return (
    <div className=''>
        <nav className=' px-5 py-2 bg-white backdrop-blur-lg shadow-lg md:flex md:justify-between md:items-center'>
            <div className='flex  cursor-pointer justify-between items-center'>
                <Link href='/'  >
                    <div className='flex'>
                        <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9 cursor-pointer"
                        alt="Logo"
                        onClick={() => {

                        }}
                        />
                        <span className="self-center whitespace-nowrap text-sm font-bold text-main text-animate-income ">
                        HOTEL SEA FALL
                        </span>
                    </div>
                </Link>
          
              <div className='block md:hidden md:opacity-0 opacity-100 '>
                    {
                    isOpen ?
                    <IoIosClose 
                    style={{fontSize: '2rem', }}
                    className='text-green cursor-pointer hover:text-main     transition-all ease-in duration-500'
                    onClick={ toggleNav}
                    />:
                    <IoMdList 
                    style={{fontSize: '2rem', }}
                    className='text-green cursor-pointer hover:text-main'
                    onClick={ toggleNav}
                    />                                       
                    }
              </div>
          
            </div>
            
         
            <ul 
            className={`          
            md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white 
            left-0 md:w-auto
            py-4 md:py-0 pl-7 md:pl-0
            md:opacity-100 ${isOpen ? 'opacity-100 top-10' : 'opacity-0 top-[-400px]'} 
            transition-all ease-in duration-500
            w-full
            `}>
                <li className='mx-1 my-6 md:my-0 md:mx-2 mt-1 md:m-0 hover:bg-slate-300 md:hover:bg-transparent ' >
                    <a href="/" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest '>Home</a>
                </li>
                <li className='mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent '>
                    <a href="/room" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest  '>Rooms</a>
                </li>
                
                <li className='mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent'>
                    <a href="/facilities" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest  '>Facilities</a>
                </li>
                <li className='mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent'>
                    <a href="/contact" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest  '>Contacts</a>
                </li>
                <li className=' mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent'>
                    <a href="/offers" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest'>Villa's</a>
                </li>
                <li className=' mx-1 my-6 md:my-0 md:mx-2 hover:bg-slate-300 md:hover:bg-transparent'>
                    <a href="/offers" className='text-text text-sm mr-1 font-semibold transition-all ease-in   duration-0 hover:duration-500 hover:text-main hover:font-bold hover:text-base hover:tracking-widest'>Sign up</a>
                </li>
                                
                    {/* <Link href='/booking'> */}
                     <a href='/booking' className='my-4 md:my-0 btn btn-primary-circle hover:shadow  btn-animate' >Book NOW</a>
                    {/* </Link> */}
            </ul>
             {/* social icons  */}
            <div className='hidden  lg:flex'>
                   
                    <IoLogoInstagram  
                    style={{fontSize: '2rem', }}
                    className='text-pink-500 cursor-pointer hover:text-pink-700  '
                    onClick={ ()=>{
                        console.log("instagram");
                    }}
                    />
                    <IoLogoTwitter 
                    style={{fontSize: '2rem', }}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 '
                    onClick={ ()=>{
                        console.log("twitter");
                    }}
                    />
                     <IoLogoFacebook 
                    style={{fontSize: '2rem', }}
                    className='text-blue-500 cursor-pointer hover:text-blue-700 animate-bounce hover:animate-none'
                    onClick={ ()=>{
                        console.log("facebook");
                    }}
                    />
            </div>
        </nav>
    </div>
  )
}

export default Header