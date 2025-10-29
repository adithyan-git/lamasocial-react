import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const Posts = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className=" w-full   rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] my-[30px]">
      <div className="p-2.5">
        <div className="flex justify-between items-center">
          <div className="flex  items-center">
            <img
              src="./src/assets/person/person1.jpg"
              alt=""
              className="w-8 h-8 object-cover rounded-[50%]"
            />
            <span className="text-[15px] font-medium mx-2.5 my-0">
              adithyan
            </span>
            <span className="text-[12px]">{post.date}</span>
          </div>
          <div>
            <FiMoreVertical />
          </div>
        </div>
        <div className="my-5 mx-0">
          <span className="max-[792px]:text-[13px]">{post.description}</span>
          <img
            src={post.photo}
            alt=""
            className="mt-5 w-full  max-h-[500px]  max-[792px]:h-[200px] object-cover"
          />
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <img
              src="./src/assets/posts/like.png"
              alt=""
              className="h-6 w-6 mr-[5px] cursor-pointer"
              onClick={handleLike}
            />
            <img
              src="./src/assets/posts/heart.png"
              alt=""
              className="h-6 w-6 mr-[5px] cursor-pointer"
              onClick={handleLike}
            />
            <span className="text-[15px] max-[792px]:text-[13px]">
              {like} people like it
            </span>
          </div>
          <div>
            <span className="text-[15px] border-b border-dotted border-y-gray-500 cursor-pointer hover:text-gray-600 max-[792px]:text-[13px]">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
