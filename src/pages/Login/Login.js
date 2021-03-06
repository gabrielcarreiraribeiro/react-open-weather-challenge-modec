import React from 'react'
import { useNavigate } from 'react-router-dom'

import constants from '../../constants'
import { clearLocalStorage } from '../../localStorage'

import backgroundVideo from '../../assets/videos/clouds_video.mp4'

import './Login.css'

export default function Login() {

    const onNavigate = useNavigate()

    function handleGetStarted() {
        clearLocalStorage()
        onNavigate("/Home")
    }

    return (
        <div className="login-container">

            <video src={backgroundVideo}
                className="background-video-login"
                loop
                autoPlay
                muted />

            <div className="title-container" />

            <img className="open-weather-logo" src={constants.openWeatherLogoUrl} alt="Open Weather Logo" />

            <span className="login-title">Welcome to my OpenWeather Challenge!</span>

            <div onClick={() => handleGetStarted()} className="get-started-button">
                <span>Get Started</span>
            </div>

        </div>
    );
}