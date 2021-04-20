import React, { useState, useEffect } from "react";
import Chat from 'blocks/chat/chat.jsx'
import RegisterWithName from 'blocks/register/register.jsx'
import { initSocket, closeSocket, socketSend, onMsgReceive } from './services/socket'


function App() {
  const [response, setResponse] = useState("")
  const [chatMsg, setChatMsg] = useState("")
  const [userName, setUserName] = useState()
  const [onlineUsers, setOnlineUsers] = useState([])

  const api = process.env.REACT_APP_API

  useEffect(() => {
    fetchOnLineUsers()
    initSocket()
    if (userName && userName !== "") {
      console.log(">>>>>>", userName)
      setUserName(userName)
    }
    onMsgReceive("onlineUsers", handleUpdateOnlineUsers)
    onMsgReceive("messageEvent", handleReceivedMsg)
    return () => closeSocket()
  }, [])

  const fetchOnLineUsers = async () => {
    const users = await fetch(`${api}/users`)
    console.log(users.users)
  }

  const handleUpdateOnlineUsers = (usersList) => {
    console.log("online users", usersList)
    setOnlineUsers(JSON.parse(usersList))
  }

  const handleReceivedMsg = (msg) => {
    console.log(msg)
  }

  const handleSendMessage = (str) => {
    const msgObj = { msg: str, sendTo: 'all' }
    console.log("client send message")
    socketSend("clientMsg", JSON.stringify(msgObj))
  }

  const handleRegisterName = (str) => {
    setUserName(str)
    socketSend("user", JSON.stringify({ name: str }))
  }

  return (
    <>
      <h1>Welcome to chat demo</h1>
      {(userName && userName !== "") ? <Chat handleSendMessage={handleSendMessage} onlineUsers={onlineUsers} />
        :
        <RegisterWithName handleRegisterName={handleRegisterName} />}
    </>
  );
}

export default App;