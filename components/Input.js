import React from "react";
import Image from "next/image";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <Image
        src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
        alt="user image"
        width="50"
        height="50"
        className="h-11 w-11 rounded-full curpus-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening"
          />
        </div>
        <div>
          <div>
            <PhotographIcon className="h-10 w-10" />
            <EmojiHappyIcon className="h-10 w-10" />
          </div>
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
