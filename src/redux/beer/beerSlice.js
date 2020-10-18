import { createSlice } from "@reduxjs/toolkit";

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [],
    shown: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
      action.payload.forEach((item) => state.value.push(item));
      state.shown = new Array(...state.value);
    },
    filterBeers: (state, action) => {
      console.log(action.payload);
      if (action.payload && action.payload.filterAmount !== "Choose...") {
        const { filterBy, filterAmount } = action.payload;
        state.shown = state.value.filter(
          (item) => item[filterBy] > filterAmount
        );
      } else {
        state.shown = state.value;
      }
    },
  },
});

export const { setAllBeers, filterBeers } = beerSlice.actions;

export const selectBeers = (state) => state.beers;

export default beerSlice.reducer;
