import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className= 'max-w-[1640px] mx-auto h-screen flex flex-row items-center justify-center  '>
      <div className= 'flex flex-row w-[700px] h-[400px] border border-black-75 shadow-2xl '>
        
        <div className= 'w-[350px] h-[400px] hidden md:flex'>
          <img src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='' className= ' w-full h-full object-fit' />
        </div>
        

        <div className = "flex flex-col h-[400px] w-[350px]">
          <div className = 'mt-10 '>
            <h1 className = "text-4xl text-center font-bold text-orange-600">Login</h1>
          </div>
          
            <form method='post' className= 'flex flex-col justify-center w-full px-2 h-full ' >
                <label className= 'font-bold' >Email</label>
                <input type="email" name="email"  className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none mb-2' placeholder='Email' />
                <label className='font-bold' >Password</label>
                <input type="password" name="password"  className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none' placeholder='Email' />

                <button className= 'bg-orange-600 text-white p-2 rounded-lg mt-4'>Login</button>

            <p className='text-center mt-4'>Don't have an account? <span className='text-orange-600'><Link to={"/signup"}>Sign-up</Link></span></p>
              </form>
        

        </div>
      </div>
    </div>
  )
}

export default Login