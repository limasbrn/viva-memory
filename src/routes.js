import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import GamePage from "./pages/game";



const MainRoutes = ( ) => {
    return(
        <Routes >

            <Route 
            path="/" 
            element={<HomePage/>}
            />
            <Route 
            path="/game" 
            element={<GamePage/>}
            />
            
        </Routes>  
          )
}

export default MainRoutes;
