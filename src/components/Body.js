import { useContext, useEffect, useState } from "react";
import RestrauantCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useonline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaruants, setAllRestaruants] = useState([]);
  const [filterRestaruants, setFilterRestaruants] = useState([]);
  const [searchText, setSearchText] = useState(""); //to create state variable

  useEffect(() => {
    getResturant();
  }, []);

  const { user, setUser } = useContext(UserContext);
  const getResturant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5858027&lng=88.4899995&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[1]);
    setAllRestaruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      "first",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>offline,please check your internet connection!!</h1>;
  }

  // if (!allRestaruants) return null;

  return allRestaruants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" ">
      <div className="p-5 bg-purple-50 my-5">
        <input
          type="text"
          placeholder="Search"
          className="focus-within:bg-green-200 p-2 m-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-1 m-2 bg-purple-900 hover:bg-purple-600 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaruants);
            setFilterRestaruants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({ name: e.target.value, email: "amit@gmail.com" })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filterRestaruants.map((data, i) => (
          <Link to={`/restruant/${data?.info?.id}`} key={data?.info?.id}>
            <RestrauantCard {...data?.info} />
          </Link>
          // <RestrauantCard {...data.info} /> we can try this also
        ))}
      </div>
    </div>
  );
};
export default Body;
