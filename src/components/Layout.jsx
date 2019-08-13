import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from "./LoginForm";
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
      socket.emit(USER_CONNECTED, { my: "userData" });
      setSocket(data);
    });
  };

  const logout = () => {
    setUser(null);
    socket.emit(LOGOUT);
  };

  /*
  userData: {id:number, name:String}
  */
  const setUserHandler = userData => {
    socket.emit(USER_CONNECTED, { user: userData });
    setUser(userData);
  };
  return (
    <div>
      <LoginForm socket={socket} setUserHandler={setUserHandler} />
    </div>
  );
};

export default Layout;
