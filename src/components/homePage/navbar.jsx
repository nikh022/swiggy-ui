import SwiggyLogo from "../../assets/navbar_icons/swiggy_logo.svg";
import downSymbol from "../../assets/navbar_icons/chevron_down.svg";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Search,
  Tag,
  HelpCircle,
  User,
  ShoppingCart,
} from "lucide-react";

const navItems = [
  {
    id: "corporate",
    text: "Corporate",
    icon: Briefcase,
    path: null,
  },
  {
    id: "search",
    text: "Search",
    icon: Search,
    path: "/search",
  },
  {
    id: "offers",
    text: "Offers",
    icon: Tag,
    path: null,
    badge: "NEW",
  },
  {
    id: "help",
    text: "Help",
    icon: HelpCircle,
    path: null,
  },
  {
    id: "signIn",
    text: "Sign In",
    icon: User,
    path: null,
  },
  {
    id: "cart",
    text: "Cart",
    icon: ShoppingCart,
    path: null,
  },
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex p-3 px-7 bg-white shadow-md sticky top-0 z-50 ">
        <div className="flex w-1/3">
          <div onClick={handleClick1} className="w-1/5 pt-1 cursor-pointer">
            <img src={SwiggyLogo} />
          </div>
          <div className="flex w-4/5 p-4 text-sm">
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
        <div className="flex flex-wrap justify-center md:justify-end w-full md:w-2/3 items-center text-gray-700 font-semibold md:space-x-8 space-x-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={item.path ? () => navigate(item.path) : undefined}
              className="flex items-center cursor-pointer hover:text-orange-600 transition-colors duration-200 p-2 rounded-md"
            >
              <item.icon className="w-5 h-5 mr-2" />
              <div className="relative">
                {item.text}
                {item.badge && (
                  <span className="absolute -top-2 right-0 transform translate-x-full -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
