import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import NewsCard from "../NewsCard";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [newsData, setNewsData] = useState([]);
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(`http://127.0.0.1:5000/search`, null, {
        params: { query: searchInput },
      })
      .then((response) => {
        setNewsData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <div className="search-wrapper">
        <input
          className="search-bar"
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit" className="search-button" onClick={handleSubmit}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <NewsCard newsData={newsData} />
    </React.Fragment>
  );
};

export default SearchBar;
