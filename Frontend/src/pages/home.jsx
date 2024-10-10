import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import './home.css'

const home = () => {
  return (
    <div className='contact'>
      <div className="sidebar">
      <Sidebar/>
      </div>
      <div className='chat-content'>
        <Chat/>
      </div>
    </div>
  )
}

export default home
