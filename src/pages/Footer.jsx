import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const footernav = 
  [
    {link:'', text: 'Offers'},
    {link:'', text: 'Blog'},
    {link:'', text: 'About'},
    {link:'', text: 'Contact'},
    {link:'', text: 'Login'},
    {link:'', text: 'Register'},
]

const socialmedia = [
  {link:'Facebook'},
  {link:'Twitter'},
  {link:'Instagram'},
  {link:'Linkedin'}
]
  return (
    <div className='footer'>
      <ul>
        {footernav.map(item=>(
          <li><Link to={item.link}>{item.text}</Link></li>
        ))}
      </ul>
      <ul>
        {socialmedia.map((item,index) => (
           <li><Link to=''>{index === 0 ? <FaFacebook/> : index === 1 ? <FaTwitter/> : index === 2 ? <FaInstagram/> : index === 3 ? <FaLinkedin/> : ''}</Link></li>
        ))}
        
      </ul>
      <p>
        Copyright 2021 &copy; 2022  
      </p>
    </div>
  )
}

export default Footer
