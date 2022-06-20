import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image
          alt="Bird App"
          width="50"
          height="50"
          src="https://www.svgrepo.com/show/88851/cute-bird.svg"
        ></Image>
      </div>

      {/* <SidebarMenuItem /> */}
      <div>
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="List" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button} */}
      <button>Tweet</button>

      {/* Mini Profile */}
      <div>
        <Image
          src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
          alt="user image"
          height="100"
          width="100"
        ></Image>
        <div>
          <h4>Chima Nwagu</h4>
          <p>@chimanwagu</p>
        </div>
        <DotsHorizontalIcon className="h-5" />
      </div>
    </div>
  );
};

export default Sidebar;
