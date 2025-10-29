import React from "react";
import { users } from "../../../dummyData";
import OnlineFriends from "../online/OnlineFriends";
const RightBar = ({ Profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center ">
          <img
            src="./src/assets/posts/gift-box.png"
            alt="img"
            className="w-10 h-10 mr-2.5"
          />
          <span className="font-light text-[15px]">
            <b> Pola Foster </b> and <b>3 other friends </b> have a birthday
            toady
          </span>
        </div>
        <img
          src="./src/assets/posts/ui-ux.png"
          alt="img"
          className="w-full rounded-[10px] my-[30px] mx-0"
        />
        <h4 className="font-medium mb-5 ">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="font-medium text-[18px] mb-2.5">User information</h4>
        <div className="mb-[30px]">
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500  ">City:</span>
            <span className="font-light max-[792px]:text-[13px]">New York</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500">From:</span>
            <span className="font-light max-[792px]:text-[13px]">Madrid</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500">
              Relationship:
            </span>
            <span className="font-light max-[792px]:text-[13px]">Single</span>
          </div>
        </div>
        <h4 className="font-medium text-[18px] mb-2.5">User friends</h4>
        <div className="flex flex-wrap justify-between gap-2.5 max-[788px]:justify-center">
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/spider.png"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              spiderman
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/chottabeam.jpeg"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px] max-[792px]:text-[13px]">
              chottabeam
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/jerry.webp"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">jerry</span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/mickeymouse.jpeg"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              mickeymouse
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/tom.webp"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">tom</span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src="./src/assets/person/pickachu.png"
              alt="img"
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              pickachu
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="flex-[3.5] max-[483px]:hidden">
      <div className="pt-5 pr-5 pb-0 pl-0">
        {Profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default RightBar;
