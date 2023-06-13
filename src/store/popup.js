import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  movie: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    OPEN_POPUP(state, action) {
      state.isOpen = true;
      let movie = action.payload;
      state.movie = movie;
    },
    CLOSE_POPUP(state) {
      state.isOpen = false;
      state.movie = null;
    },
  },
});

export const popupActions = popupSlice.actions;
export const popupSelector = {
  isOpen: state => state.popup.isOpen,
  movie: state => state.popup.movie,
};
export default popupSlice.reducer;
