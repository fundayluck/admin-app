import React, { Fragment } from "react";
import { BiChevronRight as ChevronIcon } from "react-icons/bi";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { IoIosNotificationsOutline as NotifIcon } from "react-icons/io";
import jhon from "../assets/jhon.jpg";
import { Menu, Transition } from "@headlessui/react";
import useAuth from "../ahooks/useAuth";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({
      access_token: "",
      pass: "",
      user: "",
    });
    navigate("/login");
  };

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
        <Menu as="div" className="ml-3 relative mt-[4px]">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-5 w-5 rounded-full"
                src={jhon}
                width={10}
                height={10}
                alt="jhon"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="w-full origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="block px-16 py-2 text-sm text-gray-700"
                    onClick={logout}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {/*    */}
      </div>
    </div>
  );
};

export default Topbar;
