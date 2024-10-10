import React from 'react'
import Conversation from './Conversation'
import './Conversations.css'

const Conversations = () => {
  return (
    <div className="conversations">
      <Conversation name='Kaushiki' />
      <Conversation name='Dwaipayan' />
      <Conversation name='Anurag' />
    </div>
  );
}

export default Conversations;
