import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurantMenu";

const RestrauntMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurant(id);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {/* <h1>Restraunt id:{restaurant?.id}</h1> */}
        <h2>{name}</h2>
        {/* <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} alt="" />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3> */}
      </div>
      <div>
        <h1>Menu</h1>
        {categories.map((items, i) => {
          return (
            <ul key={items?.card?.info?.id}>
              <li>{items?.card?.info?.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;
