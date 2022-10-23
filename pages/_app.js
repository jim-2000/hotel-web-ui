import { BookingProvider } from '../context/DataContex'
import { ThemeProvider } from '../context/themeContex'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  )
}

export default MyApp
