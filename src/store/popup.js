import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    OPEN_POPUP(state, action) {
      state.isOpen = true;
      let movie = action.payload;
    },
  },
});

export const popupActions = popupSlice.actions;
export const popupSelector = {
  isOpen: state => state.popup.state,
};
export default popupSlice.reducer;
