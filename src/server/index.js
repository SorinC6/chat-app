const server = require("http").createServer();
const SocketManager = require("./SocketManager");
const io = require("socket.io");

const PORT = process.env.PORT || 4000;
io.connection("Socket connection ", SocketManager);

server.listen(PORT, () => {
  console.log("Connected to port:", PORT);
});

module.exports = io;
