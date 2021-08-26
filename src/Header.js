import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="navbar">
            <h1>Blog App</h1>
            {isLoggedIn ? 
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                </div> : 
                <div className="links">
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                </div>
            }
        </div>
    )
}

export default Header
