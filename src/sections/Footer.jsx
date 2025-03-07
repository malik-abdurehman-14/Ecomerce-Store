import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className='bg-black px-10 pt-10 pb-12 flex flex-col justify-center gap-5 items-center'>
        <h2 className='text-xl font-semibold text-white'>About Us</h2>
        <p className='text-base text-white font-thin w-[60%] text-center '>Breakout is the place to find affordable branded clothes, offering genuine style and real comfort. Explore a variety of original brands that brings together quality and value, so you can enjoy the best clothes without overspending.</p>
        <div className="flex items-center gap-4 mt-5">
            <a href="#" className="text-white hover:translate-x-1 transition-all">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:translate-x-1 transition-all">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:translate-x-1 transition-all">
              <FaTiktok size={24} />
            </a>
          </div>  <div></div>
      </section>

      <hr className='border-gray-700'/>
      <div className='bg-black py-5 px-28 flex gap-2'>
        <a className='text-xs font-light text-gray-400' href="#">@2025 ,Breakout Powered by TechoverFlow  .</a>
        <a className='text-xs font-light text-gray-400' href="#">Privacy Policy  .</a>
        <a className='text-xs font-light text-gray-400' href="#">Terms of Services  .</a>
        <a className='text-xs font-light text-gray-400' href="#">Contact Information</a>
      </div>
    </>
  )
}

export default Footer
