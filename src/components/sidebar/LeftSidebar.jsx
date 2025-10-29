import React, { useState } from "react";
import { BiSolidBookmarkStar, BiSolidVideos } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import {
  MdChat,
  MdGroups,
  MdOutlineRssFeed,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import CloseFriends from "../closefriend/CloseFriends";
import { users } from "../../../dummyData";

const LeftSidebar = ({ status }) => {
  const sideBarArray = [
    {
      id: 1,
      title: "Feed",
      image: <MdOutlineRssFeed />,
    },
    {
      id: 2,
      title: "Chat",
      image: <MdChat />,
    },
    {
      id: 3,
      title: "Videos",
      image: <BiSolidVideos />,
    },
    {
      id: 4,
      title: "Groups",
      image: <MdGroups />,
    },
    {
      id: 5,
      title: "Bookmarks",
      image: <BiSolidBookmarkStar />,
    },
    {
      id: 6,
      title: "Questions",
      image: <GoQuestion />,
    },
    {
      id: 7,
      title: "Jobs",
      image: <MdOutlineWorkOutline />,
    },
    {
      id: 8,
      title: "Events",
      image: <RiCalendarEventFill />,
    },
    {
      id: 9,
      title: "Courses",
      image: <FaGraduationCap />,
    },
  ];

  const show = status;
  return (
    <>
      <div className="flex-3 h-[calc(100vh-50px)] overflow-y-scroll  sticky top-[50px] max-[788px]:hidden  max-[788px]:fixed max-[788px]:bg-white max-[788px]:z-10 max-[788px]:top-[50px]  max-[788px]:left-0   max-[788px]:shadow-[0px_0px_2px_0px] shadow-gray-400">
        <div className="p-5 ">
          <ul className="p-0 m-0 list-none">
            {sideBarArray.map((details) => (
              <li
                className="flex items-center mb-[30px] cursor-pointer"
                key={details.id}
              >
                <span className="mr-[15px] h-5 w-5"> {details.image}</span>
                <span className="font-medium text-[18px] hover:text-gray-600  max-[1282px]:text-[13px]">
                  {details.title}
                </span>
              </li>
            ))}
          </ul>
          <button className="w-[150px] max-[792px]:w-fit border-0 p-2.5  rounded-[5px] font-normal bg-gray-100 cursor-pointer hover:bg-gray-200 transform transition-all duration-300 max-[792px]:text-[13px]">
            Show More
          </button>
          <hr className=" my-5 my-[ 0px]" />
          <ul className="p-0 m-0 list-none">
            {users.map((user) => (
              <CloseFriends user={user} key={user.id} />
            ))}
          </ul>
        </div>
      </div>
      {show ? (
        <div className=" pb-5 h-[calc(100vh-50px)] min-[788px]:hidden  overflow-y-scroll max-[788px]:w-fit   max-[788px]:fixed max-[788px]:bg-white max-[788px]:z-10 max-[788px]:top-[50px]  max-[788px]:left-0   max-[788px]:shadow-[0px_0px_2px_0px] shadow-gray-400">
          <div className="p-5 ">
            <ul className="p-0 m-0 list-none">
              {sideBarArray.map((details) => (
                <li
                  className="flex items-center mb-[30px] cursor-pointer"
                  key={details.id}
                >
                  <span className="mr-[15px] h-5 w-5"> {details.image}</span>
                  <span className="font-medium text-[18px] hover:text-gray-600  max-[792px]:text-[13px]">
                    {details.title}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-[150px] max-[792px]:w-fit border-0 p-2.5  rounded-[5px] font-normal bg-gray-100 cursor-pointer hover:bg-gray-200 transform transition-all duration-300 max-[792px]:text-[13px]">
              Show More
            </button>
            <hr className=" my-5 my-[ 0px]" />
            <ul className="p-0 m-0 list-none">
              {users.map((user) => (
                <CloseFriends user={user} key={user.id} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LeftSidebar;
