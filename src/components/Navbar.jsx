import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'
import '../styles/navbar.scss'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const { pathname } = useLocation()

  // Apply navbar background for text visibility after a scroll distance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true)
      } else setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Re-render / close mobile menu when path changes
  useEffect(() => {
    setMobileMenuActive(false)
  }, [pathname])
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuActive ? 'activeMobile' : ''}`}> 
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <ul className='navbar__links'>
        <li>
          <Link to='/' className='navbar__links__item'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='navbar__links__item'>About</Link>
        </li>
        <li>
          <Link to='/projects' className='navbar__links__item'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>
            <button className='navbar__btn'>Contact me!</button>
          </Link>
        </li>
      </ul>
      <div className='burger-menu' onClick={() => setMobileMenuActive(!mobileMenuActive)}>
        {mobileMenuActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </nav>
  )
}

export default Navbar