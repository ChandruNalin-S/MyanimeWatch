import React, { useRef } from "react"
import { LOGO_URL, MENU_URL } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addOpenMenu } from "../utils/appSlice";
import { findSearchAnime, removeSearchAnime } from "../utils/animeSlice";

const Header = ()=>{


  const animeVideoList = useSelector((store)=> store.anime.animeList);

  const isSearchViewed = useSelector((store)=> store.anime.searchAnime);

  const dispatch = useDispatch();

  const searchText = useRef(null);


  const toggleMenu = ()=>{
    dispatch(addOpenMenu());
  }


  return (
    <div className="h-[100px] grid grid-flow-col items-center place-content-evenly">

      <div className="flex col-span-4 space-x-4">
        <img onClick={toggleMenu} className="h-[40px]" src={MENU_URL} alt="menu"/>
        <a href="/"><img className="h-[40px] w-[164.6px]" src={LOGO_URL} alt="logo"/></a>
      </div>

      <div className="col-span-8">

        { isSearchViewed && <button onClick={()=>{
          dispatch(removeSearchAnime());
          searchText.current.value = null;
        }} className="px-4 py-3 bg-red-600 text-white font-semibold rounded-md">Browse page</button>}

        <input ref={searchText} className="py-3 px-4 m-2 rounded-md w-96" type="text" placeholder="Search anime..." />
        <button onClick={()=>{
          //console.log(searchText.current.value);

          const animeVideo = animeVideoList.filter((video)=>{
            return video.title.toLowerCase().includes(searchText.current.value.toLowerCase());
          });

          console.log(animeVideo);

          dispatch(findSearchAnime(animeVideo));
          
          searchText.current.value = null;

        }} className="py-3 px-4 m-2 font-semibold text-black bg-customPink rounded-md">Search</button>
        <button className="px-4 py-3 bg-black text-white font-semibold rounded-md">Top Rating</button>
      </div>
    </div>
  )
}


export default Header