import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";

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
        <SidebarMenuItem />
      </div>
    </div>
  );
};

export default Sidebar;
