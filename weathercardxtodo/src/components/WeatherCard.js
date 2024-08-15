import React, { useState } from 'react'

const Weathercard = () => {
    const [search , setSearch] = useState("")
    const [weather , setWeather] = useState({});

    const searchHandle = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
          setWeather(result);
          
        })
        
    }
  return (
    <div className='h-4/5 w-screen flex justify-center items-center '>
        <div className='w-1/2 h-1/2 bg-slate-500 rounded-lg flex  items-center flex-col p-10 shadow-lg'>
            <h2 className='text-lg'>Weather Card</h2>
            <div>
            <input className='border-b-2 border-black rounded-md p-1 ml-8 mt-2' type='text' placeholder='search city...' onChange={(e) => {
                setSearch(e.target.value);
            }}/>
            <button className='ml-2 bg-black text-white rounded-md p-1' onClick={searchHandle}>Search</button>
            </div>
            <div>
               <h2>{weather.name}</h2>
               {/* <p>{weather.main.temp}</p> */}
              
            </div>
           
        </div>
    </div>
  )
}

export default Weathercard