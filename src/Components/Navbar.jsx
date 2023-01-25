import React from 'react'
import { Link } from 'react-router-dom'
import { useState ,useEffect } from 'react'

const [nav,setNav] = useState();

function Navbar() {
  return (
    <div id='navst' className='d-flex justify-content-between h-3 p-3'>
        <div class='logo' >Thofid</div>
        <div id='navlist'className='list-unstyled d-flex  fs-3 p-3' >
          
        <li className='hek'> <Link style={{color: "Black"}} className='text-decoration-none p-2' to='/Home'>Home</Link></li>
        <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' to='/About'>About</Link></li>

      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' to='/Skills'>Skills</Link></li>
      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' to='/Works'>Works</Link></li>
      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' to='/Contacts'>Contacts</Link></li>
  
        </div>
    </div>
  )
}

export default Navbar