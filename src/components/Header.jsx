import React from 'react'
import logo from "../image/TrollFace.png"
function Header() {
  return (
    <header className='header'>
        <img src={logo} className='header--image' alt="logo" />
        <h1 className='header--title'>Meme Generator</h1>
    </header>
  )
}

export default Header