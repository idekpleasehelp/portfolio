import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/263a75529a1752b75d64f9f21fd07c92-3-2.webp"
import React2 from "../assets/xndmxrfhliweofif9jty.webp"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>who(snehal)</h1>
            <p>Frontend developer, addicted to books, reading and creative design.</p>
            <p>I'm in the process of learning, finding optimized ways to implement the skills I've developed over the years and applying it on the projects I make.</p>
            <p>// from India</p>
            <p>// heavily overdosed on caffeine</p>
            <Link to= "/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
               <div className="img-stack top"> <img src={React1} className="img" alt="true"></img>
               </div>
               <div className="img-stack bottom"> <img src={React2} className="img" alt="true"></img>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent