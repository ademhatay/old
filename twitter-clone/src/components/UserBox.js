import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
        <img className='w-11 h-11 rounded-full' src='https://avatars.githubusercontent.com/u/66277966?v=4' alt='profile' />
        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>Adem Hatay</span>
            <span className='text-sm text-gray-dark'>@hatayadem</span>
        </div>
        <div className='flex space-x-1'>
            <span className='w-1 h-1 bg-gray-900 rounded-full'/>
            <span className='w-1 h-1 bg-gray-900 rounded-full' />
            <span className='w-1 h-1 bg-gray-900 rounded-full'/>
        </div>
    </div>
  )
}

export default UserBox