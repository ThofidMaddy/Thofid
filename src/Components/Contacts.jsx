import React from 'react'
import contactslogo from '../Assets/contactslogo.svg';

function Contacts() {
  return (
    <div id="contacts" className='container d-flex m-3 w-100'>
    <div className='w-50 m-auto'>
    <img src={contactslogo} alt="" srcset="" style={{height:"700px", width:"700px"}} />
    </div>
    <div className='w-50 m-auto'>
     
    </div> 
  </div> 
  )
}

export default Contacts