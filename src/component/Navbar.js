import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
        <nav>
          <div className="logo-container">
            <h1>LOGO</h1>
          </div>
          <input type="checkbox" id='check' />
          <label htmlFor="check" className='hamburger-btn'>
          <i class="fa-solid fa-bars"></i>
          </label>
          <ul className='nav-list'>
            <li><a href="http">HOME</a></li>
            <li><a href="http">ABOUT</a></li>
            <li><a href="http">SERVICE</a></li>
            <li><a href="http">CONTACT</a></li>

          </ul>
        </nav>
    </div>
  )
}

export default Navbar