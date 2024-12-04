import React from "react"
import { LOGO_URL, MENU_URL } from "../utils/Constants"
import { useDispatch } from "react-redux"
import { addOpenMenu } from "../utils/appSlice";

const Header = ()=>{

  const dispatch = useDispatch();


  const toggleMenu = ()=>{
    dispatch(addOpenMenu());
  }


  return (
    <div className="h-[100px] grid grid-flow-col items-center place-content-evenly bg-violet-950">

      <div className="flex col-span-4 space-x-4">
        <img onClick={toggleMenu} className="h-[40px]" src={MENU_URL} alt="menu"/>
        <a href="/"><img className="h-[40px] w-[164.6px]" src={LOGO_URL} alt="logo"/></a>
      </div>

      <div className="col-span-8">
        <input className="py-3 px-4 m-2 rounded-md w-96" type="text" placeholder="Search anime..." />
        <button className="py-3 px-4 m-2 font-semibold text-black bg-pink-400 rounded-md">Search</button>
        <button className="px-4 py-3 bg-black text-white font-semibold rounded-md">Filter</button>
      </div>
    </div>
  )
}


export default Header