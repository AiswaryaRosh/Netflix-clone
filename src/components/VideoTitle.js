import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from black'>
      <h1 className='text-4xl fomnt-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex '>
        <button className='bg-white text-black p-4 px-13 mr-5 text-lg font-bold rounded-lg hover:bg-opacity-90'>▶️Play</button>
        <button className='bg-gray-500 text-white p-4 px-13 text-lg font-bold bg-opacity-50 rounded-lg'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle