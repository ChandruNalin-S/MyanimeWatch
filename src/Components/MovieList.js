
import React from 'react'
import { useSelector } from 'react-redux'

const MovieList = ({img,title,genres,type}) => {


  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);


  return (
    <div className={"ml-2 relative rounded-sm overflow-hidden shadow-lg  h-72 w-[45%] mb-6 sm:w-[40%]  md:w-64 h-full ml-2 "+(isMenuOpen && "w-[90%] sm:w-[40%]")}>
      <img
      src={img}
      alt="poster"
      className="w-full h-96 object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm font-semibold">{genres.join(", ")}</p>
        <span className='py-2'>{type}</span>
      </div>
  </div>
  )
}

export default MovieList
