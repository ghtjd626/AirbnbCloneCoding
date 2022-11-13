import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div
        className="flex items-center md:border-2 rounded-full
        py-2 md:shadow-sm"
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-500 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
        md:mx-2 text-white rounded-full p-2 cursor-pointer"
        />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-400">
        <p className="cursor-pointer hidden md:flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
