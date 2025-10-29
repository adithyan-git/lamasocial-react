import React from "react";
import TopBar from "../topbar/TopBar";
import SideBar from "../sidebar/sidebar";
import Feed from "../feed/feed";
import RightBar from "../rightbar/rightbar";

const Profile = () => {
  return (
    <div className="relative">
      <TopBar />
      <div className="flex w-full">
        <SideBar />
        <div className="flex-9 ">
          <div className="">
            <div className="h-80 relative max-[792px]:h-[250px]">
              <img
                src="./src/assets/person/marvel.jpg"
                alt="img"
                className="w-full h-[250px] object-cover max-[792px]:h-[200px]"
              />
              <img
                src="./src/assets/person/marvel2.jpeg"
                alt="img"
                className="w-[150px] h-[150px] rounded-[50%] object-cover absolute left-0 right-0 m-auto top-[150px] max-[792px]:top-[100px]  border-[3px] border-solid border-white"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-[24px] font-medium">Marvel</h4>
              <span className="font-light">Hello My Friends</span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <RightBar Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
