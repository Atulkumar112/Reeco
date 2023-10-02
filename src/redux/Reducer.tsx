import { PayloadAction } from "@reduxjs/toolkit";
import {
  ADD_PRODUCT,
  FAIL_REQUEST,
  GET_PRODUCT_LIST,
  MAKE_REQUEST,
} from "./ActionType";

const initialState = {
  loading: true,
  productList: [],
  productObj: {},
  errmessage: "",
};

export const Reducer = (
  state = initialState,
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_PRODUCT_LIST:
      return {
        loading: false,
        errmessage: "",
        productList: action.payload,
        productObj: {},
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
