import { IMG_CDN_URL } from "../config";

const RestrauantCard = ({ data }) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${data.info?.cloudinaryImageId}`} />
      <h2>{data.info?.name}</h2>
      <h3>{data.info?.cuisines.join(", ")}</h3>
      <h4>{data.info?.sla.lastMileTravelString} kms</h4>
    </div>
  );
};

export default RestrauantCard;
