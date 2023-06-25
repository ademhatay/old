import React from 'react'
import CardContainer from './CardContainer'
import Hero from './Hero'

const Main = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <Hero />
      <CardContainer />
    </div>
  )
}

export default Main