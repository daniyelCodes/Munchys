import React from 'react'
import { categories } from '../data/data'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 cursor-pointer '>
        <h className= 'text-orange-600 font-bold text-4xl'>Categories</h>  

          <div className= 'grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
            {categories.map((item, index) => (
               <Link>
               <div key={index} className='bg-gray-100 rounded-lg flex justify-between items-center hover:scale-105'>
                        <h2 className= 'font-bold sm:text-xl ml-3'>{item.name}</h2>
                        <img className= 'w-20' src={item.image} alt={item.name} />
                 </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Categories