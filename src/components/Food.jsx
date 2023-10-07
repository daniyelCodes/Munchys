import React, { useState } from 'react'
import { data } from '../data/data.js'
import {BiFilter } from 'react-icons/bi'
import { Link } from 'react-router-dom'




const Food = () => {
  const [food, setFood] = useState(data)

  // filter by type
  const filterType = (category) => {
    setFood(data.filter((item) => {
      return item.category === category
    }))
  }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center' >Top Rated Items</h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* filter type */}
        <div className= 'mx-auto'>
          <div className = 'flex items-center justify-center'>
          <p className='font-bold text-gray-700 text-center mt-4'>Filter Type</p>
          <BiFilter size={25} className= 'mt-3'/>
          </div>

          <div className='flex justify-between flex-wrap'>
            <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-black' onClick={() => setFood(data)}>ALL</button>
            <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-black' onClick={() => filterType('burger')}>BURGERS</button>
            <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-black' onClick={() => filterType('pizza')}>Pizza</button>
            <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-black' onClick={() => filterType('salad')}>Salads</button>
            <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-black' onClick={() => filterType('chicken')}>Chicken</button>
          </div>
        </div>

       
      </div>

      {/* food items */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index) => (
          <div key={index} className=' border shadow-lg rounded-lg hover:scale-105 cursor-pointer'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between items-center px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default Food