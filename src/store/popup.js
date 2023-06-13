import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  id: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    OPEN_POPUP(state, action) {
      state.isOpen = true;
      let id = action.payload;
      state.id = id;
    },
    CLOSE_POPUP(state) {
      state.isOpen = false;
      state.id = null;
    },
  },
});

export const popupActions = popupSlice.actions;
export const popupSelector = {
  isOpen: state => state.popup.isOpen,
  id: state => state.popup.id,
};
export default popupSlice.reducer;
