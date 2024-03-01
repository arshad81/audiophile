import { useState } from "react";

import hamburgerIcon from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png"


import TopbarMenuItems from "./topbarMenuItems";

const Header = () => {
    const [subMenu,setSubMenu] = useState(false)
  return (
    <div className="relative z-20">
      <div className="flex justify-between items-center px-6 py-9 lg:px-0">
        <img
          className="w-4 h-auto lg:hidden"
          src={hamburgerIcon}
          alt="Hamburger Icon"
          onClick={()=>{setSubMenu(!subMenu)}}
        />
        <img className="w-36 h-auto" src={logo} alt="Logo" />
        <ul className="hidden lg:flex gap-9 text-primary-grey">
          <li className="uppercase hover:text-primary hover:cursor-pointer">
            Home
          </li>
          <li className="uppercase hover:text-primary hover:cursor-pointer">
            HEADPHONES
          </li>
          <li className="uppercase hover:text-primary hover:cursor-pointer">
            SPEAKERS
          </li>
          <li className="uppercase hover:text-primary hover:cursor-pointer">
            EARPHONES
          </li>
        </ul>
        <img
          className="w-6 h-auto hover:cursor-pointer"
          src={cart}
          alt="Cart"
        />
      </div>
      <div className={`${subMenu ? 'scale-1 ' : 'scale-y-0'} absolute z-20 w-full bg-white text-black overflow-hidden transition-all duration-150 origin-top md:flex justify-between px-6 gap-3 rounded-b-lg`}>
        <TopbarMenuItems img={headphone} title="Headphones"  />
        <TopbarMenuItems img={speaker} title="Speakers"  />
        <TopbarMenuItems img={earphone} title="EARPHONES"  />
      </div>
    </div>
  );
};

export default Header;
