import mcDonald from "../../assets/restaurantSlider/mcDonald.jpg";
import ratingStar from "../../assets/ratingStar.svg";
import FilterBar from "./filterBar";

const restaurants = [
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
  {
    name: "McDonald's",
    image: mcDonald,
    rating: 4.3,
    time: "35-40 min",
    category: "Burgers, Beverages",
    location: "Local Nagar"
  },
];

export default function Restaurants() {
  return (
    <>
      <div className="mx-40 my-7">
        <div className="text-2xl">
          <b>Restaurants with online food delivery in Bangalore</b>
        </div>
        <FilterBar />
        <div className="grid grid-cols-4 gap-8 pb-12">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="mt-6 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
            >
              <div>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="object-cover h-32 w-52 rounded-xl"
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
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
      </div>
    </>
  );
}
