import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/shinjuku-japan-night-tokyo.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src = {IntroImg} alt = "IntroImg" />
        </div>
        <div className="content">
            <h1>snehal.is()</h1>
            <p>Snehal Shreya Toppo</p>
            <h1>FrontEnd Developer</h1>
            <div>
                <Link to = "/about" className="btn">.about()</Link>
                <Link to = "/contact" className="btn btn-light">.contact()</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg