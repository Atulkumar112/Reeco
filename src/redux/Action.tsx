import axios from "axios";
import {
  ADD_PRODUCT,
  FAIL_REQUEST,
  GET_PRODUCT_LIST,
  MAKE_REQUEST,
} from "./ActionType";
import { toast } from "react-toastify";

export interface IAddProduct {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  total: number;
}

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err: unknown) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getProductList = (data: []) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: data,
  };
};

export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const FetchProductList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dispatch: any) => {
    dispatch(makeRequest());
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        const productList = res.data;
        dispatch(getProductList(productList));
        
      })// eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const AddProduct = (data: IAddProduct) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dispatch: any) => {
    dispatch(makeRequest());
    axios
      .post("http://localhost:8000/products", data)
      .then(() => {
        dispatch(addProduct());
        toast.success(
          "product add successfully. please refresh the page to see the item",
        );
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
