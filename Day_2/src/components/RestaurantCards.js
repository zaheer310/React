import Body from "./Body";




const RestaurantCard = ({ resDetail, extraDetail }) => {
  // const { resName, rating } = props;
  // const restaurentObj = props.resDetail;
  const {
    id,
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
          alt="res-logo"
        />
      </div>
      <h3 className="res-title">{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐️ {avgRating} Stars</h4>
      <h4>{extraDetail}</h4>
      <h4>
        {delieveryTime} | {costForTwo}
      </h4>
    </div>
  );
};

export default RestaurantCard;