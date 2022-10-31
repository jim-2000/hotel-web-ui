import React from 'react'
import FotterPart from '../components/common/footer'
import Header from '../components/common/Header'
import { BookingProvider } from '../context/DataContex'
import { ThemeProvider } from '../context/themeContex'
 
// (and @fullcalendar/interaction has no stylesheet)
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BookingProvider>
      <Header />
      <Component {...pageProps} />
    
        <FotterPart />
      
    </BookingProvider>
  )
}

export default MyApp
