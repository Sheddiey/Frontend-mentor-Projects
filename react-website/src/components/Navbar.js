import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <link to="/" className='navbar-logo'>
               TRVL   //icon
            </link>
        </div>

    </nav>
    </>
  )
}

export default Navbar