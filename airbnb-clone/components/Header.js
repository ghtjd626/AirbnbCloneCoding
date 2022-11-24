import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [noOfGuests, setNoOfGuests] = useState("1");

  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: selectionRange[0].startDate.toISOString(),
        endDate: selectionRange[0].endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          alt="홈 아이콘"
          onClick={() => router.push("/")}
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-500 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search  "}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
        md:mx-2 text-white rounded-full p-2 cursor-pointer"
          onClick={() => search()}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={(item) => setSelectionRange([item.selection])}
            ranges={selectionRange}
            rangeColors={["#FD5B61"]}
            months={1}
            direction="horizontal"
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
              type={"number"}
              min={"1"}
              className="outline-none w-12 pl-2 text-red-400"
            />
          </div>
          <div className="flex text-lg ">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button onClick={() => search()} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
