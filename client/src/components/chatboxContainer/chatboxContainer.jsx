import React from 'react'
import './chatboxContainer.css'


const ChatboxContainer = ({children}) => {
    return (
        <>
            <section className="chatbox">
                {children}
            </section>
        </>
    )
}

export default ChatboxContainer