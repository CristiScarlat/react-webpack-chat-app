import React from 'react'
import ChatboxContainer from 'components/chatboxContainer/chatboxContainer.jsx'
import MessagesContainer from 'components/messagesContainer/messagesContainer.jsx'
import InputWithButton from 'components/inputWithButton/inputWithButton.jsx'

const Chat = ({handleSendMessage}) => {

    return (
        <>
         <ChatboxContainer>
            <MessagesContainer />
            <InputWithButton handleSendMessage={handleSendMessage}/>
         </ChatboxContainer>
        </>
    )
}

export default Chat