import Image from 'next/image'
import React from 'react'

const HeroSection = ({imgcls,Title,subtitle='' ,btnTitle, onpressbtn ,otherComponent}) => {
  return (
    <div className={`
    
    h-96  
    ${imgcls}
     object-cover w-full bg-cover bg-center bg-fixed
     flex flex-col justify-center items-center 
     lg:h-[600px] xl:h-[700px] 2xl:h-[700px]
      mx-auto
    `}>
     <div className='space-y-4 mb-10 md:px-10'>
      <h1 className='title text-white' >{Title}</h1>
        <p className='subtitle text-white'>{subtitle}</p>
     </div>
 
      {
       otherComponent == null && btnTitle  ? (
          <button className='btn px-8 btn-circle-gradient-purple hover:shadow  hover:btn-animate  hover:text-space '
      onClick={onpressbtn}
      ><span className='animate pull'>{btnTitle}</span></button> 
        ) : otherComponent
      }       
    </div>
  )
}

export default HeroSection