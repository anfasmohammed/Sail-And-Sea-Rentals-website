import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import PageNotFount from "./pages/PageNotFount";
import Plans from "./pages/Plans";
import Boats from "./pages/Boats";
import BoatDetails from "./pages/BoatDetails";
import Income from "./pages/Admin/Income"
import Reviews from "./pages/Admin/Reviews";
import Dashboard from "./pages/Admin/Dashboard";
import Boat from "./pages/Admin/Boat";
import AdminBoatDetails from "./pages/Admin/AdminBoatDetails";

function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-primary/40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Explore" element={<Explore/>}/>
      <Route path="*" element={<PageNotFount/>}/>
      <Route path="Plans" element={<Plans/>}/>
      <Route path="boats" element={<Boats/>}/>
      <Route path="boats/:id" element={<BoatDetails/>}/>

      <Route path="admin" element={<Dashboard/>}/>
      <Route path="income" element={<Income/>}/>
      <Route path="reviews" element={<Reviews/>}/>
      <Route path="boat" element={<Boat/>}/>
      <Route path="boat/:id" element={<AdminBoatDetails/>}/>
  

    </Routes>
    </div>
    
    
  );
}

export default App;
