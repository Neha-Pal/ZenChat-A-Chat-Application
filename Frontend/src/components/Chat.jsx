import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Here you would normally handle sending the message, such as updating state or sending it to an API.
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className='chat-header'>
      <span>To: {name}</span>
      
      </div>
      <div className="chat-messages">
        {/* Example messages, dynamically render your messages and others */}
        <div className="message other">
          <div className="message-user">Kaushiki:</div>
          <div className="message-text">Hello, how are you?</div>
        </div>
        <div className="message you">
          <div className="message-user">You:</div>
          <div className="message-text">I'm good! How about you?</div>
        </div>
      </div>

      {/* Input area */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
