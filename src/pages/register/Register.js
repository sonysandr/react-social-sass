import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

export default function Register() {
  return (
    <div className='register'>
    <div className="card">
        <div className="left">
            <h1>ReactSocial</h1>
            <p>Where every reaction matters</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
           

        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="name" />
            <button>Register</button>
          </form>
        </div> 
    </div>
    </div>
  )
}
