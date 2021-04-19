import React from 'react'
import './messagesContainer.css'


const MessagesContainer = () => {
    return (
        <>
             <section className="chat-window">
                    <article className="msg-container msg-remote" id="msg-0">
                        <div className="msg-box">
                            <img className="user-img" id="user-0" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" />
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg" id="msg-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius, neque non tristique tincidunt, mauris nunc efficitur erat, elementum semper justo odio id nisi.
                                </p>
                                </div>
                                <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">3 minutes ago</span></span>
                            </div>
                        </div>
                    </article>
                    <article className="msg-container msg-self" id="msg-0">
                        <div className="msg-box">
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg" id="msg-1">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="msg" id="msg-2">
                                        Praesent varius
                                    </p>
                                </div>
                                <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">2 minutes ago</span></span>
                            </div>
                            <img className="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />
                        </div>
                    </article>
                    <article className="msg-container msg-remote" id="msg-0">
                        <div className="msg-box">
                            <img className="user-img" id="user-0" src="//gravatar.com/avatar/002464562345234523523568978962?d=retro" />
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg" id="msg-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">1 minute ago</span></span>
                            </div>
                        </div>
                    </article>
                    <article className="msg-container msg-remote" id="msg-0">
                        <div className="msg-box">
                            <img className="user-img" id="user-0" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" />
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg" id="msg-0">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">Now</span></span>
                            </div>
                        </div>
                    </article>
                    <article className="msg-container msg-self" id="msg-0">
                        <div className="msg-box">
                            <div className="flr">
                                <div className="messages">
                                    <p className="msg" id="msg-1">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">Now</span></span>
                            </div>
                            <img className="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />
                        </div>
                    </article>
                </section>
        </>
    )
}

export default MessagesContainer