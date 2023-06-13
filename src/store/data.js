import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const data = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    SET_DATA(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataActions = data.actions;
export const dataSelector = {
  data: state => state.data.data,
};
export default data.reducer;
