import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import restaurantList from "./../utils/mockData";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //optional chaining.
  // setListOfRestaurant(json?.cards[4]?.card?.card?.getElements?.infoWithStyle?.restaurants);
  // };

  return (
    <div className="body">
      <div className="searchBox">search</div>
      <button
        className="filter-btn"
        onClick={() => {
          setListOfRestaurant(
            ListOfRestaurant.filter((res) => res.data.avgRating > 4)
          );
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant) => (
          <ResCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
