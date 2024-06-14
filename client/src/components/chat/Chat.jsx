import React, { useState } from 'react';
import './chat.scss';

const Chat = () => {
  
    const [chat, setChat] = useState(true) 
  
    return (
        <section className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div>
            
                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div>   
            
                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div>  
            
                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div>  

                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div> 

                <div className="message">
                    <img src="/favicon.png" alt="" />
                    <span>John Doe</span>
                    <p>This is the latest message</p>
                </div>
            </div>   

            {
                chat && (
                    <div className="chatBox">
                        <div className="top">
                            <div className="user">
                                <img src="/favicon.png" alt="" />
                                John Doe
                            </div>
                            <span className='close' onClick={() => setChat(null)}>X</span>
                        </div>
        
                        <div className="center">
                            <div className="chatMessage">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                            <div className="chatMessage own">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                            <div className="chatMessage">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                            <div className="chatMessage own">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                            <div className="chatMessage">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                            <div className="chatMessage own">
                                <p>This is random chat message</p>
                                <span>1 hour ago</span>
                            </div>
                        </div>
        
                        <div className="bottom">
                            <textArea placeholder='Write a message...'></textArea>
                            <button>Send</button>
                        </div>
                    </div>  
                )
            }
        </section>
    );
};

export default Chat;