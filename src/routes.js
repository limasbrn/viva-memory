import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import EaseLevelPage from "./pages/ease";
import NormalLevelPage from "./pages/normal";
import HardLevelPage from "./pages/hard";
import CongratsPage from "./pages/congrats";



const MainRoutes = ( ) => {
    return(
        <Routes >

            <Route 
            path="/" 
            element={<HomePage/>}
            />
            <Route 
            path="/ease" 
            element={<EaseLevelPage/>}
            />
            <Route 
            path="/normal" 
            element={<NormalLevelPage/>}
            />
            <Route 
            path="/hard" 
            element={<HardLevelPage/>}
            />
            <Route 
            path="/congrats" 
            element={<CongratsPage/>}
            />
            
        </Routes>  
          )
}

export default MainRoutes;
