import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'
import '../styles/navbar.scss'

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const handleMenuAction = () => {
    setMobileMenuActive(!mobileMenuActive)
  }
  return (
    <nav className={`navbar ${mobileMenuActive ? 'activeMobile' : ''}`}>
      <div className='navbar__logo'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>

      <ul className='navbar__links'>
        <li>
          <a href='/' className='navbar__links__item'>Home</a>
        </li>
        <li>
          <a href='/about' className='navbar__links__item'>Skills</a>
        </li>
        <li>
          <a href='/projects' className='navbar__links__item'>Projects</a>
        </li>
        <li>
          <a href='/contact'>
            <button className='navbar__btn'>Contact me!</button>
          </a>
        </li>
      </ul>
      <div className='burger-menu' onClick={handleMenuAction}>
        {mobileMenuActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </nav>
  )
}

export default Navbar