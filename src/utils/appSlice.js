import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
  name:'app',
  initialState:{
    isMenuOpen:false,
  },
  reducers:{
    addOpenMenu:(state)=>{
      state.isMenuOpen = !state.isMenuOpen;
    }
  }
})

export const {addOpenMenu} = appSlice.actions;

export default appSlice.reducer;