import React from "react";
import { useSelector } from "react-redux";

const SideBar = ()=>{


  const isMenuView = useSelector((store)=> store.app.isMenuOpen);



  if(!isMenuView) return;

  return (
    <div className="w-52 p-2 bg-violet-950">
        <button className="p-2 text-white font-bold text-xl m-4">Close menu</button>
        <ul className="mt-5 text-start">
          <li className="p-2 mb-4 border-b border-b-gray-400 text-white font-semibold">Home</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 text-white font-semibold">Trending</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 text-white font-semibold">Popular</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 text-white font-semibold">Top Rating</li>
        </ul>
    </div>
  )
}


export default SideBar;