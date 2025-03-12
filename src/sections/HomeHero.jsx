import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function HomeHero({searchItem}) {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.count += 1;
    } else{
      product.count = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 2000);
      return;
  };

  const filterProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  )

  return (
    <>
      <section className="py-16 px-16">
        <h1 className="text-3xl font-semibold font-serif text-gray-900 ml-3">
          {filterProducts.length > 0 ? 'Featured Products' : 'No items found'}
        </h1>
        <div className="flex items-center gap-7 flex-wrap mt-11 ml-3">
          {filterProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col h-auto w-[300px] gap-4 bg-gray-50 shadow-md rounded-lg"
              >
                <img
                  className="w-[100%] h-[200px] object-cover rounded-t-lg"
                  src={item.images}
                  alt=""
                />
                <div className="flex flex-col gap-1 px-2 pb-4 pr-5">
                  <h1 className="text-lg font-thin ">{item.title}</h1>
                  <p className="text-2xl font-extrabold text-gray-700">
                    ${item.price}
                  </p>
                  <button
                    onClick={() => handleCart(item)}
                    className="text-center font-light text-white bg-gray-700 hover:bg-black rounded-lg w-full mt-3 py-3"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Successfully added to cart"
      />
    </>
  );
}

export default HomeHero;
