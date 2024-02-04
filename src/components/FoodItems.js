import React from "react";
import { IMG_CDN_URL } from "../utils/config";
const Fooditems = ({ name, description, imageId, defaultPrice }) => {
  console.log(imageId, name, description, defaultPrice);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}${imageId}`} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>Describtion:{description}</h3>
      <h3>Rs:{defaultPrice / 100}</h3>
    </div>
  );
};

export default Fooditems;
