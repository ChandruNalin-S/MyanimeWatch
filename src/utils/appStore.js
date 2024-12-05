import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import animeSlice from './animeSlice';


const appStore = configureStore({
  reducer:{
    app:appSlice,
    anime:animeSlice,
  }
});


export default appStore;