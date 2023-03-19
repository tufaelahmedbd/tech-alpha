import { configureStore } from "@reduxjs/toolkit";

import productReducer, {
  productsFetching,
} from "../features/products/productSlice";
import cartReducer from "../features/products/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetching());
