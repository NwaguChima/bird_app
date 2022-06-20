import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

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
      </div>
    </div>
  );
};

export default Sidebar;
