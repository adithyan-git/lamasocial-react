import React from "react";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { posts } from "../../../dummyData";
const Feed = () => {
  return (
    <div className="flex-[5.5]">
      <div className="p-5">
        <Share />
        {posts.map((p) => (
          <Posts key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
