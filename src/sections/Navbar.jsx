import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "/src/assets/styleSprouts.webp";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBag4Line } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SearchProduct from "../components/SearchProduct";
import Badge from '@mui/material/Badge';

function Navbar({setSearchItem}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "Free Delivery To All Over Pakistan",
    "Welcome To Breakout",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };
  const tabsData = [
    { label: "Home", path: "/" },
    { label: "Shirts", path: "/" },
    { label: "Hoddies", path: "/" },
    { label: "Pents", path: "/" },
    { label: "T-Shirts", path: "/" },
    { label: "Jackets", path: "/" },
    { label: "FootWear", path: "/" },
    { label: "Contact-Us", path: "/" },
  ];

  return (
    <>
      <nav className="w-full">
        <div className="bg-black flex items-center lg:gap-72 md:gap-16 gap-10 py-3 lg:px-40 md:px-16 sm:px-7 px-3">
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white">
              <FaTiktok size={20} />
            </a>
          </div>
          <div className="flex items-center justify-between text-center md:w-[450px] w-full ">
            <div className="text-white cursor-pointer" onClick={handlePrev}>
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
            </div>

            <h1 className="text-white text-base flex items-center gap-3">
              {currentIndex === 0 && (
                <TbTruckDelivery className="text-yellow-500 text-2xl" />
              )}
              {messages[currentIndex]}
            </h1>

            <div className="text-white cursor-pointer" onClick={handleNext}>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-10 px-20 border-b-2">
          <div className="flex items-center gap-32">
            <ul className="flex flex-wrap w-[450px] items-center gap-6 leading-none">
              {tabsData.map((el, index) => (
                <li key={index} className="text-sm font-light cursor-pointer">
                  {el.label}
                </li>
              ))}
            </ul>

            {/* <img className="w-32" src={logo} alt="" /> */}
            <Link to="/" className="text-3xl font-extrabold font-serif">
              Breakout
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Tooltip title="Search">
              <IconButton>
                <SearchProduct setSearchItem={setSearchItem}/>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Profile">
              <IconButton>
                <Link to="/admin-login">
                  <CgProfile className="text-2xl" />
                </Link>
              </IconButton>
            </Tooltip>

            <Tooltip title="My Cart">
              <IconButton>
              <Link to="/my-cart">
              <Badge badgeContent={1} color="primary">
                <RiShoppingBag4Line className="text-2xl" />
                </Badge>
                </Link>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
