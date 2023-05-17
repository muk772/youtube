import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import store from "../Utils/Store";

const Header = () => {
  const dispatch = useDispatch();
 

  const handleToggle = () => {
    
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => handleToggle()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-11 mx-2 "
          alt="youtubeLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="profile"
          src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg?w=2000"
        />
      </div>
    </div>
  );
};

export default Header;
