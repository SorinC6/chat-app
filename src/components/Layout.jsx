import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { USER_CONNECTED } from "../Events";
//const socketUrl = "http://localhost:3001";

const Layout = props => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const { title } = props;
  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = () => {
    let socket = io(":3001");
    socket.on("news", function(data) {
      console.log(data);
      setSocket(data);
      socket.emit("my other event", { my: "data" });
    });
  };

  const setUserHandler = user => {
    socket.emit(USER_CONNECTED);
    setUser(user);
  };
  return <div>p{title}</div>;
};

export default Layout;
