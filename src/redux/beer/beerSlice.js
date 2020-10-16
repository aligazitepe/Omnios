import { createSlice } from '@reduxjs/toolkit';

export const beerSlice = createSlice({
  name: 'beers',
  initialState: {
    value: [],
  },
  reducers: {
    setAllBeers: (state, action) => {
       state.value = action.payload; 
    },
  },
});

export const { setAllBeers } = beerSlice.actions;


export const selectBeers = state => state.beers;

export default beerSlice.reducer;
