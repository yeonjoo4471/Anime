import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header_i'>
        <h1 className='logo'>
          <Link to="/"> LOGO </Link>
        </h1>
        <ul>
          <li><Link to="/Sub1">menu-1</Link></li>
          <li><a href="#">menu-2</a></li>
          <li><a href="#">menu-3</a></li>
          <li><a href="#">menu-4</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
