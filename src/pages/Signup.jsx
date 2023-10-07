import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Signup = () => {
  const [inputs, setInputs] = useState({})
  
  const handleChange = (e) => {
      const key = e.target.key
      const value = e.target.value
      setInputs({ ...inputs, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //call api
axios.post('http://localhost:3306/munchys/', inputs)
    console.log(inputs);
    
  }

  return (
    <div className='max-w-[1640px] mx-auto h-screen flex flex-row items-center justify-center  '>
      

      <div className='flex flex-row w-[700px] h-[500px] border border-black-75 shadow-2xl '>

        <div className=' w-[350px] h-full hidden md:flex '>
          <img src='https://plus.unsplash.com/premium_photo-1683892041696-71c87c1858be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='' className=' w-full h-full object-cover' />
        </div>


        <div className="flex flex-col h-[400px] w-[350px]">
          <div className='mt-10 '>
            <h1 className="text-4xl text-center font-bold text-orange-600">Sign Up</h1>
          </div>

          <form method='post' className='flex flex-col justify-center w-full px-2 h-full ' onSubmit={handleSubmit}>
            <label className='font-bold' >Username</label>
            <input type="text" name="username" className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none mb-2' placeholder='Username' onChange={handleChange} />
            <label className='font-bold' >Email</label>
            <input type="email" name="email" className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none mb-2' placeholder='Email' onChange={handleChange}  />
            <label className='font-bold' >Password</label>
            <input type="password" name="password" className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none' placeholder='password' onChange={handleChange} />

            <button className='bg-orange-600 text-white p-2 rounded-lg mt-4'>Login</button>

            <p className='text-center mt-4'>Already have an account? <span className='text-orange-600'><Link to={"/login"}>Login</Link></span></p>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Signup