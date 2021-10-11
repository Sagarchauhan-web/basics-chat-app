const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const router = require("./router");
const Port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("connection has started..");

  socket.on("disconnect", () => {
    console.log("user Has left");
  });
});

app.use("/", router);

server.listen(Port, () => {
  console.log(`app running on port ${Port}`);
});
