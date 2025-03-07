import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import EmailSubscription from '../components/EmailSubscription'
import CheckOutForm from '../sections/CheckOutForm'

function CheckOut() {
  return (
    <>
      <Navbar/>
      <CheckOutForm/>
      {/* <EmailSubscription/> */}
      <Footer/>
    </>
  )
}

export default CheckOut
