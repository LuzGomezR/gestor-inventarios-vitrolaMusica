import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {FaUsers} from "react-icons/fa";

export const Home = () => {

  return (

    <div className="container-page">
        <div className="titles-page">
            <h2 className="title">Bienvenido</h2>
        </div>

        <div className="main">
            <div className="cards">
                <div className="card">
                    <NavLink to="/users" className="links" >
                    <h3>Usuarios</h3>
                    <FaUsers className="icon-home" />  
                    </NavLink>                 
                </div>
        </div>
        </div>

        

    </div>
  );
};
