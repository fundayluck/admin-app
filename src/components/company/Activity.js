import React from "react";

const ActivityData = [
  {
    comment: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
    date: "Hari ini, 06:00",
  },
  {
    comment:
      "Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet",
    date: "Kemarin, 17:32",
  },
  {
    comment:
      "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
    date: "Kemarin, 17:32",
  },
];

const Activity = () => {
  return (
    <div className="bg-[#FFFFFF] h-[100%] rounded-md mb-[10px] p-5">
      <div className="flex justify-between mb-[10px]">
        <div className="text-[#545454] font-bold">Aktivitas</div>
      </div>
      {ActivityData.map((item, index) => (
        <div className="flex flex-col " key={index}>
          <span className="text-sm mb-2">{item.comment}</span>
          <span className="text-xs text-gray-400 mb-2">{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Activity;
