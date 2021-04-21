import React, { useState, useEffect } from "react";
import Chat from 'blocks/chat/chat.jsx'
import RegisterWithName from 'blocks/register/register.jsx'
import { initSocket, closeSocket, socketSend, onMsgReceive } from './services/socket'


function App() {
  const [response, setResponse] = useState("")
  const [chatMsgs, setChatMsgs] = useState([])
  const [userName, setUserName] = useState()
  const [onlineUsers, setOnlineUsers] = useState([])

  const api = process.env.REACT_APP_API

  useEffect(() => {
    fetchOnLineUsers()
    initSocket()
    if (userName && userName !== "") {
      setUserName(userName)
    }
    onMsgReceive("onlineUsers", handleUpdateOnlineUsers)
    onMsgReceive("messageEvent", (msg) => handleReceivedMsg(msg))
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
    setChatMsgs((oldState) => [...oldState, JSON.parse(msg)])
  }

  const handleSendMessage = (str) => {
    console.log("client send message")
    const timestamp = new Date().toLocaleString()
    const msgsArr = [...chatMsgs, {user: 'self', message: str, timestamp}]
    setChatMsgs(msgsArr)

    const msgObj = { msg: str, sendTo: 'all' }
    socketSend("clientMsg", JSON.stringify(msgObj))
  }

  const handleRegisterName = (str) => {
    setUserName(str)
    socketSend("user", JSON.stringify({ name: str }))
  }

  return (
    <>
      <h1>Welcome to chat demo</h1>
      {(userName && userName !== "") ? <Chat handleSendMessage={handleSendMessage} onlineUsers={onlineUsers} msgList={chatMsgs}/>
        :
        <RegisterWithName handleRegisterName={handleRegisterName} />}
    </>
  );
}

export default App;