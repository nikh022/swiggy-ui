import filterSign from "../../assets/filterBar/filterSign.svg";
import downSymbol from "../../assets/filterBar/downSymbol.svg";

export default function FilterPanel() {
  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 pt-4 hide-scrollbar">
        <div className="flex items-center border-b-2 border-blue-500 rounded-2xl px-3 pr-7 py-1 whitespace-nowrap cursor-pointer">
          <div>Filter</div>
          <img className="mt-1 ml-1" width={18} height={18} src={filterSign} alt="Filter icon" />
        </div>

        <div className="flex items-center border-b-2 border-blue-500 rounded-2xl px-3 pr-6 py-1 whitespace-nowrap cursor-pointer">
          <div>Sort By</div>
          <img className="mt-2 pl-1" width={20} height={20} src={downSymbol} alt="Sort by icon" />
        </div>

        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Fast Delivery
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          New on Swiggy
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Rating 4.0+
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Pure Veg
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Rs. 300-Rs. 600
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Less than Rs. 300
        </div>
        <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap cursor-pointer">
          Fast food
        </div>
      </div>
    </>
  );
}
