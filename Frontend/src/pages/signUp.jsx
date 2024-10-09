import React from 'react'
import { Link } from 'react-router-dom'
import './signUP.css'


const signUp = () => {
  return (
    <div className='signup-page'>
      <h1 className='signup'>Signup to <span>Zenchat</span> </h1>
      
      <form>
      <div>
          
          <input type="text" placeholder='Username' />
        </div>

        <div>
          
          <input type="email" placeholder='Enter your email' />
        </div>

        <div>
          
          <input type="password" placeholder='Enter your password' />
        </div>

        <div>
          
          <input type="password" placeholder='Confirm password' />
        </div>
        
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        
        <div>
          <button className='button-signup'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default signUp
