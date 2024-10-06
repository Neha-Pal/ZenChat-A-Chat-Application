import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const login = () => {
  return (
    <div className='login-page'>
      <h1 className='login'>Login to <span>Zenchat</span> </h1>
      
      <form>
        <div>
          
          <input type="email" placeholder='Enter your email' />
        </div>

        <div>
          
          <input type="password" placeholder='Enter your password' />
        </div>
        <p>Don't have an account? <Link to={'/signUp'}>Sign Up</Link></p>
        
        <div>
          <button className='button-login'>Login</button>
        </div>
      </form>


    </div>
  )
}

export default login
