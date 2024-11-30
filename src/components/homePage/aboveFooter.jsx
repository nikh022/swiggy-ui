export default function AboveFooter() {
    const cities = [
        "Bangalore",
        "Pune",
        "Mumbai",
        "Delhi",
        "Delhi",
        "Delhi",
        "Delhi",
        "Delhi",
        "Delhi",
        "Delhi",
        "Delhi",
    ];

    const cuisines = [
        "Chinese Restaurants Near Me",
        "South Indian Restaurants Near Me",
        "Indian Restaurants Near Me",
        "Kerela Restaurants Near Me",
        "Korean Restaurants Near Me",
        "Seafood Restaurants Near Me",
        "Bengali Restaurants Near Me",
        "Punjabi Restaurants Near Me",
        "Italian Restaurants in Delhi",
        "Andhra Restaurants Near Me",
        "North Indian Restaurants Near Me",
    ];

    const explorations = [
        "Explore Restaurants Near Me",
        "Explore Top Rated Restaurants Near Me",
    ];

    return (
        <div className="mx-24 my-7">
            <div>
                <div className="text-2xl ml-4">
                    <b>Best Places to Eat Across Cities</b>
                </div>
                <div className="grid grid-cols-4 my-5">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-2xl font-semibold flex justify-center items-center text-center mx-5 p-3 mb-5"
                        >
                            Best Restaurants in {city}
                        </div>
                    ))}
                    <div className="border border-gray-400 rounded-2xl flex justify-center items-center text-center mx-5 p-3 mb-5">
                        <div className="font-bold">Show More</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-2xl ml-4">
                    <b>Best Cuisines Near Me</b>
                </div>
                <div className="grid grid-cols-4 my-5">
                    {cuisines.map((cuisine, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-2xl font-semibold flex justify-center items-center text-center mx-5 p-3 mb-5"
                        >
                            {cuisine}
                        </div>
                    ))}
                    <div className="border border-gray-400 rounded-2xl flex justify-center items-center text-center mx-5 p-3 mb-5">
                        <div className="font-bold">Show More</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-2xl ml-4">
                    <b>Explore Every Restaurant Near Me</b>
                </div>
                <div className="grid grid-cols-4 my-5">
                    {explorations.map((exploration, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-2xl font-semibold flex justify-center items-center text-center mx-5 p-3 mb-5"
                        >
                            {exploration}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
