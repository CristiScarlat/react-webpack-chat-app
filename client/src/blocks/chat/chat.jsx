import React from 'react'
import ChatboxContainer from 'components/chatboxContainer/chatboxContainer.jsx'
import MessagesContainer from 'components/messagesContainer/messagesContainer.jsx'
import InputWithButton from 'components/inputWithButton/inputWithButton.jsx'

const Chat = () => {
    return (
        <>
         <ChatboxContainer>
            <MessagesContainer />
            <InputWithButton />
         </ChatboxContainer>
        </>
    )
}

export default Chat