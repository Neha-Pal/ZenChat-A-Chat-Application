import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SearchInput/>
      <div className='divider'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  );
}

export default Sidebar
