import biryani from "../../assets/cuisines/biryani.avif";
import burger from "../../assets/cuisines/burger.avif";
import cake from "../../assets/cuisines/cake.avif";
import chinese from "../../assets/cuisines/chinese.avif";
import dessert from "../../assets/cuisines/dessert.avif";
import iceCream from "../../assets/cuisines/iceCream.avif";
import northIndian from "../../assets/cuisines/northIndian.avif";
import pizza from "../../assets/cuisines/pizza.avif";
import rolls from "../../assets/cuisines/rolls.avif";
import sandwich from "../../assets/cuisines/sandwich.avif";
import southIndian from "../../assets/cuisines/southIndian.avif";
import tea from "../../assets/cuisines/tea.avif";

const cuisineImages = [
    { src: tea, alt: "Paratha" },
    { src: southIndian, alt: "Dosa" },
    { src: sandwich, alt: "sandwich" },
    { src: rolls, alt: "rolls" },
    { src: pizza, alt: "pizza" },
    { src: northIndian, alt: "northIndian" },
    { src: iceCream, alt: "iceCream" },
    { src: dessert, alt: "dessert" },
    { src: chinese, alt: "chinese" },
    { src: cake, alt: "cake" },
    { src: burger, alt: "burger" },
    { src: biryani, alt: "biryani" },
];

export default function CuisineSlider() {
    return (
        <>
            <div className="mx-48 mt-4 text-xl text-gray-600">
                <b>Popular Cuisines</b>
            </div>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 mx-48 pt-2 hide-scrollbar">
                {cuisineImages.map((image, index) => (
                    <div key={index} className="flex-none">
                        <img width={80} height={80} src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </>
    );
}
