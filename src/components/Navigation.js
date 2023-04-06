import "./NavbarStyles.css"
import { Link } from "react-router-dom"

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
        <Link to = "/">
            <h1>.snehal()</h1>
        </Link>
        <ul className= {click? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to = "/">.home()</Link>
          </li>
          <li>
            <Link to = "/about">.about()</Link>
          </li>
          <li>
            <Link to = "/projects">.projects()</Link>
          </li>
          <li>
            <Link to = "/contact">.contact()</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: "#370071"}}/>) : (<FaBars size={20} style={{color: "#370071"}}/>)}
          
        </div>
    </div>
  )
}

export default Navigation