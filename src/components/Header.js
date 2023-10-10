import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='H-Container'>
      <div className='Logo'>
        <h2>Fashionista</h2>
      </div>
      <div className='NavContainer'>
         <div className='Nav'>
            <Link>Home</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>Kids</Link>
            <button>Login</button>
         </div>
      </div>
      <div className='Logo'>
      </div>
      <br/>
    </div>
    
    
  )
}

export default Header