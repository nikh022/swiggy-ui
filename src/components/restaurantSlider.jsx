import dominos from "../assets/restaurantSlider/dominos.jpg";
import mcDonald from "../assets/restaurantSlider/mcDonald.jpg";
import kfc from "../assets/restaurantSlider/kfc.jpg";
import californiaBurrito from "../assets/restaurantSlider/californiaBurrito.jpg";
import dailyKitchen from "../assets/restaurantSlider/dailyKitchen.jpg";
import icecream from "../assets/restaurantSlider/icecream.jpg";
import pizzahut from "../assets/restaurantSlider/pizzahut.jpg";
import subway from "../assets/restaurantSlider/subway.jpg";
import wowBowl from "../assets/restaurantSlider/wowBowl.jpg";

export default function RestaurantSlider() {
    return (
        <>
            <div className="mx-40 mt-10 text-2xl">
                <b>Top restaurant chain in banglore</b>
            </div>
            <div className="flex flex-nowrap overflow-x-auto space-x-8 mx-40 pb-12 pt-4 hide-scrollbar border-b-2">
                <div className="flex-none">
                    <div>
                        <img
                            src={californiaBurrito}
                            alt="Image 1"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={mcDonald}
                            alt="Image 2"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={kfc}
                            alt="Image 3"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={dailyKitchen}
                            alt="Image 4"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={icecream}
                            alt="Image 5"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={wowBowl}
                            alt="Image 6"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={subway}
                            alt="Image 7"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
                <div className="flex-none">
                    <div >
                        <img
                            src={pizzahut}
                            alt="Image 8"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div>Pizza Hut</div>
                        <div>4.3 35-40min</div>
                        <div>Pizzas</div>
                        <div>Shanti Nagar</div>
                    </div>
                </div>
            </div>
        </>
    );
}
