import React from 'react';
import './Conversations.css';
import user_img from '../assets/user_img.jpg';

// Assuming you want to pass some default image URL
const Conversation = ({ name }) => {
  return (
    <div className="conversation">
      <img src={user_img} alt="profile" />
      <div className="conversation-info">
        <div className="conversation-name">{name}</div>
        <div className="conversation-preview">Last message text will go here...</div>
      </div>
      <div className="conversation-time">12:34 PM</div>
    </div>
  );
}

export default Conversation;
