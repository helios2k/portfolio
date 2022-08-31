// Libraries
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Icons
import htmlcss from '../assets/htmlcss.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tailwind.png'
import reactImg from '../assets/react.png'
import js from '../assets/javascript.png'
import git from '../assets/git.png'
import node from '../assets/node.png'
import python from '../assets/python.png'

// Parallax cover section
import front from "../assets/front.png"
import mid1 from "../assets/mid1.png"
import mid2 from "../assets/mid2.png"
import comet from "../assets/comet.png"

import '../styles/about.scss'

const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [toggleScroll, setToggleScroll] = useState(true)
  const imgRef = useRef(null)
  const title = useRef(null)

  // Update page offsetY for parallax scrolling
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // When user scrolls, hide scroll CTA button
  useEffect(() => {
    const handleScrollBtn = () => {
      if (window.scrollY > 70) {
        setToggleScroll(false)
      } else setToggleScroll(true)
    }
    window.addEventListener('scroll', handleScrollBtn)
    return () => window.removeEventListener('scroll', handleScrollBtn)
  }, [])

  useEffect(() => {
    const el = imgRef.current
    gsap.fromTo(el, { y: 50, duration: 1 }, {
      duration: 1,
      y: 0,
      ease: 'power3.out',
    })
  }, [])

  useEffect(() => {
    const el = title.current
    gsap.fromTo(el, { y: -50, duration: 1, opacity: 0 }, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: 'power2.out',
    })
  }, [])

  useEffect(() => {
    gsap.fromTo('.content__grid-item', { opacity:0, scale: 0 }, {
      duration: 1.5,
      opacity: 1,
      scale:1,
      ease: 'power3.out',
      delay: 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger:'content__grid-item'
      }
    })
  }, [])

  return (
    <div className='about'>
      <div className='about__cover' ref={imgRef}>

        <div className='about__cover__title' ref={title}>
          <h1>About</h1>
          {toggleScroll && <a href='#content'><div className='about__scroll-btn'></div></a>}
        </div>
        <div>
          <img src={front} className='front' />
        </div>
        <div style={{ transform: `translateY(${offsetY * -0.15}px)` }}>
          <img src={mid1} className='mid1' />
        </div>
        <div
          style={{ transform: `translateY(${offsetY * -0.3}px)`, zIndex: -100 }}>
          <img src={mid2} className='mid2' />
        </div>
        <div style={{ transform: `translateY(${offsetY * -1}px)`, zIndex: -12390877896 }}
          className='sky'>
        </div>
        <div style={{ transform: `translateX(${offsetY * 2.5}px)` }}
          className='comet'>
          <img src={comet} className='comet' />
        </div>
      </div>

      <div className='about__content' id='content'>
        <div className='content'>
          <div className='content__text'>
            <h1> Who am I? </h1>
            <p>
            &nbsp; My name is Nam Long, or Nathan. I'm a <span style={{ textDecoration: 'underline dotted', textUnderlineOffset:'.5rem' }}>fresh graduate</span>  from Ryerson University, Toronto.  
            </p>
            <p>
            &nbsp; I'm captivated by the endless possibilities of web development, and I thrive to implement eye pleasing & unique experiences that brings websites to life.
            </p>
            <h1> Tech Stack </h1>
            <p>Languages I speak:</p>
          </div>
          <div className='content__grid'>
            <div className='content__grid-item'>
              <img src={htmlcss} />
              <p> HTML & CSS </p>
            </div>
            <div className='content__grid-item'>
              <img src={js} />
              <p> Javascript </p>
            </div>
            <div className='content__grid-item'>
              <img src={reactImg} />
              <p> ReactJS </p>
            </div>
            <div className='content__grid-item'>
              <img src={sass} />
              <p> Sass </p>
            </div>
            <div className='content__grid-item'>
              <img src={tailwind} />
              <p> TailwindCSS </p>
            </div>
            <div className='content__grid-item'>
              <img src={git} />
              <p> Git </p>
            </div>
            <div className='content__grid-item'>
              <img src={node} />
              <p> NodeJS </p>
            </div>
            <div className='content__grid-item'>
              <img src={python} />
              <p> Python </p>
            </div>
          </div>
          <button className='content__btn'>View my works</button>
        </div>
      </div>

    </div>
  )
}

export default About