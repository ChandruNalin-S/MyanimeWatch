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
    <div className="flex flex-col gap-[18px] pt-10 md:flex-row h-[100px] items-center justify-evenly ">

      <div className="flex md:space-x-4 mr-20">  

        <img onClick={toggleMenu} className="ml-2 mr-16 sm:mr-28   md:mr-0 h-[40px] cursor-pointer" src={MENU_URL} alt="menu"/>

        <a href="/"><img className="ml-20 sm:mr-32 md:mr-0 ml-0 h-[40px] w-[164.6px]" src={LOGO_URL} alt="logo"/></a>
      </div>

      <div className="mr-0 ml-1 md:mr-96 mt-0">

        <input ref={searchText} className="py-3 px-4 m-2 rounded-md w-96" type="text" placeholder="Search anime..." />
        <button onClick={()=>{
          //console.log(searchText.current.value);

          const animeVideo = animeVideoList.filter((video)=>{
            return video.title.toLowerCase().includes(searchText.current.value.toLowerCase());
          });

          //console.log(animeVideo);

          dispatch(findSearchAnime(animeVideo));

          searchText.current.value = null;

        }} className=" ml-[186px] font-semibold text-black bg-customPink rounded-md sm:ml-[10px] 
          md:ml-0 py-3 px-4 m-2">Search</button>

{isSearchViewed && <button onClick={()=>{
          dispatch(removeSearchAnime());
          searchText.current.value = null;
        }} className=" bg-red-600 text-white font-semibold rounded-md md: px-4 py-3 mr-2">Browse page</button>}


        <button onClick={()=>{

          const animeVideo = animeVideoList.filter((video)=>{
            return video.ranking <= 10;
          });

          dispatch(findSearchAnime(animeVideo));

        }} className="py-[13px] px-5 bg-black text-white font-semibold rounded-md">Top Rating</button>
      </div>
    </div>
  )
}


export default Header