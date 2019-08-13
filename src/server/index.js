const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { VERIFY_USER, USER_CONNECTED } = require("../Events");
const { createChat, createUser, createMessage } = require("../Factories");
const { isUser, addUser } = require("./socketManager");

let connectedUsers = {};

app.get("/", (req, res) => {
  res.send("<h1>Hello from the Server : Woop Woop</h1>");
});

io.on("connection", function(socket) {
  console.log("user connected succesfullty", socket.id);

  //verify username
  socket.on(VERIFY_USER, (username, callback) => {
    if (isUser(connectedUsers, username)) {
      callback({ isUser: true, user: null });
    } else {
      callback({ isUser: false, user: createUser({ name: username }) });
    }
  });

  socket.on(USER_CONNECTED, username => {
    connectedUsers = addUser(connectedUsers, username);
    socket.username = username;
    socket.emit(USER_CONNECTED, connectedUsers);
    console.log("Connected Users", connectedUsers);
  });
});

http.listen(3001, () => {
  console.log("server listening on port 3001 ");
});
