import React from 'react'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import Food from '../components/Food'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
          <Hero />
          <HeadlineCards />
          <Food />
          <Categories />
    </div>
  )
}

export default Home