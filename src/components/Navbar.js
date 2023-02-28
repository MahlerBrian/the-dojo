import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'

//styles
import './Navbar.css'
import Seeds from '../assets/seeds.svg'


export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  
  return (
    <div className="navbar">
        <ul>
            <li className="logo">
                <img src={Seeds} alt="Flag logo" />
                <span>Philanthropy Projects</span>
            </li>

              {!user && (
                <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                </>
              )}
            
            {user && (
                <li>
                  {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                  {isPending && <button className="btn"  disabled>Logging Out...</button>}
                </li>
            )}
            
        </ul>
    </div>
  )
}
