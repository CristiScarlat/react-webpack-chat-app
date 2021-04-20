const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const cors = require('cors')
const {setUser, getUsers, deleteUser, getUserName} = require("./db/jsonDB")

const port = process.env.PORT || 5000;
const index = require("./routes/index")

const app = express()
app.use(cors('*'))
app.use(index)


const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on("connection", (socket) => {
  console.log(`Client with id ${socket.id} is connected`);
  
  //client register user and it is now added in the list of online users and the list is send back to the client
  socket.on("user", (data) => {
    const res = JSON.parse(data)
    res.id = socket.id
    console.log(res)
    setUser(res)
    const users = getUsers()
    io.emit("onlineUsers", JSON.stringify(Object.keys(users)));
  })

  socket.on("clientMsg", (data) => {
    const msgObj = JSON.parse(data)
    if(msgObj.sendTo === 'all'){
      const currentUser = getUserName(socket.id)
      console.log("broadcast message->", `${msgObj.msg}`, currentUser)
      io.emit("messageEvent", JSON.stringify({user: currentUser, message: msgObj.msg}));
    }
  })

  //on disconnect client the user is now removed from the list of online users and the list is send back to the client
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    deleteUser(socket.id)
    const users = getUsers()
    io.emit("onlineUsers", JSON.stringify(Object.keys(users)));
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`));