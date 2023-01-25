
import logo from '../Assets/devloper.svg';

function Home() {
  return (
    <div className='container d-flex m-3 w-100'>
      <div className='w-50 m-auto'>
        <h2>Hello !</h2>
        <h1>I'm Thofid</h1>
        <h1>Full Stack Developer</h1>
        <button>Hire Me</button>
      </div>
      <div className='w-50 m-auto'>
        <img src={logo} alt="" srcset="" style={{height:"700px", width:"700px"}} />
      </div> 
    </div> 
  )
}

export default Home