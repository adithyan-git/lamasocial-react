import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions, MdLabel, MdPermMedia } from "react-icons/md";

const Share = () => {
  return (
    <div className=" w-full h-[170px] max-[792px]:h-fit  rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
      <div className="p-2.5">
        <div className=" flex items-center">
          <img
            src="./src/assets/person/person1.jpg"
            alt="img"
            className="h-[50px] w-[50px] rounded-[50%] object-cover mr-2.5"
          />
          <input
            placeholder="what's in your mind adithyan ?"
            className="w-[80%] border-0 focus:outline-0 max-[792px]:w-full max-[792px]:text-[13px]"
          />
        </div>
        <hr className="m-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5  max-[1072px]:flex-wrap  max-[1072px]:gap-4 max-[574px]:flex-col  max-[483px]:flex-row">
            <div className=" flex items-center mr-[15px] cursor-pointer">
              <MdPermMedia className="mr-[3px] h-[18px] w-[18px] text-[14px]  text-orange-500" />
              <span className="text-[18px] font-medium hover:text-gray-600 max-[1282px]:text-[12px]">
                Photo or Video
              </span>
            </div>
            <div className=" flex items-center mr-[15px] cursor-pointer">
              <MdLabel className="mr-[3px] h-[18px] w-[18px] text-[14px] text-blue-500" />

              <span className="text-[18px] font-medium hover:text-gray-600 max-[1282px]:text-[12px]">
                Tag
              </span>
            </div>
            <div className=" flex items-center mr-[15px] cursor-pointer">
              <FaLocationDot className="mr-[3px] h-[18px] w-[18px] text-[14px] text-green-500" />

              <span className="text-[18px] font-medium hover:text-gray-600 max-[1282px]:text-[12px] ">
                Location
              </span>
            </div>
            <div className=" flex items-center mr-[15px] cursor-pointer">
              <MdEmojiEmotions className="mr-[3px] h-[18px] w-[18px] text-[14px] text-yellow-500 " />

              <span className="text-[18px] font-medium hover:text-gray-600 max-[1282px]:text-[12px] ">
                Feelings
              </span>
            </div>
          </div>
          <button className="border-none p-[7px] rounded-[5px] bg-green-600 hover:bg-green-500 transform transition-all duration-300 text-white font-[500] cursor-pointer mr-5">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
