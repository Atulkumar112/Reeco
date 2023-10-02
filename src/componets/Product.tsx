import React, { useEffect, useState } from "react";
import Apple from "../assets/icons/Avocado Hass.jpg";
import { AddProduct, FetchProductList } from "../redux/Action";
import { connect, useDispatch } from "react-redux";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  total: number;
}

interface ProductTableProps {
  product: {
    productList: Product[];
  };
}

const Product: React.FC<ProductTableProps> = (props) => {
  useEffect(() => {
    props.loadProduct();
  }, []);

  const [approvedState, setApprovedState] = useState<{
    [key: number]: boolean;
  }>({});
  const [missingState, setMessingState] = useState<{ [key: number]: boolean }>(
    {},
  );

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const [showAdd, setShowAdd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = price * quantity;
    const prodObj = { name, brand, price, quantity, total };
    dispatch(AddProduct(prodObj));
  };

  const toggleAdd = () => {
    setShowAdd((current) => !current);
  };

  const toggleApproved = (rowId: number) => {
    setApprovedState((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  const toggleMessing = (rowId: number) => {
    setMessingState((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  return (
    <section className=" w-screen h-screen fixed">
      <div className=" relative shadow-2xl bg-white mr-20 ml-20 h-2/3  mt-7 border-gray-300 border overflow-y-scroll">
        {showAdd && (
          <form
            className="shadow-2xl absolute bg-white mr-20 ml-20 h-96  mt-7 border-gray-300 border z-10"
            onSubmit={handleSubmit}
          >
            <div className="w-96 m-10">
              <div className="m-2 place-items-center grid ">
                {/* <p>Name</p> */}
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border px-2 border-gray-400 rounded-sm my-2 text-black"
                  name=""
                  id=""
                />
                {/* <p>Brand</p> */}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="border px-2 border-gray-400 rounded-sm my-2 text-black"
                />
                {/* <p>Price</p> */}
                <input
                  type="number"
                  name=""
                  id=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className="px-2 border border-gray-400 rounded-sm my-2 text-black"
                />
                {/* <p>Quantity</p> */}
                <input
                  type="number"
                  name=""
                  id=""
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter Quantity"
                  className="border px-2 border-gray-400 rounded-sm my-2 text-black"
                />
                <p>Total Price = {price * quantity}</p>
              </div>
              <div className="flex justify-between mx-20 my-5">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-red-600 text-white"
                  onClick={toggleAdd}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-green-600 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="flex justify-between">
          <div className="border-2 border-gray-300 rounded-lg mt-4 ml-9">
            <input type="text" placeholder="Search..." className="ml-5 mt-1" />
          </div>

          <button
            type="button"
            className="border-green-800 border-solid border-2  text-green-800 rounded-xl px-5 py-1 font-bold mt-4 mr-10"
            onClick={toggleAdd}
          >
            Add Item
          </button>
        </div>

        <div className="m-5">
          <table className="w-full ">
            <thead className="h-10">
              <tr className="">
                <th className="border border-gray-300">Product Name</th>
                <th className="border border-gray-300">Brand</th>
                <th className="border border-gray-300">Price</th>
                <th className="border border-gray-300">Quantity</th>
                <th className="border border-gray-300">Total</th>
                <th className="border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="drop-shadow-md h-20">
              {props.product.productList &&
                props.product.productList.map((item) => (
                  <tr className="border-b " key={item.id}>
                    <td className="flex">
                      {" "}
                      <img
                        src={Apple}
                        alt=""
                        className="w-16 h-16 mt-2 ml-2 "
                      />
                      {item.name}
                    </td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.total}</td>
                    <td className="w-28 flex mt-3">
                      <p
                        className={`bg-yellow-500 px-3 py-1 rounded-lg text-white ${
                          approvedState[item.id] ? "block" : "hidden"
                        }`}
                      >
                        Missing
                      </p>
                      <p
                        className={`bg-green-500 px-3 py-1 rounded-lg text-white ${
                          missingState[item.id] ? "block" : "hidden"
                        }`}
                      >
                        Approved
                      </p>
                      {/* <p className="bg-red-500 px-3 py-1 rounded-lg text-white">Missing-Urgent</p> */}
                      <button
                        className="mx-2"
                        onClick={() => toggleMessing(item.id)}
                      >
                        &#9745;
                      </button>
                      <button
                        className="mx-2"
                        onClick={() => toggleApproved(item.id)}
                      >
                        &#9746;
                      </button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => {
  return {
    product: state.product,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
  return {
    loadProduct: () => dispatch(FetchProductList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
