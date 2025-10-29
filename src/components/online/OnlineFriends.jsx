import React from "react";

const OnlineFriends = ({ user }) => {
  console.log(user);

  return (
    <li className="flex items-center mb-[15px]">
      <div className="mr-2.5 relative">
        <img
          src={user.profilePicture}
          alt="img"
          className="w-10 h-10 rounded-[50%] object-cover"
        />
        <span className="w-3 h-3 bg-green-400 absolute rounded-[50%] top-[-0.5px] right-0 border-2 border-solid border-white"></span>
      </div>
      <span className="font-medium cursor-pointer hover:text-gray-600">
        {user.username}
      </span>
    </li>
  );
};

export default OnlineFriends;
