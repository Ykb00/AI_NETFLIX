import React from 'react'

const VideoContainer = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-80  px-2 md:px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-base w-1/4'>{overview}</p>

      <div className='flex my-2 md:my-0'>
        <button className='bg-white text-black p-4 px-6 md:px-16 text-base hover:bg-gray-400 rounded-md'> Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-base hover:bg-gray-400 rounded-md opacity-50'> More Info</button>
      </div>
    </div>
  )
}

export default VideoContainer
