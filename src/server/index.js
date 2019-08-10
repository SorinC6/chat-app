const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("<h1>Hello from the Server : Woop Woop</h1>");
});

io.on("connection", function(socket) {
  console.log("user connected succesfullty");
});

http.listen(3001, () => {
  console.log("server listening on port 3001 ");
});
