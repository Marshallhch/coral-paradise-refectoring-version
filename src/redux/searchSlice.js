import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOptions } from '../utils/fetchData';
// import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
};

const searchSlice = createSlice({
  name: 'searchLists',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchLists.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSearchLists.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      });
    // .addCase(getSearchLists.rejected, (state) => {
    //   state.status = 'error';
    // });
  },
});

export const { fetchLists } = searchSlice.actions;
export default searchSlice.reducer;

export const getSearchLists = createAsyncThunk(
  'searchLists/get',
  async (args) => {
    // console.log(args);
    const data = await fetch(
      `https://airbnb13.p.rapidapi.com/search-location?location=${args.location}&checkin=${args.checkIn}&checkout=${args.checkOut}&adults=${args.adults}&children=${args.children}&pets=${args.pets}&page=1&currency=KRW`,
      getOptions
    );
    const result = await data.json();
    return result;
  }
);
