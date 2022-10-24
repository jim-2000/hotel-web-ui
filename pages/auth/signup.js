import React from 'react'
import InputFiled from '../../components/common/inputFiled'

const Signup = () => {
  return (
    <div className='bg-hero h-screen object-cover w-full bg-cover bg-center bg-fixed
    flex flex-col justify-center items-center px-4'>
        <div>
            <h1 className='text-center section-title text-green'><span>Sign</span>up</h1>
        </div>
        <div className=' bg-white w-full md:w-[500px] md:h-1/2 rounded-lg shadow-lg flex flex-col
         justify-start md:justify-center items-center py-4 '>
            <form className='w-full px-4 space-y-2'>
                <div className='flex flex-col md:flex-row  justify-between  md:items-center '>
                     <div>
                         <InputFiled 
                        isrequired={true}
                            type={'text'}
                            placeholder={'john'}
                            title={'First Name'}                    
                        />
                     </div>
                     <div>
                         <InputFiled 
                        isrequired={true}
                            type={'text'}
                            placeholder={'doe'}
                            title={'Last Name'}                    
                        />
                     </div>
                </div>
               
                <InputFiled 
                 isrequired={true}
                    type={'email'}
                    placeholder={'Enter your Email'}
                    title={'Email'}
                 />
                <InputFiled 
                isrequired={true}
                type={'password'}
                placeholder={'Enter your Password'}
                title={'Password'}
                />
                <InputFiled 
                isrequired={true}
                type={'password'}
                placeholder={'confirm Password'}
                title={'Confirm Password'}
                />
                <div className='flex justify-center items-center'>
                    <button className='btn btn-primary w-3/4 md:w-2/4'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup