import filterSign from "../../assets/filterBar/filterSign.svg";
import downSymbol from "../../assets/filterBar/downSymbol.svg";

export default function FilterPanel() {
  const filters = [
    "Fast Delivery",
    "New on Swiggy",
    "Rating 4.0+",
    "Pure Veg",
    "Rs. 300 - Rs. 600",
    "Less than Rs. 300",
    "Fast food",
  ];

  return (
    <div className="flex flex-nowrap overflow-x-auto space-x-4 pt-4 hide-scrollbar">
      
      <div className="flex items-center border-b-2 border-blue-500 rounded-2xl px-3 pr-7 py-1 whitespace-nowrap cursor-pointer">
        <div>Filter</div>
        <img
          className="ml-1 mt-1"
          width={18}
          height={18}
          src={filterSign}
          alt="Filter icon"
        />
      </div>

      <div className="flex items-center border-b-2 border-blue-500 rounded-2xl px-3 pr-6 py-1 whitespace-nowrap cursor-pointer">
        <div>Sort By</div>
        <img
          className="pl-1 mt-2"
          width={20}
          height={20}
          src={downSymbol}
          alt="Sort by icon"
        />
      </div>

      {filters.map((filter, index) => (
        <div
          key={index}
          className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer"
        >
          {filter}
        </div>
      ))}
      
    </div>
  );
}
