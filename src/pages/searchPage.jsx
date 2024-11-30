import Navbar from "../components/homePage/navbar";
import CuisineSlider from "../components/searchPage/cuisineSlider";


export default function SearchPage(){
     return <>
     <Navbar />
     <div>
          <input className="w-2/3 align-middle mx-48 p-4 mt-10 border border-gray-400" placeholder="Search for Restaurent and food" />
     </div>
     <CuisineSlider />
     </>
}