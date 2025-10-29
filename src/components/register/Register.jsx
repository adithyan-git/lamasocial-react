import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="font-extrabold text-[50px] text-blue-500">
            Lamasocial
          </h3>
          <span className="text-2xl">
            Connect with friends and the world around you on lamasocial
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="h-[400px] p-5 bg-white rounded-[10px] flex flex-col justify-between">
            <input
              placeholder="Username"
              className="h-[50px] rounded-[10px] border-[1px] border-solid border-gray-300 text-[18px] pl-5 focus:outline-0"
            />
            <input
              placeholder="Email"
              className="h-[50px] rounded-[10px] border-[1px] border-solid border-gray-300 text-[18px] pl-5 focus:outline-0"
            />
            <input
              placeholder="Password"
              className="h-[50px] rounded-[10px] border-[1px] border-solid border-gray-300 text-[18px] pl-5 focus:outline-0"
            />
            <input
              placeholder="Password again"
              className="h-[50px] rounded-[10px] border-[1px] border-solid border-gray-300 text-[18px] pl-5 focus:outline-0"
            />
            <button className="h-[50px] rounded-[10px] border-0 bg-blue-500 text-[20px] font-medium text-white cursor-pointer ">
              Sign up
            </button>
            <button className="h-[50px] w-[60%]  self-center rounded-[10px] border-0 bg-green-500 text-[20px] font-medium text-white cursor-pointer ">
              Log into account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
