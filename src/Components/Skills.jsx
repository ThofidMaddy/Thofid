import React from 'react'
import skillslogo from '../Assets/skillslogo.svg';
function Skills() {
  return (
    <div id='skills' className='container d-flex m-3 w-100'>
    <div className='w-50 m-auto'>
      <h2>Hello !</h2>
      <h1>I'm Thofid</h1>
      <h1>Full Stack Developer</h1>
      <button>Hire Me</button>
    </div>
    <div className='w-50 m-auto'>
      <img src={skillslogo} alt="" srcset="" style={{height:"700px", width:"700px"}} />
    </div> 
  </div> 
  )
}

export default Skills