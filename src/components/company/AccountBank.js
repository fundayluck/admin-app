import React from "react";
import { AiOutlinePlus as AddIcon } from "react-icons/ai";
import { RiVisaLine as VisaIcon } from "react-icons/ri";
import { BiPencil as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

const AcountDataBank = [
  {
    bank: "Bank KB BUKOPIN",
    account: "****0876 - Yusron Taufiq",
    currency: "IDR",
  },
  {
    bank: "CitiBank, NA",
    account: "****5525 - Si Tampan",
    currency: "USD",
  },
];

const AccountBank = () => {
  return (
    <div className="bg-[#FFFFFF] w-auto h-auto rounded-md mb-[10px] p-5">
      <div className="flex justify-between items-center mb-[10px]">
        <div className="text-[#545454] font-bold">Akun Bank</div>
        <button className="w-full items-center inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#35763b] text-base font-medium text-[#f6f8f6] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
          <AddIcon fontSize={15} className="mr-1" />
          Tambah Akun Bank
        </button>
      </div>
      {AcountDataBank.map((item, index) => (
        <div className="grid grid-cols-2 m-1" key={index}>
          <div className="grid place-items-end rounded-md bg-gradient-to-r from-[#f4e557] to-[#95ad09] w-[130px] h-[100px]">
            <VisaIcon color="white" fontSize={40} className="m-2" />
          </div>
          <div className="grid content-between ml-[-40px]">
            <div className="flex justify-between">
              <div className="text-[#545454] font-bold text-sm">
                {item.bank}
              </div>
              <div className="flex ">
                <EditIcon />
                <DeleteIcon />
              </div>
            </div>
            <div className="grid">
              <span className="text-gray-400 text-xs">{item.account}</span>
              <span className="text-gray-400 text-xs">{item.currency}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountBank;
