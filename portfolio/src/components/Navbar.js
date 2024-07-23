import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    const [isOpen , setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  

  return (
    <div className='navbar'>
        <div className='siteName'>
            <h2>
                Portfolio
            </h2>
        </div>

        <div className='navbar_links'>
            <ul>
                <li>
                   About Me
                </li>
                <li>
                    Projects 
                </li>
                <li>
                    Contact Me 
                </li>
            </ul>
        </div>
        <div className='hamburger'  onClick={toggleMenu}>
            <div className={`line ${isOpen ? 'open' : '' }`}>
             
            </div>
            <div className={`line ${isOpen ? 'open' : '' }`}>

            </div>
            <div className={`line ${isOpen ? 'open' : '' }`}>

            </div>
        </div>

        <div className={`navbar_Open ${isOpen ? 'open': ''}`}>

            <ul>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
           
        </div>
    </div>
  )
}

export default Navbar

