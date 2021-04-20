import React, { useState, useEffect } from "react";
import Chat from 'blocks/chat/chat.jsx'
import RegisterWithName from 'blocks/register/register.jsx'
import {initSocket, closeSocket, socketSend, onMsgReceive} from './services/socket'


function App() {
  const [response, setResponse] = useState("")
  const [chatMsg, setChatMsg] = useState("")
  const [userName, setUserName] = useState()


  useEffect(() => {
    //fetchOnLineUsers()
    initSocket()
    if(userName && userName !== ""){
      console.log(">>>>>>", userName)
      setUserName(userName)
    }
    onMsgReceive(handleReceiveMsg)
    return () => closeSocket()
  }, [])

  const handleReceiveMsg = (msg) => {
    console.log("Appjs", msg)
  }

  const handleSendMessage = (str) => {
    const msgObj = {msg: str, sendTo: 'oana'}
    socketSend("chat-message", JSON.stringify(msgObj))
  }

  const handleRegisterName = (str) => {
    setUserName(str)
    socketSend("user", JSON.stringify({name: str}))
  }

  return (
    <>
      <h1>Welcome to chat demo</h1>
      {(userName && userName !== "") ? <Chat handleSendMessage={handleSendMessage}/> 
      : 
      <RegisterWithName handleRegisterName={handleRegisterName}/>}
    </>
  );
}

export default App;