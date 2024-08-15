import React, {useState} from 'react';
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Navbar from "./components/Navbar";
import { NestedCard1 } from "./components/NestedCard1";
import { NestedCard2 } from "./components/NestedCard2";
import { Task } from "./components/todo/Task";
import Weathercard from "./components/WeatherCard";
import { Routes, Route } from "react-router-dom";
import {ThemeContext, themes} from './components/themeContext';



function App() {
  const [theme , setTheme] = useState(themes.light);

  const handleOnClick  = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <div className='w-full h-screen'>
      <ThemeContext.Provider value={{theme , handleOnClick}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weathercard />} />
        <Route path="card2" element={<Card2 />} />
        <Route path="card3" element={<Card3 />}>
          <Route path="nestedcard1" element={<NestedCard1/>} />
          <Route path="nestedcard2" element={<NestedCard2/>} />
        </Route>
        <Route path='task' element={<Task/>}/>
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
