import React from 'react'
import { CiLogout } from "react-icons/ci";
import './LogoutButton.css'

const LogoutButton = () => {
  return (
    <div className='logout-button'>
      <CiLogout />
    </div>
  )
}

export default LogoutButton
