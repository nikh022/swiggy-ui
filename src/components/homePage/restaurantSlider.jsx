import dominos from "../../assets/restaurantSlider/dominos.jpg";
import mcDonald from "../../assets/restaurantSlider/mcDonald.jpg";
import kfc from "../../assets/restaurantSlider/kfc.jpg";
import californiaBurrito from "../../assets/restaurantSlider/californiaBurrito.jpg";
import dailyKitchen from "../../assets/restaurantSlider/dailyKitchen.jpg";
import icecream from "../../assets/restaurantSlider/icecream.jpg";
import pizzahut from "../../assets/restaurantSlider/pizzahut.jpg";
import subway from "../../assets/restaurantSlider/subway.jpg";
import wowBowl from "../../assets/restaurantSlider/wowBowl.jpg";
import ratingStar from "../../assets/ratingStar.svg";

const restaurants = [
  {
    name: "California Burrito",
    image: californiaBurrito,
    rating: 4.3,
    time: "35-40 min",
    category: "Pizzas",
    location: "Local Nagar",
  },
  {
    name: "McDonald’s",
    image: mcDonald,
    rating: 4.1,
    time: "30-35 min",
    category: "Burgers",
    location: "MG Road",
  },
  {
    name: "KFC",
    image: kfc,
    rating: 4.2,
    time: "25-30 min",
    category: "Fried Chicken",
    location: "Koramangala",
  },
  {
    name: "Daily Kitchen",
    image: dailyKitchen,
    rating: 4.5,
    time: "40-45 min",
    category: "Healthy Meals",
    location: "Indiranagar",
  },
  {
    name: "Ice Cream Factory",
    image: icecream,
    rating: 4.4,
    time: "20-25 min",
    category: "Desserts",
    location: "HSR Layout",
  },
  {
    name: "Wow Bowl",
    image: wowBowl,
    rating: 4.6,
    time: "30-35 min",
    category: "Bowls",
    location: "Jayanagar",
  },
  {
    name: "Subway",
    image: subway,
    rating: 4.0,
    time: "20-30 min",
    category: "Sandwiches",
    location: "Whitefield",
  },
  {
    name: "Pizza Hut",
    image: pizzahut,
    rating: 4.2,
    time: "30-40 min",
    category: "Pizza",
    location: "MG Road",
  },
];

export default function RestaurantSlider() {
  return (
    <>
      <div className="mx-40 mt-10 text-2xl">
        <b>Top Restaurant Chains in Bangalore</b>
      </div>
      <div className="flex flex-nowrap overflow-x-auto space-x-8 mx-40 pb-12 pt-6 px-4 hide-scrollbar border-b-2">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
          >
            <div>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="object-cover h-44 w-72 rounded-lg"
              />
            </div>
            <div>
              <div className="font-bold text-lg pt-2">{restaurant.name}</div>
              <div className="flex">
                <div>
                  <img height={24} width={24} src={ratingStar} alt="Rating" />
                </div>
                <div className="px-1 pr-2">{restaurant.rating}</div>
                <div className="font-semibold">{restaurant.time}</div>
              </div>
              <div className="text-gray-700">{restaurant.category}</div>
              <div className="text-gray-700">{restaurant.location}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
