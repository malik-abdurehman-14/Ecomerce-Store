import React from 'react'
import Navbar from '../sections/Navbar'
import CartHero from '../sections/CartHero'
import EmailSubscription from '../components/EmailSubscription'
import Footer from '../sections/Footer'

function CartPage() {
  return (
    <>
      <Navbar/>
      <CartHero/>
      <EmailSubscription/>
      <Footer/>
    </>
  )
}

export default CartPage
