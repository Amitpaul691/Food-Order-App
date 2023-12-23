import { useState } from "react";
import { restaruantList } from "../config";
import RestrauantCard from "./RestrauntCard";

const Body = () => {
  const [searchText, setSearchText] = useState(""); //to create state variable
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-button">Search</button>
      <div className="restaruant-list">
        {restaruantList.map((data, i) => (
          <RestrauantCard data={data} key={i} />
          // <RestrauantCard {...data.info} /> we can try this also
        ))}
      </div>
    </div>
  );
};
export default Body;
