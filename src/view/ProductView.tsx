import React from "react";
import Header from "../componets/Header";
import Navbar from "../componets/Navbar";
import Product from "../componets/Product";

const ProductView: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Product />
    </>
  );
};

export default ProductView;
