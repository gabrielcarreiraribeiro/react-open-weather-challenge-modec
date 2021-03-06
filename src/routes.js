import React from 'react'
import {
    Routes,
    Route
  } from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CityWeatherDetails from './pages/CityWeatherDetails/CityWeatherDetails'

export default function PageRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/cityWeatherDetails" element={<CityWeatherDetails />}/>
        </Routes>
    );
}