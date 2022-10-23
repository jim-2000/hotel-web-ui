import React, { useContext, useState } from 'react'

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

export const BookingContext = React.createContext({})

export const useBooking = () => useContext(BookingContext)

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState(Bookingform)
    return <BookingContext.Provider value={{ booking,setBooking }}>{children}</BookingContext.Provider>
}