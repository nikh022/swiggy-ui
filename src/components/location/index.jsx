import xmark from "../../assets/location/x_mark.svg";
import locationMark from "../../assets/location/locationMark.svg";
import { useEffect } from "react";

export default function Location({ onClose }) {
    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    });

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-y-0 right-0 bg-blue-950 bg-opacity-50 w-2/3"
            ></div>
            <div className="w-1/3 absolute z-20 bg-white pb-80">
                <div className="p-6 ml-1">
                    <button onClick={onClose}>
                        <img height={25} width={25} src={xmark} />
                    </button>
                </div>

                <div>
                    <input
                        className="border border-gray-500 pr-20 p-3 w-4/5 ml-8"
                        placeholder="Search for area, street name.."
                    />
                </div>
                <div className="mt-7 w-4/5 ml-8 p-4 border border-gray-500">
                    <div className="flex">
                        <div>
                            <img height={23} width={23} src={locationMark} />
                        </div>
                        <div className="pl-2 font-semibold">Get current location</div>
                    </div>
                    <div className="text-sm text-gray-400 pl-8">Using GPS</div>
                </div>
                <div className="mt-7 w-4/5 ml-8 p-4 pl-12 border border-gray-500">
                    <div className="text-xs text-gray-500 pb-4">RECENT SEARCHES</div>
                    <div>
                        <div></div>
                        <div className="font-semibold">Bengaluru</div>
                    </div>
                    <div className="text-xs pt-1">Karnataka, India</div>
                </div>
            </div>
        </>
    );
}
