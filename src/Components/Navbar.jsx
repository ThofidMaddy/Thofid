import React from 'react'
// import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'


function Navbar() {
//   scrollToTop = () => {
//     scroll.scrollToTop(); 
// };
  const [scrolled,setScrolled]=useState(false);
const handleScroll=() => {
      setScrolled(window.scrollY >0);
      
  };

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => window.addEventListener("scroll",handleScroll);
  });
 

  return (
    <nav id='navst' className={`${scrolled ? "scrolled" : " "}`}>
      <div className='inner-div'>
        <div class='logo'>Thofid</div>
        <Link
    activeClass="active"
    to="/work"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} >click</Link>
>
        <div className='nav-list' >
          
        <li className='hek'> <Link style={{color: "Black"}} className='text-decoration-none p-2' to='/Home'activeClass="active" to="home" duration={700} spy={true} smooth={true}>Home</Link></li>
        <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' spy={true} smooth={true} to="about" duration={700}>About</Link></li>

      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' spy={true} smooth={true} to="skills">Skills</Link></li>
      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' spy={true} smooth={true} isDynamic={true} to="works">Works</Link></li>
      <li className='hek'><Link style={{color: "Black"}} className='text-decoration-none p-2' spy={true} smooth={true} to="contacts">Contacts</Link></li>
  
        </div>
        </div>
    </nav>
  )
}

export default Navbar