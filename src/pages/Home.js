import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="w-full pl-[100px] pr-[20px] ">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
