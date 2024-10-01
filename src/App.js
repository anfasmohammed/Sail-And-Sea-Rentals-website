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
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout"
import Dashboard from "./pages/Admin/Dashboard";
import Boat from "./pages/Admin/Boat";
import AdminBoatDetails from "./pages/Admin/AdminBoatDetails";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="*" element={<PageNotFount/>}/>
      <Route path="/Plans" element={<Plans/>}/>
      <Route path="/boats" element={<Boats/>}/>
      <Route path="/boats/:id" element={<BoatDetails/>}/>

      <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="/admin/income" element={<Income/>}/>
      <Route path="/admin/reviews" element={<Reviews/>}/>
      <Route path="/admin/boat" element={<Boat/>}/>
      <Route path="/admin/boat/:id" element={<AdminBoatDetails/>}/>
    </Route>

      </Route>
  

    </Routes>
    
  );
}

export default App;
