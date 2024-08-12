import React, { useState } from 'react'
import data from './data';

const ImageSlider = () => {
  const [index ,setIndex] = useState(0);

  const handlePreviousClick = () => {
    if(index > 0){
    setIndex(index -1);
    }
  }

  const handleNextClick = () => {
    if(index < data.length -1 )
     setIndex(index + 1);
  }

  return (
    <div className='flex flex-col items-center justify-center h-1/2 bg-gray-100'>
        <button onClick={handlePreviousClick} disabled={index === 0} className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none ${
            index === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}>Previous</button>
        <div className='w-full'>
        {data.map((url, i) => (
          
             <img 
             key={url}
             src={url} 
             alt="random images"
              className={`w-full h-1/2 object-contain transition-opacity duration-300 ease-in-out ${
                index === i ? 'block' : 'hidden'
              }`}/>
           
        ))
            
        }
        </div>
        <button onClick={handleNextClick} disabled={index === data.length -1}  className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none ${
            index === data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}>Next</button>
    </div>
  )
}

export default ImageSlider


