import React, { useState, useEffect } from "react";
import Chat from 'blocks/chat/chat.jsx'
import RegisterWithName from 'blocks/register/register.jsx'
import {initSocket, closeSocket, socketSend} from './services/socket'


function App() {
  const [response, setResponse] = useState("")
  const [chatMsg, setChatMsg] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    initSocket()
    return () => closeSocket()
  }, [])

  const handleSendMessage = (str) => {
    socketSend("chat-message", str)
  }

  return (
    <>
      {(userName || userName !== "") ? <Chat handleSendMessage={handleSendMessage}/> 
      : 
      <RegisterWithName/>}
    </>
  );
}

export default App;