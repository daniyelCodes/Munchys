import React, { useState, useEffect } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineLogin, AiOutlineMenu, AiOutlineSearch, } from 'react-icons/ai'
import { MdOutlineFastfood } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'


const Navbar = () => {
    const [nav, setNav] = useState(false)


    


    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <Link to={"/"} className='text-2xl sm:text-3xl lg:text-4xl font-bold font-baloo px-2'>Munchys</Link>

                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 pr-3 text-[14px] cursor-pointer'>
                    <p className='bg-[#474444] text-white p-1 px-2   rounded-full'>Delivery</p>
                    <p className='p-1 pl-2'>Pickup</p>
                </div>
            </div>

            {/* Search */}

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type="text" name="" id="" placeholder='Search foods ' className='bg-transparent p-2 w-full focus:outline-none' />
            </div>

            {/* Right Side */}
            <div className='flex items-center justify-center '>
                {/* login */}
                <div className='hidden md:flex  cursor-pointer hover:underline pr-4'>
                    <AiOutlineLogin size={25} />
                    <Link to={"login"} className='text-bold font-baloo text-xl' >Login</Link>
                </div>

                {/* cart */}
                <Link to={"cart"} >
                    <button className='bg-orange-600 border-none text-white hover:bg-orange-400 hidden md:flex items-center py-2 rounded-full'>
                        <BsFillCartFill size={20} className='mr-2' />
                        Cart
                    </button>
                </Link>
            </div>





            {/*//////////////////////////// Mobile Menu ///////////// */}

            {/* black overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div> : ""}


            {/* side drawer menu  */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute top-4 right-4 cursor-pointer  ' onClick={() => setNav(!nav)} />
                <Link to={"/"} onClick={() => setNav(!nav)} className='text-4xl p-4 font-baloo'>Munchys</Link>
                <nav>
                    {/* links */}
                    <ul className=' flex flex-col p-4 text-gray-800'>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><MdOutlineFastfood size={25} className='mr-4' />Products</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><TbTruckDelivery size={25} className='mr-4' />Orders</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><MdFavorite size={25} className='mr-4' />Favorites</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><FaWallet size={25} className='mr-4' />Wallet</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><MdHelp size={25} className='mr-4' />Help</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><AiFillTag size={25} className='mr-4' />Promotions</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><BsFillSaveFill size={25} className='mr-4' />Best ones</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><FaUserFriends size={25} className='mr-4' />Invite</Link>
                        <Link className='text-xl py-4 flex' onClick={() => setNav(!nav)}><GrContact size={25} className='mr-4' />Contact</Link>
                    </ul>

                    {/* login */}
                    <div className='flex items-center justify-center bg-[#212A3E] hover:bg-[#445069]  text-white rounded-full mx-4 py-1 md:hidden cursor-pointer' >
                        <AiOutlineLogin size={25} />
                        <Link to={"login"} onClick={() => setNav(!nav)} className='text-bold font-baloo text-xl'>Login</Link>
                    </div>


                    {/* cart */}
                    <div className=' mx-4 mt-4  bg-[#212A3E]  hover:bg-[#445069] cursor-pointer flex items-center justify-center text-white rounded-full '>
                        <Link to={"cart"} >
                            <button className='bg-transparent  hover:bg-[#445069] border-none text-white  flex   md:hidden  items-center py-2 rounded-full'>
                                <BsFillCartFill size={20} className='mr-2' />
                                Cart
                            </button>
                        </Link>
                    </div>

                </nav>
            </div>


        </div>
    )
}

export default Navbar