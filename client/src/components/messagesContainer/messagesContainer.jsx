import React from 'react'
import './messagesContainer.css'


const MessagesContainer = ({ msgList }) => {
    return (
        <>
            <section className="chat-window">
                {(msgList && msgList.length > 0) && msgList.map((msgObj, index) => (
                    <article key={`msg-${index}`} className={`msg-container ${msgObj.user === 'self' ? 'msg-self' : 'msg-remote'}`}>
                        <div className="msg-box">
                            <div className="user-title">{msgObj.user === "self" ? '' : msgObj.user}</div>
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg">
                                        {msgObj.message}
                                    </p>
                                </div>
                                <span className="timestamp"><span className="username">{msgObj.user === "self" ? '' : msgObj.user}</span>&bull;<span className="posttime">{msgObj.timestamp}</span></span>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default MessagesContainer