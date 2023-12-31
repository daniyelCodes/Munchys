import React from 'react'

const HeadlineCards = () => {
    return (
        <div className= 'max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className=' rounded-xl relative '>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className= 'font-bold text-2xl px-2 pt-4'>Hot New Dishes </p>
                    <p className= 'px-2'>Through 8/26 </p>
                    <button className= 'border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className= 'max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl  ' src='https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            </div>

            {/* Card */}
            <div className=' rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className= 'font-bold text-2xl px-2 pt-4'>New Restaurants  </p>
                    <p className= 'px-2'>Added Daily </p>
                    <button className= 'border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            </div>

            {/* Card */}
            <div className=' rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts </p>
                    <p className= 'px-2'>Tasty treats </p>
                    <button className= 'border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            </div>
        </div>
    )
}

export default HeadlineCards