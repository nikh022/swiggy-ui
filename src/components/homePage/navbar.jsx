import SwiggyLogo from "../../assets/navbar_icons/swiggy_logo.svg";
import downSymbol from "../../assets/navbar_icons/chevron_down.svg";
import corporateImg from "../../assets/navbar_icons/swiggy_corporate.svg";
import searchSymbol from "../../assets/navbar_icons/search.svg";
import offerSymbol from "../../assets/navbar_icons/offer.svg";
import signinSymbol from "../../assets/navbar_icons/signin.svg";
import helpSymbol from "../../assets/navbar_icons/help.svg";
import cartSymbol from "../../assets/navbar_icons/cart.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/");
    }
    const handleClick2 = () => {
        navigate("/search");
    }
    return (
        <>
            <div className="flex p-3 px-7 bg-white shadow-md sticky top-0 z-50 ">
                <div className="flex w-1/3">
                    <div onClick={handleClick1} className="w-1/5 pt-1 cursor-pointer">
                        <img src={SwiggyLogo} />
                    </div>
                    <div
                        className="flex w-4/5 p-4 text-sm"
                    >
                        <button className="pr-3 text-gray-700 font-bold underline">
                            Other
                        </button>
                        <button className="text-gray-500">
                            Bengluru, Karnataka, India
                        </button>
                        <img
                            className="pl-2 pt-1 cursor-pointer"
                            height={25}
                            width={30}
                            src={downSymbol}
                        ></img>
                    </div>
                </div>
                <div className="flex justify-between w-2/3 grid-cols-7 p-4 text-gray-700 font-semibold">
                    <div></div>
                    <div className="flex cursor-pointer hover:text-orange-600">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={corporateImg} />
                        </div>
                        <div>Swiggy Corporate</div>
                    </div>
                    <div onClick={handleClick2} className="flex cursor-pointer hover:text-orange-600">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={searchSymbol} />
                        </div>
                        <div>Search</div>
                    </div>
                    <div className="flex cursor-pointer hover:text-orange-600">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={offerSymbol} />
                        </div>
                        <div className="relative">
                            Offers
                            <span className="absolute top-0 right-0 transform  translate-x-6 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-1 rounded-full">
                                NEW
                            </span>
                        </div>
                    </div>
                    <div className="flex cursor-pointer hover:text-orange-600">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={helpSymbol} />
                        </div>
                        <div>Help</div>
                    </div>
                    <div
                        className="flex items-center hover:text-orange-600 cursor-pointer"

                    >
                        <img
                            src={signinSymbol}
                            height={28}
                            width={28}
                            className="pr-2 pt-1"
                        />
                        <div>Sign In</div>
                    </div>
                    <div className="flex cursor-pointer hover:text-orange-600">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={cartSymbol} />
                        </div>
                        <div>Cart</div>
                    </div>
                </div>
            </div>
        </>
    );
}
