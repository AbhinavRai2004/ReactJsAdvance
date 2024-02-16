import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const { restData } = props;
    const { name, cuisines, costForTwo, deliveryTime,avgRating } = restData.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="rest Image"
          src = {CDN_URL}/>
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>${costForTwo / 100} For Two</p>
        <p>{avgRating} stars</p>
        <p>Delivery Time = {deliveryTime} min</p>
      </div>
    );
};

export default ResCard;