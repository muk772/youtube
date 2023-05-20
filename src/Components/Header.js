import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import store from "../Utils/Store";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../Utils/Constant";
import { cacheResults } from "../Utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cacheResult = useSelector((store) => store.searchSlice);

  useEffect(() => {
    //make an api call for every key press but as soon as the digfference between key stroke time is
    //less than 200ms decline the api call

    const timer = setTimeout(() => {
      if (cacheResult[searchQuery]) {
        setShowSuggestions(cacheResult[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white shadow-lg rounded-lg py-2 px-5 w-[31rem] border border-gray-100">
            <ul>
              {suggestions.map((suggestions, index) => {
                return (
                  <li className="py-2 px-3 hover:bg-gray-100" key={index}>
                    🔍 {suggestions}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
