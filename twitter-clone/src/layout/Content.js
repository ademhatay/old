import React from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import { TrendsIcon } from '../icons/Icon';
const Content = () => {
  return (
    <main className="flex-1 flex-col border-l border-r">
      <header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <TrendsIcon className="w-6 h-6 text-primary-base"/>
      </header>
      <div className='flex px-4 py-3 space-x-4'>
        <img className='w-11 h-11 rounded-full' src='https://avatars.githubusercontent.com/u/66277966?v=4' alt='profile' />
        <TweetBox />
      </div>
      <Divider />
    </main>
  )
}

export default Content