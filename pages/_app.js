import React, { useState ,useEffect} from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import  BookingProvider  from '../context/DataContex'
import { useRouter } from 'next/router';
import ScrollToTop from 'react-scroll-to-top'

 //
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
// (and @fullcalendar/interaction has no stylesheet)
import '../styles/globals.css'
import Pageloader from '../components/common/loader';



//
  //
  const Bookingform ={
    fname: '',
    lname: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    nights: '',
    roomType: '',
    roomNumber: '',
    roomPrice: '',
    total: '',
    bookingStatus: 'pending',
    paymentStatus: 'pending',
    paymentMethod: 'COD', // cash on delivery (30% need to pay for book) // online payment // card payment // paypal
    needAcar : false,
    bookedForWork : false,
    
}
// Path: my-app\pages\_app.js

function MyApp({ Component, pageProps }) {
  const [isLoading, setisLoading] = useState(false);
  const [booking, setBooking] = useState(Bookingform);
  const [webData, setWebData] = useState();
  const router = useRouter(); 
  useEffect(() => {
    router.events.on('routeChangeStart', () =>  setisLoading(true));
    router.events.on('routeChangeComplete', () =>  setisLoading(false) );
    router.events.on('routeChangeError', () =>  setisLoading(false));
   
    // return loading
    return () => {
      router.events.off('routeChangeStart', () =>  setisLoading(true));
      router.events.off('routeChangeComplete', () =>  setisLoading(false) );
      router.events.off('routeChangeError', () =>  setisLoading(false));
    }
    
  },);
 



  return (
    <BookingProvider.Provider
    value={{ booking,setBooking ,webData ,setWebData}}
    >
      <Header />
      {
        isLoading ? (
          <>
            <Pageloader isloading={isLoading}/>
          </>
        ) : <Component {...pageProps} /> 
      }
      {/* <Component {...pageProps} />  */}
           
      <FotterPart />
      <ScrollToTop smooth 
      color='#f5f5f5' 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: '50%',
        color: 'white',
      }}
      />
      
      
    </BookingProvider.Provider>
  )
}

export default MyApp
