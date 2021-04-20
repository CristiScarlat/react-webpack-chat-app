const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const {setUser, getUsers, deleteUser} = require("./db/jsonDB")

const port = process.env.PORT || 5000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

let interval;

const getApiAndEmit = (socket, id) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", `${response.toLocaleTimeString()} - id=${id}`);
};

io.on("connection", (socket) => {
  console.log(`Client with id ${socket.id} is connected`);
  const users = getUsers()
  io.emit("onlineUsers", JSON.stringify(Object.keys(users)));
  //interval = setInterval(() => getApiAndEmit(socket, socket.id), 1000);// just for test the socket io communication
  socket.on("user", (data) => {
    const res = JSON.parse(data)
    res.id = socket.id
    console.log(res)
    setUser(res)
  })

  socket.on("chat-message", (data) => {
    console.log(data)
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    deleteUser(socket.id)
    const users = getUsers()
    io.emit("onlineUsers", JSON.stringify(Object.keys(users)));
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`));