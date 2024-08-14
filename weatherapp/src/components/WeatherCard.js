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
    <div>
        <div>
            <h2>Weather Card</h2>
            <div>
            <input type='text' placeholder='search city...' onChange={(e) => {
                setSearch(e.target.value);
            }}/>
            <button className='' onClick={searchHandle}>Search</button>
            </div>
            <div>
               <h2>{weather.name}</h2>
               {/* <h2>{weather.main.temp}</h2> 
               <p>{weather.weather[0].main}</p> */}
            </div>
           
        </div>
    </div>
  )
}

export default Weathercard