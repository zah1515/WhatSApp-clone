import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-9/68537734_2172892376169924_610681179112210432_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=BhjdJntEMHAAX813K9K&_nc_ht=scontent.fblr4-1.fna&oh=621fae66e618abfd812170ae484d6d99&oe=606E8CF4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__headerSearch">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder='Search or start new chat'/>
        </div>
      </div>
      <div className="sidebar__chat">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
