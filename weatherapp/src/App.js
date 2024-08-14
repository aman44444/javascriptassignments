import "./App.css";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Navbar from "./components/Navbar";
import { NestedCard1 } from "./components/NestedCard1";
import { NestedCard2 } from "./components/NestedCard2";
import Weathercard from "./components/WeatherCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Weathercard />} />
        <Route path="card2" element={<Card2 />} />
        <Route path="card3" element={<Card3 />}>
          <Route path="nestedcard1" element={<NestedCard1/>} />
          <Route path="nestedcard2" element={<NestedCard2/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
