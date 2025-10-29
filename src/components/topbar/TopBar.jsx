import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import LeftSidebar from "../sidebar/LeftSidebar";
import menubar from "../../assets/person/menu-bar.png";
import person from "../../assets/person/person1.JPG";
import menu from "../../assets/posts/menu.png";

const TopBar = () => {
  const [show, setShow] = useState(false);

  const showNav = () => {
    setShow(true);
  };

  const closeNav = () => {
    setShow(false);
  };

  const [showSidebar, setshowSidebar] = useState(false);

  const handleSidebar = () => {
    setshowSidebar(true);
  };
  const handleCloseSidebar = () => {
    setshowSidebar(false);
  };
  return (
    <div className="flex w-full h-[50px] bg-blue-500 sticky top-0 items-center z-10 relative">
      <div className=" ml-5 w-fit h-fit  bg-blue-500    max-[788px]:block min-[788px]:hidden ">
        {showSidebar ? (
          <img
            src={menubar}
            alt="img"
            className="h-6 w-6  object-cover"
            onClick={() => handleCloseSidebar()}
          />
        ) : (
          <img
            src={menubar}
            alt=""
            className="h-6 w-6 object-cover"
            onClick={() => handleSidebar()}
          />
        )}
      </div>
      <div className="flex-3 max-[1025px]:flex-1">
        <span className="font-bold ml-5 text-[24px] max-[426px]:text-[18px] text-white cursor-pointer hover:text-gray-200">
          LamaSocial
        </span>
      </div>

      <div className="flex-5 max-[1025px]:hidden ">
        <div className="w-full h-[30px] bg-white rounded-[30px] flex items-center  ">
          <IoSearch className="text-[20px] ml-2.5" />
          <input
            type="text"
            placeholder="Search for friend or post,video"
            className="border-0 w-[70%] focus:outline-0"
          />
        </div>
      </div>
      <div className="flex-4 flex items-center justify-around text-white max-[1025px]:hidden">
        <div>
          <span className="mr-2.5 text-[14px] cursor-pointer  hover:text-gray-200">
            Homepage
          </span>
          <span className="mr-2.5 text-[14px] cursor-pointer  hover:text-gray-200">
            Timeline
          </span>
        </div>
        <div className="flex ">
          <div className="mr-[15px] cursor-pointer relative ">
            <IoPerson className=" hover:text-gray-200" />
            <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
              1
            </span>
          </div>
          <div className="mr-[15px] cursor-pointer relative">
            <MdChat className=" hover:text-gray-200" />
            <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
              1
            </span>
          </div>
          <div className="mr-[15px] cursor-pointer relative">
            <IoMdNotifications className=" hover:text-gray-200" />
            <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
              1
            </span>
          </div>
        </div>
        <img
          src={person}
          alt="img"
          className="w-8 h-8 rounded-[50%] object-cover"
        />
      </div>

      {show ? (
        <div className="absolute top-[50px] right-0 bg-white h-fit w-fit p-5 shadow-[0px_0px_5px_0px_var(--tw-shadow-color)] shadow-gray-300 rounded-b-[5px] max-[1025px]:visible min-[1025px]:hidden  ">
          <div className=" flex flex-col justify-around text-blue-500 ">
            <div className="flex justify-end mb-5">
              <img
                src={person}
                alt="img"
                className="w-8 h-8 rounded-[50%] object-cover"
              />
            </div>
            <div className="flex flex-col mb-5">
              <span className="mr-2.5 text-[14px] cursor-pointer  hover:text-gray-200 mb-2.5">
                Homepage
              </span>
              <span className="mr-2.5 text-[14px] cursor-pointer  hover:text-gray-200">
                Timeline
              </span>
            </div>
            <div className="flex justify-between mb-5 ">
              <div className="mr-[15px] cursor-pointer relative ">
                <IoPerson className=" hover:text-gray-200" />
                <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
                  1
                </span>
              </div>
              <div className="mr-[15px] cursor-pointer relative">
                <MdChat className=" hover:text-gray-200" />
                <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
                  1
                </span>
              </div>
              <div className="mr-[15px] cursor-pointer relative">
                <IoMdNotifications className=" hover:text-gray-200" />
                <span className="w-[15px] h-[15px] rounded-[50%] bg-red-600 text-white absolute top-[-7px] right-[-9px] flex justify-center items-center text-[12px]">
                  1
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[30px] rounded-[30px] flex items-center  bg-gray-200">
              <IoSearch className="text-[20px] ml-2.5 mr-2.5" />
              <input
                type="text"
                placeholder="Search here.."
                className="border-0 w-full focus:outline-0  text-[12px]"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className=" min-[1025px]:hidden max-[1025px]:visible flex   justify-end max-[1025px]:flex-1 pr-5">
        {show ? (
          <img
            src={menu}
            alt=""
            className="w-6 h-6 "
            onClick={() => closeNav()}
          />
        ) : (
          <img
            src={menu}
            alt=""
            className="w-6 h-6 "
            onClick={() => showNav()}
          />
        )}
      </div>
      {showSidebar ? <LeftSidebar status={showSidebar} /> : null}
    </div>
  );
};

export default TopBar;
