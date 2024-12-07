import React, { useEffect } from 'react'
import SideBar from './SideBar';
import { options, url } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimeList } from '../utils/animeSlice';
import MovieContainer from './MovieContainer';
import SearchResults from './SearchResults';

const Body = () => {


  const animevideos = useSelector((store)=>store.anime.animeList)

  const showSearchView = useSelector((store)=> store.anime.searchAnime);

  const MenuOpen = useSelector((store)=>store.app.isMenuOpen);

  const dispatch = useDispatch();


  useEffect(()=>{
    !animevideos && videoData();
  },[]);

  const videoData = async()=>{
    const data =  await fetch(url,options);
    const json  = await data.json();
    console.log(json.data);

    dispatch(addAnimeList(json.data));

  }

  return (
    <>
    <div className='flex mt-36 sm:mt-16 md:mt-0'>
      <div>
        <SideBar />
      </div>
      <div className='ml-4 sm:ml-24 md:ml-20 mt-8 '>
       <h2 className={'font-bold text-customPink text-2xl mb-4 ml-1 md:ml-4 '+(MenuOpen && "ml-4")}>Top Ranking Movies and Series</h2>
        {
          showSearchView ? (<SearchResults  videos={showSearchView} />) : (<MovieContainer/>)
        }
        
      </div>
    </div>
    </>
    
  )
}

export default Body
