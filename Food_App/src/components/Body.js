import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import restaurantList from "./../utils/mockData";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [FilterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilterList(restaurantList);
  }, []);

  // if no dependency array useEffect is called on every render
  // if dependency array is empty = [] useEffect is called on initial render(just once)
  // if dependency array is [FilterList]  => called everytime the FilterList is updated.

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
      <div className="top-body">
        <div className="searchBox">
          <input
            type="text"
            className="search-ip"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              setFilterList(
                ListOfRestaurant.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterList(
              ListOfRestaurant.filter((res) => res.data.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {FilterList.map((restaurant) => (
          <ResCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
