import React from 'react'
import ChatboxContainer from 'components/chatboxContainer/chatboxContainer.jsx'
import MessagesContainer from 'components/messagesContainer/messagesContainer.jsx'
import InputWithButton from 'components/inputWithButton/inputWithButton.jsx'
import List from 'components/listContainer/listContainer.jsx'
import './chat.css'

const Chat = ({ handleSendMessage, onlineUsers, msgList }) => {

    return (
        <div className="chat-app-container">
            <List itemsList={onlineUsers}/>
            <ChatboxContainer>
                <MessagesContainer msgList={msgList}/>
                <InputWithButton handleButtonOnClick={handleSendMessage} useValidation={true} validationRgx={/^[a-zA-Z0-9\s.,=-]*$/g}/>
            </ChatboxContainer>
        </div>
    )
}

export default Chat