import React from "react";
import Image from "../../assets/signin/wrap.svg";
import xmark from "../../assets/signin/x_mark.svg";

export default function SignIn({ onClose }) {
    return (
        <>
            <div onClick={onClose} className="fixed inset-0 bg-blue-950 bg-opacity-50 w-2/3"></div>
            <div className="w-1/3 absolute z-20 right-0 bg-white pb-80">
                <div className="ml-8 mt-5">
                    <button onClick={onClose}>
                        {" "}
                        <img height={25} width={25} src={xmark} />
                    </button>
                </div>
                <div className="flex">
                    <div className="mr-20 pl-10 pt-10">
                        <div className="font-semibold text-4xl pb-2">Login</div>
                        <div>
                            <div className="flex">
                                <div>or</div>
                                <div className="pl-2 text-orange-600">create an account</div>
                            </div>
                        </div>
                    </div>
                    <div className="pr-10 pt-10">
                        <img src={Image} />
                    </div>
                </div>
                <div className="pl-10 mt-20">
                    <input
                        className="border border-gray-500 pl-6 pr-20 p-4"
                        placeholder="Phone number"
                    ></input>
                </div>
                <div className="pl-10 pr-20 mt-5">
                    <div className="flex justify-center text-white text-sm font-bold bg-orange-600 p-3">
                        LOGIN
                    </div>
                </div>
            </div>
        </>
    );
}
