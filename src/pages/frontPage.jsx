import RecipeSlider from "../components/homePage/recipeSlider";
import Navbar from "../components/homePage/navbar";
import RestaurantSlider from "../components/homePage/restaurantSlider";
import Restaurents from "../components/homePage/restaurent";
import AboveFooter from "../components/homePage/aboveFooter";
import Footer from "../components/homePage/footer";

export default function FrontPage() {
    return <>
        <Navbar />
        <RecipeSlider />
        <RestaurantSlider />
        <Restaurents />
        <AboveFooter />
        <Footer />
    </>
}