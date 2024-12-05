import React from 'react'
import MovieList from './MovieList';

const SearchResults = ({videos}) => {

  if(!videos) return;

  return(
    <div className="flex flex-wrap">
      {videos.map((video)=>{
        return <MovieList key={video._id} img={video.image} title={video.title} genres={video.genres} type={video.type} />
      })}
    </div>
  )
}

export default SearchResults
