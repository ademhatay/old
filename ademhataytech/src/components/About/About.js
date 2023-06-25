import React from 'react'
import Hero from '../Main/Hero'
import Card from '../Main/Card'
const About = () => {
  return (
    <div className=' dark:bg-gray-800'>
      <Hero />
      <div className='text-center'>
        <h3 className='text-4xl'>Diğer Projelerim</h3>
        <div className="flex flex-wrap my-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default About