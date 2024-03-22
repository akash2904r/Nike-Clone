import { navLinks, navIcons } from "../constants"
import Logo from "/svg/logo.svg"
import Search from "/svg/search.svg"
import Heart from "/svg/heart.svg"
import Bag from "/svg/bag.svg"

// import { useState } from "react"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 h-16">
      <div className="cursor-pointer">
        <img 
          src={Logo} 
          height={55} 
          width={75} 
        />
      </div>

      <ul className="hidden lg:flex gap-5 items-center">
        {navLinks.map((item) => (
          <li 
            key={item.name} 
            className="font-semibold cursor-pointer"
          >
            {item.name}
          </li>
        ))}

        <li className="group/searchBar flex ml-10">
          <div className="bg-gray-100 py-2 pr-3 pl-2 rounded-l-full cursor-pointer group-hover/searchBar:bg-gray-200/90">
            <img src={Search} width={25} height={25} />
          </div>
          <input
            placeholder="Search"
            type="text"
            className="bg-gray-100 placeholder:font-medium py-2 rounded-r-full w-36 outline-none group-hover/searchBar:bg-gray-200/90 group-hover/searchBar:placeholder:text-black"
          />
        </li>
        <li className="heart cursor-pointer p-1.5 rounded-full hover:bg-gray-200">
          <img src={Heart} width={25} height={25} />
        </li>
        <li className="bag cursor-pointer p-1.5 rounded-full hover:bg-gray-200">
          <img src={Bag} width={25} height={25} />
        </li>
      </ul>

      <ul className="flex gap-6 lg:hidden">
        {navIcons.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <img src={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
