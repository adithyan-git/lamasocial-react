import React from "react";

const CloseFriends = ({ user }) => {
  return (
    <li className="flex items-center mb-[15px] cursor-pointer">
      <img
        src={user.profilePicture}
        alt="img"
        className="w-8 h-8 rounded-[50%] object-cover mr-2.5"
      />
      <span className="font-normal hover:text-gray-600 max-[792px]:text-[13px]">
        {user.username}
      </span>
    </li>
  );
};

export default CloseFriends;
