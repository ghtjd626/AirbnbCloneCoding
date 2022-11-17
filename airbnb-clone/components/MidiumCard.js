import React from "react";
import Image from "next/image";

const MidiumCard = (item) => {
  return (
    <div
      className="cursor-pointer hover:scale-105
    transform transition duration-200 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={item.img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">title</h3>
    </div>
  );
};

export default MidiumCard;
