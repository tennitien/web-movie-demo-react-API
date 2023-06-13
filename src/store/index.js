import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import dataReducer from './data';
const store = configureStore({
  reducer: {
    data: dataReducer,
    popup: popupReducer,
  },
});

export default store;
