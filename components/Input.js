import React from "react";
import Image from "next/image";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div>
      <Image
        src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
        alt="user image"
        width="50"
        height="50"
      />
      <div>
        <div>
          <textarea rows="2" placeholder="What's happening"></textarea>
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
