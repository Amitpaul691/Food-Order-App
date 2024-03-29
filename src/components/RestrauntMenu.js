import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurantMenu";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const resInfo = useRestaurant(id);
  // console.log(resInfo?.cards[0]?.card?.card?.info);

  const handleAddItems = (data) => {
    dispatch(addItems(data));
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories[0].card.card);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="flex justify-around">
      <div>
        {/* <h1>Restraunt id:{restaurant?.id}</h1> */}
        <h2>{name}</h2>
        {/* <h2>{cuisines}</h2> */}
        {/* <h2>{costForTwoMessage}</h2> */}
        <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="" />
        {/* <h3>{restaurant?.area}</h3> */}
        {/* <h3>{restaurant?.city}</h3> */}
        {/* <h3>{restaurant?.avgRating}</h3> */}
        {/* <h3>{restaurant?.costForTwoMessage}</h3> */}
      </div>

      <div>
        <h1>Menu</h1>
        {categories.map((items, i) => {
          return (
            <ul key={i}>
              <>
                {items?.card?.card?.itemCards?.map((items, i) => {
                  console.log(items?.card?.info?.name);
                  return (
                    <li>
                      {items?.card?.info?.name}
                      <button
                        className="bg-green-100 p-2 m-5"
                        onClick={() => handleAddItems(items?.card?.info)}
                      >
                        Add item
                      </button>
                    </li>
                  );
                })}
              </>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;
