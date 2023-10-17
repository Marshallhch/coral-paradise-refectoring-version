import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchLists: searchSlice,
  },
});

export default store;
