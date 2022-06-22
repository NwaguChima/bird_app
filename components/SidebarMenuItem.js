import React from "react";

const SidebarMenuItem = ({ text, Icon }) => {
  return (
    <div className="hoverEffect">
      <Icon className="h-7" />
      <span>{text}</span>
    </div>
  );
};

export default SidebarMenuItem;
