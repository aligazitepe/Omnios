import { createSlice } from "@reduxjs/toolkit";

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [],
    filter: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
      Object.keys(action.payload).forEach((item) =>
        state.value.push(action.payload[item])
      );
    },
    filterBeers: (state, action) => {
      const filterBy = action.payload;
      if (filterBy === "ABV") {
        state.filter = state.value.filter((item) => item.abv > 10 );
      } else if (filterBy === "IBU") {
        state.filter = state.value.filter((item) => item.ibu > 10);
      }
      else {
        state.filter=state.value;
      }
    },
  },
});

export const { setAllBeers, filterBeers } = beerSlice.actions;

export const selectBeers = (state) => state.beers;

export default beerSlice.reducer;
