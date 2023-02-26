import React from "react";
import { FaSearch} from 'react-icons/fa'
import "../Styles/search.css"
export const Searchbar = () => {
  return (
    <div className="searchbar" ><div><input placeholder="Search GlamGrab" /></div>
    <div><button type="submit" className="a"><FaSearch /></button></div>
    </div>
  );
};

