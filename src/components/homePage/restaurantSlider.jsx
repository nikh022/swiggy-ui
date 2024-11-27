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

export default function RestaurantSlider() {
    return (
        <>
            <div className="mx-40 mt-10 text-2xl">
                <b>Top restaurant chain in banglore</b>
            </div>
            <div className="flex flex-nowrap overflow-x-auto space-x-8 mx-40 pb-12 pt-6 px-4 hide-scrollbar border-b-2">
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={californiaBurrito}
                            alt="Image 1"
                            className="object-cover h-44 w-72 rounded-xl"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={mcDonald}
                            alt="Image 2"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={kfc}
                            alt="Image 3"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={dailyKitchen}
                            alt="Image 4"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={icecream}
                            alt="Image 5"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={wowBowl}
                            alt="Image 6"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={subway}
                            alt="Image 7"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
                <div className="flex-none transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 ..">
                    <div>
                        <img
                            src={pizzahut}
                            alt="Image 8"
                            className="object-cover h-44 w-72 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg pt-2">California Burrito</div>
                        <div className="flex">
                            <div>
                                <img height={24} width={24} src={ratingStar} />
                            </div>
                            <div className="px-1 pr-2">4.3</div>
                            <div className="font-semibold">35-40 min</div>
                        </div>
                        <div className="text-gray-700">Pizzas</div>
                        <div className="text-gray-700">Local Nagar</div>
                    </div>
                </div>
            </div>
        </>
    );
}
