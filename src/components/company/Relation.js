import React from "react";
import { BiShareAlt as ShareIcon } from "react-icons/bi";

const relationData = [
  {
    count: 20,
    label: "Memiliki",
  },
  {
    count: 108,
    label: "Menggunakan",
  },
  {
    count: 67,
    label: "Meminjam",
  },
];

const Relation = () => {
  return (
    <div className="bg-[#FFFFFF] w-auto h-auto rounded-md mb-[10px] p-5">
      <div className="flex justify-between mb-[10px]">
        <div className="text-[#545454] font-bold">Relasi</div>
        <div className="text-[#7da682]">Lihat Semua</div>
      </div>
      {relationData.map((item, index) => (
        <div className="flex items-center" key={index}>
          <ShareIcon fontSize={25} className="mr-[10px]" />
          <div className="grid mb-4">
            <span className="text-xl font-bold text-black">{item.count}</span>
            <span className="text-gray-400 text-xs">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Relation;
