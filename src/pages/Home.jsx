import React, { useState } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import EmailSubscription from '../components/EmailSubscription'
import HomeHero from '../sections/HomeHero'

function Home() {
  const [searchItem, setSearchItem]= useState("")
  return (
    <>
      <Navbar setSearchItem={setSearchItem}/>
      <HomeHero searchItem={searchItem}/>
      <EmailSubscription/>
      <Footer/>
    </>
  )
}

export default Home
