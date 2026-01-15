import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Home } from "../components/pages/Home"
import { Users } from "../components/pages/Users"

export const Rutas = () => {
  return (
    <BrowserRouter>                
      {/*CONTENIDO CENTRAL Y RUTAS*/}
         <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>;
                <Route path="/users" element={<Users/>}/>;
            </Routes>
         </section>  
    </BrowserRouter>
  )
}