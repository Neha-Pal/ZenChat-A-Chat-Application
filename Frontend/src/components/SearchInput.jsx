import React from 'react';
import { CiSearch } from "react-icons/ci";
import './SearchInput.css';

const SearchInput = () => {
  return (
    <div className="search-input-wrapper">
      <form>
        <input 
          type="text" 
          placeholder="Search.." 
          className="search-input"
        />
        <button type="submit" className="search-btn">
          <CiSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
