import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Chat from 'blocks/chat/chat.jsx'
const ENDPOINT = process.env.REACT_APP_API

function App() {
  const [response, setResponse] = useState("");
  console.log(process.env.NODE_ENV, ENDPOINT)

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    return () => socket.close()
  }, []);

  return (
    <>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <Chat />
    </>
  );
}

export default App;