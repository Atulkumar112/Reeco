import React from "react";

const Header: React.FC = () => {
  return (
    <section
      className="bg-white h-20 shadow-lg flex justify-between items-center

    w-screen"
    >
      <div className="ml-24 mt-5">
        <div className="flex">
          <p>Order &gt; </p> <p className="underline"> 32457ABC</p>
        </div>

        <h1 className="text-xl font-bold mt-3">Order 32457ABC</h1>
      </div>

      <div className="">
        <div className="mt-7">
          <button className="border-green-800 border-solid mr-5	border-2  text-green-800 rounded-xl px-5 py-1 font-bold">
            Back
          </button>
          <button className="bg-green-700 text-white rounded-xl px-3 py-1 mr-20">
            Approve order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
