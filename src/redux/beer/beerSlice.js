import { createSlice } from "@reduxjs/toolkit";

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [],
    filter: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
      console.log(action.payload);
      Object.keys(action.payload).forEach((item) => {
        state.value.push(action.payload[item]);
      });
      state.filter = state.value;
    },
    filterBeers: (state, action) => {
      const filterBy = action.payload;
      if (!filterBy) state.filter = state.value;
      else state.filter = state.value.filter((item) => item[filterBy] > 10);
    },
  },
});

export const { setAllBeers, filterBeers } = beerSlice.actions;

export const selectBeers = (state) => state.beers;

export default beerSlice.reducer;
