import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResCardMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

//   if (resInfo == null) return <h1>Loading</h1>;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[0]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   console.log(itemCards);

  return (
    <div className="menu">
      {/* <h1>{name}</h1>

      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.cards.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.cards.info.default.price / 100}
          </li>
        ))}
      </ul> */}
      <h1>Restaurant List Menu</h1>
    </div>
  );
};

export default ResCardMenu;
