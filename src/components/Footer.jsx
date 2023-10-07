import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
        <div className = 'w-full h-[100px] flex justify-center items-center '>
            <p className= 'font-bold'>Copyright {year} Daniel Ampofo </p>
        </div>
    </div>
  )
}

export default Footer