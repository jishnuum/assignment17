import React from 'react'
import Signup from '../components/Signup'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()
  return (
    <div>
      <div className="homePage container text-center d-flex justify-content-center align-items-center vh-100 flex-column">
        <h4>Welcome to our corner of the internet! </h4>
        <div className="registerAndLogin">
          <div className="loginNavigate  g-2">
            <p className='mb-0'>Dont have an account? </p>
            <button className='loginBtn mb-3' onClick={() => navigate("/register")}>Register</button>
          </div>
          <div className="loginNavigate  g-2">
            <p className='mb-0'>Already have an account </p>
            <button className='loginBtn mb-3' onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Dashboard
