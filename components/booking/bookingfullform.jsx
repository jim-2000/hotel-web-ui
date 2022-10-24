import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { IoIosCalendar, IoIosClose  } from "react-icons/io";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//
import InputFiled from '../common/inputFiled'
import { useBooking } from '../../context/DataContex';

// modal config
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'60%',
  },
};
// Modal.setAppElement('#app')

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
//
import ConfirmModal from './confirmModal';
import ErrorModal from '../common/errorModal';
import Pageloader from '../common/loader';
import ReservForm from '../common/reservForm';
import useToggle from '../../hook/useToggle';
const Bookingfullform = () => {
  const { booking, setBooking } = useBooking()
  const [isOn, toggleIsOn] = useToggle();
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
// 
 


 
  
  return (
    <div className='p-0 m-0'>
      <div className=''>
        <ReservForm 
        hidebtn={true}
        />
      </div>
          
        <div>
          <p>Are your Booked for work ?</p>
            <div className='flex items-center justify-between space-x-1 w-2/3'>
              <div className='flex items-center space-x-1'>
                  <input type="radio" name="work" id="work" 
                  onChange={(yes)=>{
                    setBooking({...booking, work: true})
                  }} 
                  />
                  <label htmlFor="work">Yes</label>
              </div>
              <div className='flex items-center space-x-1'>
                  <input type="radio" name="work" id="work" 
                   onChange={(yes)=>{
                    setBooking({...booking, work: false})
                  }} 
                  />
                  <label htmlFor="work">No</label>
              </div>
            </div>
      </div>
      <div className='flex flex-col  justify-start md:flex-row  md:justify-between items-center md:space-x-1 space-x-0'>
          
          <InputFiled title='First Name ' type='text' placeholder='First Name'
          
          setval={(val)=>{
            setBooking({...booking, fname: val})
          }}
          value={booking.fname}
          isrequired={true}  />
          <InputFiled title='Last Name ' type='text' placeholder='Last Name' isrequired={true}  
            setval={(val)=>{
              setBooking({...booking, lname: val})
            }}
            value={booking.lname}
          />
      </div>
        <InputFiled title='Email' type='email' placeholder='johndoe' 
          setval={(val)=>{
            setBooking({...booking, email: val})
          }}
          value={booking.email}
        isrequired={true}  />
        <InputFiled title='Enter Your Phone number' type='text' placeholder='johndoe' 
          setval={(val)=>{
            setBooking({...booking, phone: val})
          }}
          value={booking.phone}
        isrequired={true}  />
      
          {/* <div>      
            <p>Select Person</p>     
            <div className='flex items-center justify-between space-x-1 md:w-2/3 w-full'>
                    <select                    
                    onChange={(e)=>{
                   
                      setBooking({
                        ...booking,
                        adults: e.currentTarget.value
                      })
                    }}
                    >
                      <option disabled  >Adult</option>
                      <option value="1" >1</option>
                      <option value="2" >2</option>                  
                      <option value="3" >3</option>                  
                      <option value="4" >5</option>                  
                      <option value="5" >5</option>                  
                    </select>
                    <select
                       onChange={(e)=>{
                        setBooking({
                          ...booking,
                          children: e.currentTarget.value
                        })
                      }}
                    >
                      <option disabled >Children</option>
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>                  
                    </select>
            </div>
        </div> */}
          <div>
              <p>Need A Car?</p>
              <div className='flex items-center justify-between space-x-1 md:w-2/3 w-full'>               
                <div className='flex items-center space-x-2'>
                    <input type="checkbox" name="gest" id="gest" 
                    onChange={(yes)=>{
                      setBooking({...booking, needAcar: yes.target.checked})
                  
                    }}
                    />
                    <label htmlFor="gest">I need a car</label>
                </div>
              </div>
          </div>
        <div>
          <p>Payment Now</p>
            <div className='flex items-center justify-between space-x-1 md:w-2/3 w-full'>
                    <select
                      onChange={(e)=>{
                          setBooking({...booking, paymentMethod: e.currentTarget.value })
                      }}  
                    >
                      <option disabled >Choose payment account</option>
                      <option value="1" >MasterCard</option>
                      <option value="2" >Visa</option>                  
                      <option value="3" >Bkash</option>                  
                    </select>                    
            </div>
        </div>
         
      <div className='py-3'>
            {
              error &&  <ErrorModal 
              isOpen={isOn}
              title='Error'
              subtitle='Please fill up all the * field'
              toggle={toggleIsOn}
              />
            }
      </div>
      <button className='bg-main text-white py-2 px-4 rounded-md w-full md:w-1/3'
      onClick={()=>{       
        if (booking.checkIn && booking.checkOut && booking.fname && booking.lname && booking.email && booking.phone && booking.adults && booking.children) {
          setmodalIsOpen(true); 
          console.log(booking);
        }else{
          setError(true)
          toggleIsOn()
          console.log(booking);
       
        }
        
      }}
      >Book Now</button>
      <div>
            <Modal
               isOpen={modalIsOpen}
               onAfterOpen={()=>{}}
               onRequestClose={()=>setmodalIsOpen(false)}
               style={customStyles}
               contentLabel="Example Modal"
               ariaHideApp={false}
            >
              <div>
              <div className='flex items-end justify-end py-2'>
              <IoIosClose 
                    style={{fontSize: '2rem', }}
                    className='text-red-500 cursor-pointer hover:text-main     transition-all ease-in duration-500'
                    onClick={ ()=>setmodalIsOpen(!modalIsOpen) }
                    />
              </div>
              <ConfirmModal />

              </div>                 
          </Modal>
      </div>
    </div>
  )
}

export default Bookingfullform