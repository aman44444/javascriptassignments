import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './themeContext'

const Navbar = () => {
  const {theme, handleOnClick} = useContext(ThemeContext)
  return ( 
    <div className={ ` flex justify-center items-center ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} `} >
        <ul className='flex justify-items-end'>
            <li className='m-4'>
                <Link to='/'>Home</Link>
            </li>
            <li className='m-4'>
                <Link to='card2'>Card2</Link>
            </li>
            <li className='m-4'>
                <Link to='card3'>Card3</Link>
            </li>
            <li className='m-4'>
                <Link to='task'>Task</Link>
            </li>
        </ul>
        <button className={`${theme=== 'dark' ?  'bg-white text-black': 'bg-black text-white'}`} onClick={handleOnClick}>
          {theme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
  )
}

export default Navbar