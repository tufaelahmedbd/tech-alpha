import { configureStore } from "@reduxjs/toolkit";

import productReducer, {
  productsFetching,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(productsFetching());
