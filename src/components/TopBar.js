import React from "react";
import { BiChevronRight as ChevronIcon } from "react-icons/bi";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { IoIosNotificationsOutline as NotifIcon } from "react-icons/io";
import jhon from "../assets/jhon.jpg";

const Topbar = () => {
  return (
    <div className="w-full flex pt-[10px] justify-between">
      <div className="flex mb-5">
        <span className="text-gray-400">Perusahaan</span>
        <ChevronIcon
          width={10}
          height={10}
          className="text-gray-400 mt-[6px]"
        />{" "}
        Mitramas Infosys Global
      </div>
      <div className="flex ">
        <SearchIcon width={10} height={10} className="mt-[6px] ml-2" />
        <NotifIcon width={10} height={10} className="mt-[6px] ml-2" />
        <img
          src={jhon}
          width={10}
          height={10}
          alt="jhon"
          className="rounded-full w-[20px] h-[20px] mt-[4px] ml-8 mr-2"
        />
        <span>Jhon Doe</span>
      </div>
    </div>
  );
};

export default Topbar;
