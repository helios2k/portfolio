import React, { useRef, useEffect } from 'react'
import contactImg from '../assets/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import '../styles/contact.scss'

const Contact = () => {
  const contact = useRef(null)
  const form = useRef(null)
  
  useEffect(() => {
    const el = contact.current
    gsap.fromTo(el, {rotate: 2}, {rotate:-6, duration: 2 , ease: 'power3.out', delay:0.3})
  },[])

  useEffect(() => {
    const el = form.current
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1, duration: 2,
      y: 0,
      ease: 'power3.out',
    })
  }, [])
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__left'>
          <img src={contactImg} ref={contact} />
        </div>
        <div className='contact__right' ref={form}>
          <div>
            <h1>Contact me</h1>
            <p>// Got a project, want to work with me or simply say hi? </p>
          <form className='contact__form' method='POST' action='https://getform.io/f/f92975ca-cb43-4213-b2bc-23726b04f0a9'>
            <input name='name' type='text' placeholder='Name' className='form-name' required />
            <input name='email' type='email' placeholder='Email' required></input>
            <textarea name='content' placeholder='Your friendly message...' required></textarea>
            <button type='submit' className='form-btn'>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact