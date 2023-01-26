import React from 'react'
import logo from '../Assets/aboutlogo.svg';
function About() {
  return (
    <div id='about' className='d-flex m-3'>
      <div className='w-50'>
      <img src={logo} alt="" srcset="" style={{height:"500px", width:"500px"}} />
      </div>
      <div className='w-50'>
       <h1>About Me</h1>
       <p>I am a web developer with a passion for creating visually appealing and user-friendly websites using HTML, CSS, JavaScript, and PHP. I have experience in both front-end and back-end development, and am proficient in popular content management systems. I stay current with the latest web development trends and best practices and have experience with responsive design and SEO. I am dedicated to delivering high-quality websites that provide a seamless user experience.</p>
      </div> 
    </div> 
  )
}

export default About