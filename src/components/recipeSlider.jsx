import CholeBhature from "../assets/recipeSlider/CholeBhature.png"
import Dosa from "../assets/recipeSlider/Dosa.png"
import Biryani from "../assets/recipeSlider/Biryani.png"
import Poori from "../assets/recipeSlider/Poori.png"
import Cakes from "../assets/recipeSlider/Cakes.png"
import Idli from "../assets/recipeSlider/Idli.png"
import Paratha from "../assets/recipeSlider/Paratha.png"
import Omelette from "../assets/recipeSlider/Omelette.png"
import Vada from "../assets/recipeSlider/Vada.png"
import Appam from "../assets/recipeSlider/Appam.png"
import Pancakes from "../assets/recipeSlider/Pancakes.png"
import Parotta from "../assets/recipeSlider/Parotta.png"
import Poha from "../assets/recipeSlider/Poha.png"
import Salad from "../assets/recipeSlider/Salad.png"

export default function RecipeSlider() {
    return (
        <>
        <div className="mx-40 mt-4 text-2xl"><b>What's on your mind?</b></div>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 mx-40 pb-12 pt-2 hide-scrollbar border-b-2">
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Paratha}
                        alt="Image 1"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img
                        width={144} height={180}
                        src={Dosa}
                        alt="Image 2"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img
                        width={144} height={180}
                        src={Biryani}
                        alt="Image 3"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img
                        width={144} height={180}
                        src={Poha}
                        alt="Image 4"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img
                        width={144} height={180}
                        src={Cakes}
                        alt="Image 5"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img
                        width={144} height={180}
                        src={Idli}
                        alt="Image 6"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={CholeBhature}
                        alt="Image 7"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Vada}
                        alt="Image 8"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Omelette}
                        alt="Image 9"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Pancakes}
                        alt="Image 10"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Parotta}
                        alt="Image 11"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Poori}
                        alt="Image 12"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Salad}
                        alt="Image 13"
                        className=" object-cover rounded-lg"
                    />
                </div>
                <div className="flex-none">
                    <img width={144} height={180}
                        src={Appam}
                        alt="Image 14"
                        className=" object-cover rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
