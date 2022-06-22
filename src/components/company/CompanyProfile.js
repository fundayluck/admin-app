import React from "react";
import company from "../../assets/company.png";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { HiOutlinePhone as PhoneIcon } from "react-icons/hi";
import { BsGlobe as WebIcon } from "react-icons/bs";
import { BsPencil as EditIcon } from "react-icons/bs";

const CompanyProfile = () => {
  return (
    <div className="bg-[#FFFFFF] w-[300px] rounded-md mb-[10px] mr-[25px]">
      <div className="bg-[url('./assets/banner.jpg')] flex h-[100px] rounded-t-lg"></div>
      <div className="flex justify-center align-center">
        <img
          src={company}
          width={120}
          height={120}
          alt="company"
          className="bg-[#ffffff] align-center rounded-full shadow-md mt-[-65px] mb-[20px]"
        />
      </div>
      <div className="grid place-items-center">
        <h1 className="text-md font-bold">Mitramas Infosys Global</h1>
        <span className="text-sm text-gray-400 mb-[15px]">Layanan IT</span>
        <div className="flex items-center">
          <EditIcon />
          <span className="text-gray-400 ml-[10px]">Sunting Profil</span>
        </div>
      </div>
      <div className="grid ml-[15px] mt-[10px] m-4">
        <span className="text-sm text-gray-400 mb-2">Status Perusahaan</span>
        <h1 className="text-sm font-bold text-[#949494] mb-2">Aktif</h1>
        <span className="text-sm text-gray-400 mb-2">Singkatan</span>
        <span className="text-sm font-medium text-[#949494] mb-2">MIG</span>
        <span className="text-sm text-gray-400 mb-2">Alamat Perusahaan</span>
        <span className="text-xs font-medium text-[#949494] mb-2">
          Jl. Tebet Raya No. 42, Jakarta Selatan
        </span>
        <span className="text-sm text-gray-400 mb-2">Penanggung Jawab PIC</span>
        <span className="text-sm font-medium text-[#949494] mb-2">
          Jhon Doe
        </span>
        <span className="text-sm text-gray-400 mb-2">Tanggal PKP</span>
        <span className="text-sm font-medium text-[#949494] mb-2">
          03 Maret 2021
        </span>
        <span className="text-sm text-gray-400 mb-2">E-mail</span>
        <span className="text-sm text-[#81a986] underline flex items-center mb-2">
          <EmailIcon className="mr-[5px]" color="#81a986" />
          mig@mitrasolusi.group
        </span>
        <span className="text-sm text-gray-400 mb-2">No. Telp</span>
        <span className="text-sm text-[#639568] flex items-center mb-2">
          <PhoneIcon className="mr-[5px]" />
          021-5678-1234
        </span>
        <span className="text-sm text-gray-400 mb-2">Situs Web</span>
        <span className="text-sm text-[#639568] underline flex items-center mb-2">
          <WebIcon className="mr-[5px]" />
          mitramas.com
        </span>
      </div>
    </div>
  );
};

export default CompanyProfile;
