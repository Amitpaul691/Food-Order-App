import { useEffect, useState } from "react";
import { restaruantList } from "../config";
import RestrauantCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaruants, setAllRestaruants] = useState([]);
  const [filterRestaruants, setFilterRestaruants] = useState([]);
  const [searchText, setSearchText] = useState(""); //to create state variable
  const filterData = (searchText, restaruants) => {
    const filterData = restaruants.filter((restaruants) =>
      restaruants?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  };
  useEffect(() => {
    getResturant();
  }, []);
  const getResturant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5677246&lng=88.3707226&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!allRestaruants) return null;

  if (filterRestaruants?.length === 0)
    return <h1>NO Restruant match your Filter!!</h1>;

  return filterRestaruants.length === 0 ? (
    <Shimmer />
  ) : (
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
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, allRestaruants);
          setFilterRestaruants(data);
        }}
      >
        Search
      </button>
      <div className="restaruant-list">
        {filterRestaruants.map((data, i) => (
          <RestrauantCard data={data} key={i} />
          // <RestrauantCard {...data.info} /> we can try this also
        ))}
      </div>
    </div>
  );
};
export default Body;
