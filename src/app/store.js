import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "../redux/beer/beerSlice"

export default configureStore({
  reducer: {
    beers: beerReducer,
  },
});
