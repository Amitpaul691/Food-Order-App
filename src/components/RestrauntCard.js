import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/config";
import UserContext from "../utils/UserContext";

const RestrauantCard = ({ cloudinaryImageId, name, cuisines }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h4>{data.info?.sla.lastMileTravelString}</h4> */}
      <h5 className="font-bold ">
        {user.name}-{user.email}
      </h5>
    </div>
  );
};

export default RestrauantCard;
