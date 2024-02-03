import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/config";
import UserContext from "../utils/UserContext";

const RestrauantCard = ({ data }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}${data.info?.cloudinaryImageId}`} />
      <h2 className="font-bold text-xl">{data.info?.name}</h2>
      <h3>{data.info?.cuisines.join(", ")}</h3>
      <h4>{data.info?.sla.lastMileTravelString}</h4>
      <h5 className="font-bold ">{user.name}</h5>
    </div>
  );
};

export default RestrauantCard;
