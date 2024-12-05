import { createSlice } from "@reduxjs/toolkit";



const animeSlice = createSlice({
  name:'anime',
  initialState:{
    animeList:null,
  },
  reducers:{
    addAnimeList:(state,action)=>{
      state.animeList = action.payload;
    }
  }
})


export const {addAnimeList} = animeSlice.actions;
export default animeSlice.reducer;