const server = require("http").createServer();
const io = require("socket.io")(server);
const SocketManager = require("./SocketManager");

const PORT = process.env.PORT || 4000;
io.on("Socket connection ", SocketManager);

server.listen(PORT, () => {
  console.log("Connected to port:", PORT);
});

module.exports = io;
