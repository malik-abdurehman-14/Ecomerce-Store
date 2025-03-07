import React, { useState, useEffect } from "react";
import { FaMinusSquare } from "react-icons/fa";
import { SlCreditCard } from "react-icons/sl";
import { Link } from "react-router-dom";

function CartHero() {
  const [cart, setCart] = useState([]);
  // const [count, setCount] = useState(1);

  function add(index) {
    const updateCart = [...cart];
    updateCart[index].count += 1;
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  }

  function minus(index) {
    // if(count>1){
    //   setCount(count  - 1);
    // }
    const cartUpdate = [...cart];
    if (cartUpdate[index].count > 1) {
      cartUpdate[index].count -= 1;
      setCart(cartUpdate);
      localStorage.setItem("cart", JSON.stringify(cartUpdate));
    }
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleDelete = (index) => {
    const updateCart = [...cart];
    updateCart.splice(index, 1);
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const totalCount = cart.reduce(
    (sum, product) => sum + product.price * product.count,
    0
  );

  return (
    <>
      <section className="py-20 px-10 flex flex-col items-center justify-center gap-8">
        {cart.length === 0 ? (
          <>
            <h1 className="text-4xl font-semibold">Your Cart is Empty.</h1>
            <Link to="/">
              <button className="py-4 px-6 text-center bg-black text-white rounded-md">
                Continue Shopping
              </button>
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-semibold">Your Cart</h1>
            <div className="flex flex-wrap gap-4 sm:px-32 px-5">
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="relative flex h-auto w-full gap-4 bg-gray-50 shadow-md rounded-lg py-2 px-5"
                >
                  <img
                    className="w-[350px] h-[200px] object-cover rounded-t-lg"
                    src={product.images}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 px-2 pb-4 pr-5 mt-1">
                    <h1 className="text-lg font-thin ">{product.title}</h1>
                    <p className="text-base font-light text-gray-500 w-[80%] mb-5">
                      {product.description}
                    </p>
                    <p className="text-2xl font-extrabold text-gray-700">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => minus(index)}
                        className="text-xl font-light text-gray-700 bg-gray-300 rounded-sm px-2 py-1"
                      >
                        -
                      </button>
                      <p>{product.count}</p>
                      <button
                        onClick={() => add(index)}
                        className="text-xl font-light text-gray-700 bg-gray-300 rounded-sm px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-base text-gray-700">
                      <span className="text-lg font-semibold">Total:</span>$
                      {product.price * product.count}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute right-3 bottom-5 text-center font-light text-white bg-gray-700 hover:bg-black rounded-lg h-10 px-10"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <p className="text-2xl font-semibold mt-4 text-gray-700">
              <span className="text-3xl font-bold ">SubTotal:</span> ${totalCount}
            </p>
            <Link to="/check-out">
            <button className="text-center rounded-md py-3 px-24 bg-gray-700 text-white hover:bg-black">Checkout Products</button></Link>
          </>
        )}
      </section>
    </>
  );
}

export default CartHero;
