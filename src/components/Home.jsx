import React from 'react'
import homeImg from '../assets/home-img.png'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import '../styles/home.scss'

const Home = () => {

  let btnAnimation = useRef(null)
  let imgAnimation = useRef(null)

  useEffect(() => {
    gsap.fromTo('.textAnimation', { opacity: 0, y: 50 }, {
      opacity: 1, duration: 2,
      y: 0,
      ease: 'power3.out',
      stagger: 0.2
    })
  }, [])

  useEffect(() => {
    const btn = btnAnimation.current
    gsap.fromTo(btn, { opacity: 0, y: 50 }, {
      opacity: 1, duration: 2.5,
      y: 0,
      ease: 'power3.out',
      delay: 1
    })
  }, [])

  useEffect(() => {
    const img = imgAnimation.current
    gsap.fromTo(img, { opacity: 0, scale: 0 }, {
      opacity: 1, duration: 2.5,
      scale: 1,
      ease: 'power3.out',
      delay: 0.1
    })
  }, [])

  return (
    <div className='home'>
      {/* <div className='hero-container'> */}
      <div className='home__left' >
        <h3 className='textAnimation'>Nam Long Pham</h3>
        <h1 className='textAnimation'>Frontend Developer</h1>
        <p className='textAnimation'> Hey there! I'm a passionate front-end dev who loves building aesthetic, interactive & responsive websites.</p>
        <div className='home__buttons' ref={btnAnimation}>
          <Link to='/about'>
            <button className='btn1'>Explore</button>
          </Link>
          <button className='btn2'>Hello</button>
        </div>
      </div>
      <div className='home__right' ref={imgAnimation}>
        <img src={homeImg}></img>
      </div>
    </div>
  )
}

export default Home