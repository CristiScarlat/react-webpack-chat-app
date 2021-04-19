import socketIOClient from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_API
const socket = socketIOClient(ENDPOINT)

export function initSocket() {
    console.log("...initializing socket io")
    socket.on('connect', function (data) {
        socket.emit("user", JSON.stringify({name: 'cristian'}))
      });

}

export function closeSocket() {
    console.log("...close socket")
    socket.close()
}

export function socketSend(eventName, msg){
    socket.emit(eventName, msg)
}

//module.exports = { initSocket, closeSocket, socketSend }