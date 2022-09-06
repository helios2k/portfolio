import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../styles/projects.scss'
import portfolio from '../assets/portfolio.jpg'
import vietnam from '../assets/vietnam.jpg'
import astro from '../assets/astro.jpg'
import movie from '../assets/movie.jpg'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const title = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const el = title.current
    gsap.fromTo(el, { y: -50, duration: 1, opacity: 0 }, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: 'power2.out',
    })
  }, [])
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='projects'>
      <div className="projects__cover">
        <h1 ref={title}>Projects</h1>
      </div>
      <div className='projects__content'>
        <div className="projects__container">

          {/* Project 1 */}
          <div className="projects__item item-left">
            <div className="projects__item__img1">
              <div className='img-container'>
                <img src={vietnam} alt='project image 1' />
              </div>
            </div>
            <div className='projects__item__desc'>
              <div className="text-container"
                style={{ transform: `translateY(${offsetY * -0.25}px)` }}>
                <div className='label-left'><h2>Discover Vietnam</h2></div>
                <div className='text-container__body'>
                  <p> An image-based website showcasing Vietnam, to give viewers an overview of the country, culture and wonders. </p>
                  <p> I opt for a modern, elegant design to take user through pages and infos with a smooth experience.</p>
                  <hr />
                  <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: '1rem 0' }}> Built with: React, React Router, GSAP & Framer Motion</p>
                  <div className='button-container'>
                    <button>Demo <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                    <a href='https://github.com/helios2k/discover-vietnam' target='_blank'>
                      <button>Source <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Project 2 */}
          <div className="projects__item item-right">
            <div className='projects__item__desc'>
              <div className="text-container container2"
                style={{ transform: `translateY(${offsetY * -0.25}px)` }}>
                <div className='label-right'><h2>Astro Kitchen</h2></div>
                <div className='text-container__body'>
                  <p> A CRUD app of an imaginary restaurant, with minimalist design.  </p>
                  <p> User can explore the restaurants, menu and add, edit, delete order items from cart and preview the final price altogether.  </p>
                  <hr />
                  <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: '1rem 0' }}> Built with: React, TailwindCSS, ExpressJS,  Mongoose</p>
                  <div className='button-container'>
                    <button>Demo <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                    <button>Source <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__item__img2">
              <div className='img-container'>
                <img src={astro} alt='project image 2' />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects__item item-left">
            <div className="projects__item__img1">
              <div className='img-container'>
                <img src={portfolio} alt='project image 3' />
              </div>
            </div>
            <div className='projects__item__desc'>
              <div className="text-container container3"
                style={{ transform: `translateY(${offsetY * -0.25}px)` }}>
                <div className='label-left'><h2>this.portfolio</h2></div>
                <div className='text-container__body'>
                  <p> A React SPA space-themed portfolio with some dynamic animations and transitions to keep users staying on the website while getting to know myself.</p>
                  <p> There's also a form where viewers can reach me by leaving a message. </p>
                  <hr />
                  <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: '1rem 0' }}> Built with: React, Sass, GSAP</p>
                  <div className='button-container'>
                    <Link to='/contact'>
                      <button>Message me</button>
                    </Link>
                    <a href='https://github.com/helios2k/portfolio' target='_blank'>
                      <button>Source <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects__item item-right">
            <div className='projects__item__desc'>
              <div className="text-container container4"
                style={{ transform: `translateY(${offsetY * -0.25}px)` }}>
                <div className='label-right'><h2>Movie Recommender</h2></div>
                <div className='text-container__body'>
                  <p> A movie recommender webapp where user can create account, login and get recommended movies based on similarities computed from their previous ratings on similar movies. </p>
                  <p> Dataset used: MovieLens. Algorithm used: item-based collaborative filtering. </p>
                  <hr />
                  <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: '1rem 0' }}> Built with: CSS, Javascript, ExpressJS, Python</p>
                  <div className='button-container'>
                    <a href='https://github.com/helios2k/CPS-842-Movie-Recommender' target='_blank'>
                      <button>Source <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="projects__item__img2">
              <div className='img-container'>
                <img src={movie} alt='project image 2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects