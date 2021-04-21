import socketIOClient from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_API
const socket = socketIOClient(ENDPOINT)

export function initSocket() {
    console.log("...initializing socket io")
    socket.on('connect', function (data) {
        console.log("socket connected")
    });
}

export function closeSocket() {
    console.log("...close socket")
    socket.close()
}

export function socketSend(eventName, msg) {
    socket.emit(eventName, msg)
}

export function onMsgReceive(eventName, cb) {
    socket.on(eventName, data => {
        console.log(">>>>on-message->", eventName, data)
        cb(data)
    })
}
