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

    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurant;
