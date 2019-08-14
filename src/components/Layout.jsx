import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from "./LoginForm";
import ChatContent from "./ChatContent";
//const socketUrl = "http://localhost:3001";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    width: "90%",
    margin: "20px auto"
  }
}));

const Layout = props => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const { title } = props;
  const classes = useStyles();

  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = () => {
    let socket = io(":3001");
    socket.on("news", function() {
      socket.emit(USER_CONNECTED, { my: "userData" });
    });
    setSocket(socket);
  };

  const logout = () => {
    setUser(null);
    socket.emit(LOGOUT);
  };

  /*
  userData: {id:number, name:String}
  */
  const setUserHandler = user => {
    socket.emit(USER_CONNECTED, user);
    setUser(user);
  };
  console.log("User", user);
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Woop Chat
        </Typography>
        <Typography component="p">Chat about anything</Typography>
      </Paper>
      {!user ? (
        <LoginForm socket={socket} setUserHandler={setUserHandler} />
      ) : (
        <ChatContent user={user} socket={socket} logout={logout} />
      )}
    </div>
  );
};

export default Layout;
