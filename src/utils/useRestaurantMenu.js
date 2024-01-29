import { useEffect, useState } from "react";
import { MENU_API } from "./config";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestruantInfo();
  }, [resId]);

  const getRestruantInfo = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
  return resInfo;
};

export default useRestaurant;
