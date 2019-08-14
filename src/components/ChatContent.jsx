import React, { useState } from "react";
import SideBar from "./SideBar";

const ChatContent = ({ user, logout, socket }) => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  return (
    <>
      <p>Chat Content </p>
      <SideBar
        logout={logout}
        chats={chats}
        user={user}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </>
  );
};

export default ChatContent;
