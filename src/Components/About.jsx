import React from 'react'
import logo from '../Assets/aboutlogo.svg';
function About() {
  return (
    <div className='container d-flex m-3'>
      <div className='w-50 m-auto'>
      <img src={logo} alt="" srcset="" style={{height:"700px", width:"700px"}} />
      </div>
      <div className='w-50'>
       <h1>About Me</h1>
      </div> 
    </div> 
  )
}

export default About