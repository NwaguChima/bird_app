import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      {/* user image */}
      <Image src={post.userImg} alt="user-badge" width={50} height={50} />

      {/* right side */}
      <div>
        {/* Header */}
        <div>
          {/* post user info */}
          <div>
            <h4>{post.name}</h4>
            <span>{post.username}</span>
            <span>{post.timestamp}</span>
          </div>
          {/* icon */}
          <DotsHorizontalIcon className="h-10" />
        </div>
        {/* post content */}
        <p>{post.text}</p>

        {/* post image */}
        <Image src={post.img} alt="post-image" width={500} height={500} />

        {/* post icons */}
        <div>
          <ChatIcon className="h-9" />
          <TrashIcon className="h-9" />
          <HeartIcon className="h-9" />
          <ShareIcon className="h-9" />
          <ChartBarIcon className="h-9" />
        </div>
      </div>
    </div>
  );
};

export default Post;
