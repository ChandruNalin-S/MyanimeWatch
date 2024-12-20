import React from "react";
import { useSelector } from "react-redux";

const SideBar = ()=>{


  const isMenuView = useSelector((store)=> store.app.isMenuOpen);



  if(!isMenuView) return;

  return (
    <div className=" w-28 p-2 bg-opacity-15 text-white font-semibold sm:w-44 md:w-52">
        <button className="p-2 text-white font-bold text-xl m-4">Close menu</button>
        <ul className="mt-5 text-start">
          <li className="p-2 mb-4 border-b border-b-gray-400 ">Home</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 ">Trending</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 ">Popular</li>
          <li className="p-2 mb-4 border-b border-b-gray-400 ">Top Rating</li>
        </ul>
    </div>
  )
}


export default SideBar;