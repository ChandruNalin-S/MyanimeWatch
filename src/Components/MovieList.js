
import React from 'react'

const MovieList = ({img,title,genres,type}) => {
  return (
    <div className="relative w-64 rounded-sm overflow-hidden shadow-lg ml-6 mb-6">
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
