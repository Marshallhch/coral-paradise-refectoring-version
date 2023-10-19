import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const cartSlide = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { add, remove } = cartSlide.actions;
export default cartSlide.reducer;
