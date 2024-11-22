
import RecipeSlider from "../components/recipeSlider";
import Navbar from "../components/navbar";
import RestaurantSlider from "../components/restaurantSlider";
import Restaurents from "../components/restaurent";
import AboveFooter from "../components/aboveFooter";
import Footer from "../components/footer";

export default function FrontPage(){
    return <>
    <Navbar />
    <RecipeSlider />
    <RestaurantSlider />
    <Restaurents />
    <AboveFooter />
    <Footer />
    </>
}