import React, { useEffect } from "react";
import io from "socket.io-client";
//const socketUrl = "http://localhost:3001";

const Layout = props => {
  // const [socket, setSocket] = useState(null);
  useEffect(() => {
    var socket = io(":3001");
    socket.on("news", function(data) {
      console.log(data);
      socket.emit("my other event", { my: "data" });
    });
  }, []);

  // const initSocket = () => {
  //   const socket = io(socketUrl);
  //   socket.on("connect: ", () => {
  //     console.log("Connected socket react comp");
  //   });
  //   setSocket(socket);
  // };

  const { title } = props;
  return <div>p{title}</div>;
};

export default Layout;
