import SwiggyLogo from "../assets/navbar_icons/swiggy_logo.svg";
import downSymbol from "../assets/navbar_icons/chevron_down.svg";
import corporateImg from "../assets/navbar_icons/swiggy_corporate.svg";
import searchSymbol from "../assets/navbar_icons/search.svg";
import offerSymbol from "../assets/navbar_icons/offer.svg";
import signinSymbol from "../assets/navbar_icons/signin.svg";
import helpSymbol from "../assets/navbar_icons/help.svg";
import cartSymbol from "../assets/navbar_icons/cart.svg";
import SignIn from "./login/signin";
import { useState } from "react";

export default function Navbar() {
    const [showSignIn, setShowSignIn] = useState(false);
    return (
        <>
            {showSignIn && <SignIn />}
            <div className="flex p-3 px-7 shadow-md">
                <div className="flex w-1/3">
                    <div className="w-1/5 pt-1">
                        <img src={SwiggyLogo} />
                    </div>
                    <div className="flex w-4/5 p-4 text-sm">
                        <div className="pr-3 text-gray-700 font-bold underline">Other</div>
                        <div className="text-gray-500">Bengluru, Karnataka, India</div>
                        <img className="pl-2" height={25} width={30} src={downSymbol}></img>
                    </div>
                </div>
                <div className="flex justify-between w-2/3 grid-cols-7 p-4 text-gray-700 font-semibold">
                    <div></div>
                    <div className="flex">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={corporateImg} />
                        </div>
                        <div>Swiggy Corporate</div>
                    </div>
                    <div className="flex">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={searchSymbol} />
                        </div>
                        <div>Search</div>
                    </div>
                    <div className="flex">
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
                    <div className="flex">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={helpSymbol} />
                        </div>
                        <div>Help</div>
                    </div>
                    <div className="flex">
                        <div className="pr-2 pt-1">
                            <img height={21} width={21} src={signinSymbol} />
                        </div>
                        <div>
                            {" "}
                            <button
                                onClick={() => {
                                    setShowSignIn(true);
                                }}
                            >
                                Sign In{" "}
                            </button>
                        </div>
                    </div>
                    <div className="flex">
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
