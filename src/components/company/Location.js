import React from "react";
import { BiBuildingHouse as ParentIcon } from "react-icons/bi";
import { BsWrench as Level1Icon } from "react-icons/bs";
import { TbBuildingWarehouse as WerehouseIcon } from "react-icons/tb";

const Location = () => {
  return (
    <div className="bg-[#FFFFFF] w-auto h-auto rounded-md mb-[10px] p-5">
      <div className="flex justify-between mb-[10px]">
        <div className="text-[#545454] font-bold">Location</div>
        <div className="text-[#7da682]">Lihat Semua</div>
      </div>
      <div className="flex">
        <div className="flex justify-between items-center bg-[#42934a] m-2 w-full h-[100px] rounded-md p-2">
          <ParentIcon className="text-[50px]" color="white" />
          <div className="text-center">
            <h1 className="text-xl font-bold text-white">20</h1>
            <div className="text-[#addab0]"> induk</div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#50b058] m-2 w-full h-[100px] rounded-md p-2">
          <Level1Icon className="text-[50px]" color="white" />
          <div className="text-right">
            <h1 className="text-xl font-bold text-white">3</h1>
            <div className="text-[#addab0]">Sub Lokasi Level 1</div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#6dbd74] m-2 w-full h-[100px] rounded-md p-2">
          <WerehouseIcon className="text-[50px]" color="white" />
          <div className="text-right">
            <h1 className="text-xl font-bold text-white">1</h1>
            <div className="text-[#addab0]">Sub Lokasi Level 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
