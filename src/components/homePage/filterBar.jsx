import filterSign from "../../assets/filterBar/filterSign.svg";
import downSymbol from "../../assets/filterBar/downSymbol.svg"

export default function FilterPanel() {
    return (
        <>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 pt-4 hide-scrollbar">
                <div className="flex border-b-2 border-blue-500 rounded-2xl px-3 pr-7 py-1 whitespace-nowrap">
                    <div> Filter</div>
                    <img className="mt-1 ml-1" width={18} height={18} src={filterSign} />
                </div>

                <div className="flex border-b-2 border-blue-500 rounded-2xl px-3 pr-6 py-1 whitespace-nowrap">
                    
                    <div>Sort By</div>
                    <img className="mt-2 pl-1" width={20} height={20} src={downSymbol} />
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Fast Delivery
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    New on Swiggy
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Rating 4.0+
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Pure Veg
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Rs. 300-Rs. 600
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Less than Rs. 300
                </div>
                <div className="border-b-2 border-blue-500 rounded-2xl px-3 py-1 whitespace-nowrap">
                    Fast food
                </div>
            </div>
        </>
    );
}
