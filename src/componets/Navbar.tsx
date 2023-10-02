import React from "react";
import AddToCart from "../assets/icons/add-to-the-cart-svgrepo-com.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-900 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-white font-display ml-20">
          Reeco
        </h1>
        <div className="ml-10 flex text-gray-300">
          <div className=" ml-10">Stores</div>
          <div className=" ml-10">Orders</div>
          <div className=" ml-10">Analytics</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center text-white mr-16">
          <img src={AddToCart} className="w-10 h-10 mr-8" alt="add to cart" />
          <div>Hi, James</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
