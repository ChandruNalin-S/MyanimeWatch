import { createSlice } from "@reduxjs/toolkit";



const animeSlice = createSlice({
  name:'anime',
  initialState:{
    animeList:null,
    searchAnime:null,
  },
  reducers:{
    addAnimeList:(state,action)=>{
      state.animeList = action.payload;
    },

    findSearchAnime:(state,action)=>{
      state.searchAnime = action.payload;
    },

    removeSearchAnime:(state)=>{
      state.searchAnime = null;
    }

  }
})


export const {addAnimeList, findSearchAnime, removeSearchAnime} = animeSlice.actions;
export default animeSlice.reducer;