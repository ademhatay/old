import React from 'react';
import { EmojiIcon, GifIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon';

const TweetBox = () => {
    return (
        <div className='flex-1  mt-2 px-2'>
            <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none'
                placeholder="What's happining?"
            />
            <div className='flex items-center justify-between'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-ligtest'>
                        <ImageIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-ligtest'>
                        <GifIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-ligtest'>
                        <PollIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-ligtest'>
                        <EmojiIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-ligtest'>
                        <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                </div>
                <button 
                onClick={() => alert("Tweet Gönderildi")}
                className='bg-primary-base text-white rounded-full px-4 py-2 text-base '>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox