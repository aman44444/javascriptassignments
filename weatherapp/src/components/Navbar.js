import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='card2'>Card2</Link>
            </li>
            <li>
                <Link to='card3'>Card3</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
