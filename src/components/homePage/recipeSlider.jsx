import CholeBhature from "../../assets/recipeSlider/CholeBhature.png";
import Dosa from "../../assets/recipeSlider/Dosa.png";
import Biryani from "../../assets/recipeSlider/Biryani.png";
import Poori from "../../assets/recipeSlider/Poori.png";
import Cakes from "../../assets/recipeSlider/Cakes.png";
import Idli from "../../assets/recipeSlider/Idli.png";
import Paratha from "../../assets/recipeSlider/Paratha.png";
import Omelette from "../../assets/recipeSlider/Omelette.png";
import Vada from "../../assets/recipeSlider/Vada.png";
import Appam from "../../assets/recipeSlider/Appam.png";
import Pancakes from "../../assets/recipeSlider/Pancakes.png";
import Parotta from "../../assets/recipeSlider/Parotta.png";
import Poha from "../../assets/recipeSlider/Poha.png";
import Salad from "../../assets/recipeSlider/Salad.png";

const recipeImages = [
  { src: Paratha, alt: "Paratha" },
  { src: Dosa, alt: "Dosa" },
  { src: Biryani, alt: "Biryani" },
  { src: Poha, alt: "Poha" },
  { src: Cakes, alt: "Cakes" },
  { src: Idli, alt: "Idli" },
  { src: CholeBhature, alt: "Chole Bhature" },
  { src: Vada, alt: "Vada" },
  { src: Omelette, alt: "Omelette" },
  { src: Pancakes, alt: "Pancakes" },
  { src: Parotta, alt: "Parotta" },
  { src: Poori, alt: "Poori" },
  { src: Salad, alt: "Salad" },
  { src: Appam, alt: "Appam" }
];

export default function RecipeSlider() {
  return (
    <>
      <div className="mx-40 mt-4 text-2xl">
        <b>What's on your mind?</b>
      </div>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 mx-40 pb-12 pt-2 hide-scrollbar border-b-2">
        {recipeImages.map((image, index) => (
          <div key={index} className="flex-none">
            <img
              width={144}
              height={180}
              src={image.src}
              alt={image.alt}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
