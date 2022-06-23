import React from "react";
import logo from "../assets/logo.png";
import { TbBuildingSkyscraper as CompanyProfile } from "react-icons/tb";
import { RiHome8Line as Home } from "react-icons/ri";
import { TbUsers as AddCustomer } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const dataSidebar1 = [
  {
    path: "/home",
    logo: <Home color="#B2B2B2" />,
  },
  {
    path: "/company",
    logo: <CompanyProfile color="#B2B2B2" />,
  },
];

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="fixed bg-[#FFFFFF] w-[60px] h-[100%] box-border shadow-lg">
        <img src={logo} alt="logo" className="pb-[10px]" />
        {dataSidebar1.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex w-[60px] h-[40px] justify-center items-center bg-[#EBF2EC] border-l-[5px] border-l-[#8FB493]"
                : "flex w-[60px] h-[40px] justify-center items-center hover:bg-[#EBF2EC]"
            }
            key={index}
            to={item.path}
          >
            {item.logo}
          </NavLink>
        ))}
        <div className="flex w-[60px] h-[20px] justify-center items-center"></div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex w-[60px] h-[40px] justify-center items-center bg-[#EBF2EC] border-l-[5px] border-l-[#8FB493] "
              : "flex w-[60px] h-[40px] justify-center items-center hover:bg-[#EBF2EC]"
          }
          to="/customer"
        >
          <AddCustomer color="#B2B2B2" />
        </NavLink>
      </div>
      {children}
    </>
  );
};

export default Sidebar;
