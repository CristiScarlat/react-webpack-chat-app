const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

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
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket, socket.id), 1000);// just for test the socket io communication
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  socket.message('from-client', (m) => {
    console.log(m)
  })
});

server.listen(port, () => console.log(`Listening on port ${port}`));