import { createSlice } from "@reduxjs/toolkit";

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [],
    shown: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
      action.payload &&
        action.payload.forEach((item) => state.value.push(item));
      state.shown = state.value;
    },
    filterBeers: (state, action) => {
      if (action.payload) {
        const { filterType, filterAmount } = action.payload;
        state.shown = state.value.filter(
          (item) => item[filterType] > filterAmount
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
