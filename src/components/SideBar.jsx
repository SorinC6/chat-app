import React from "react";
import { FaStumbleupon } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const SideBar = ({ chats, activeChat, user, setActiveChat, logout }) => {
  return (
    <div>
      <h2>Woop Chat</h2>
      <div>
        <FaHamburger size="2em" />
      </div>
      <div>
        Search
      </div>
      <div>
        Users Here
      </div>
      <div>
        User Logout
      </div>
    </div>
  );
};

export default SideBar;
