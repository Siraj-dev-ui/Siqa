import React from 'react'
import './Header.css'
import {Link,BrowserRouter as Router} from 'react-router-dom'

function Header() {
  return (
    <div className='header_main_container'>
        <div className='logo'>SIQA Test</div>
        <div className='options'>
            <ul>
             
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/Create">
                <li>Create</li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Header