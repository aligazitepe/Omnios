import { createSlice } from "@reduxjs/toolkit";

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [],
    shown: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
      console.log(action.payload)
      action.payload.forEach((item) =>
        state.value.push(item)
      );
      state.shown=new Array(...state.value);
    },
    filterBeers: (state, action) => {
      const filterBy = action.payload;
      if (filterBy) {
        state.shown = state.value.filter((item) => item[filterBy] > 10 );
      } 
      else {
        state.shown=state.value;
      }
    },
  },
});

export const { setAllBeers, filterBeers } = beerSlice.actions;

export const selectBeers = (state) => state.beers;

export default beerSlice.reducer;
