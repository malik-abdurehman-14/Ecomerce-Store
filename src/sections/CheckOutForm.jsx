import React, { useState } from "react";
import Img from "/src/assets/checkout/visa.png";
import Img2 from "/src/assets/checkout/masterCard.jpeg";
import Img3 from "/src/assets/checkout/discover.jpeg";
import Img4 from "/src/assets/checkout/american.png";
import { FaLock } from "react-icons/fa";

function CheckOutForm() {
  const [cardNo , setCardNo] = useState('')
  const [month , setMonth] = useState('') 
  const [year , setYear] = useState('') 
  const [cvv , setCvv] = useState('') 

function handleSubmit(){
  setCardNo('');
  setMonth('')
  setYear('')
  setCvv('')

  setTimeout(()=>{
    alert("Your order submitted successfully.")
  }, 1000)
}

  return (
    <>
      <section className="flex justify-center items-center bg-blue-50 py-12 px-5">
        <div className="flex flex-col sm:w-[400px] w-full justify-center rounded-md">
          <div className="bg-gray-800 w-full px-3 py-4  text-center rounded-t-md">
            <h1 className="text-4xl font-bold text-white text-center">
              Final Step:
            </h1>
            <h2 className="text-2xl text-semibold text-gray-100 mt-2">
              Payment Methods
            </h2>
          </div>

          <div className="flex flex-col gap-4 bg-white py-6 pb-8 rounded-md px-4">
            <div>
              <p className="text-center text-gray-600 text-lg font-medium">
                We Accept:
              </p>
              <div className="flex flex-wrap gap-1 items-center justify-center">
                <img className="w-16" src={Img} alt="" />
                <img className="w-16 h-12" src={Img2} alt="" />
                <img className="w-16 h-20" src={Img3} alt="" />
                <img className="w-16 h-16" src={Img4} alt="" />
              </div>
            </div>
            <div>
              <div className="text-center flex gap-2 items-center justify-center">
                <input type="checkbox" />
                <p className="text-base">Billing Same as Shipping</p>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label
                  htmlFor="cardNumber"
                  className="text-gray-600 text-base font-light"
                >
                  Card Number :
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNo}
                  onChange={(e) => setCardNo(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex items-end gap-3">
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="expiryMonth"
                  className="text-gray-600 text-base font-light"
                >
                  Card Expiry Date :
                </label>
                <select
                  id="expiryMonth"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="sm:w-[180px] w-auto  p-2 border border-gray-300 rounded-md"
                >
                  <option value="">
                    Select Month
                  </option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <select
                  id="expiryYear"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="sm:w-[180px] w-auto p-2 border border-gray-300 rounded-md"
                >
                  <option value="">
                    Select Year
                  </option>
                  {Array.from(
                    { length: 10 },
                    (_, i) => new Date().getFullYear() + i
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex flex-col w-auto gap-1">
                <label
                  htmlFor="cardNumber"
                  className="text-gray-600 text-base font-light"
                >
                  CVV :
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <a href="#" className="text-gray-500 text-sm underline w-[150px] mt-3">Where can i find my Security Code?</a>
            </div>

            <div className="flex w-full items-center justify-center gap-2 mt-4">
            <FaLock className="text-yellow-500 text-xl"/>
                <p className="text-lg font-semibold text-gray-700">Secure 256-bit SSL Encryption</p>
            </div>

            <button onClick={handleSubmit} className="w-full text-center mt-2 py-4 px-3 bg-green-400 rounded-lg cursor-pointer hover:bg-green-500">
                Rush My Order
            </button>

            <div className="flex justify-center items-center gap-1 mt-3">
                <input type="checkbox" name="" id="" className=""/>
                <p className="text-gray-600 text-sm">Yes, Please Start My Monthly Magazines Free Trail!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOutForm;
