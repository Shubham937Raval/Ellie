import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to my app!</h1>
      <nav className='navbar'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='/setting'>Settings</a></li>
        </ul>
      </nav>

    </div>

  )
}

export default Header
