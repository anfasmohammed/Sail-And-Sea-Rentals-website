import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import PageNotFount from "./pages/PageNotFount";
import Plans from "./pages/Plans";
import Boats from "./pages/Boats";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="*" element={<PageNotFount/>}/>
      <Route path="/Plans" element={<Plans/>}/>
      <Route path="/boats" element={<Boats/>}/>

    </Routes>
    
  );
}

export default App;
