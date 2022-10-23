import React, { useState } from 'react'

const InputFiled = ({title,type,value, setval, placeholder ,isrequired,onChange}) => {
  return (
    <div className={` flex flex-col w-full  `}>
      {title ? <label className='text-base font-bold text-text'>{title} {isrequired ? <span className='text-red-500'>*</span>: ''}</label> : null}  
        <input type={type} 
        onChange={setval ? (e)=> {           
            setval(e.target.value)          
        } : onChange}
        value={value}       
        placeholder={placeholder} 
        required={isrequired}
        
        className={`  border-2 border-main p-2 rounded-md font-body outline-none focus:border-main focus:ring-2 focus:ring-main focus:ring-opacity-50  `}
         
      />
     

    </div>
  )
}

export default InputFiled