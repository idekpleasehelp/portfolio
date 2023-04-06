import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem"}}/>
                    <div>
                        <p>KIIT University,</p>
                        <p>Bhubaneshwar</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}}/>
                +91-7258035365</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/>
                snehalsh8@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>.about()</h4>
                <p>This is Snehal Toppo...</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight: "1rem"}}/>

                <FaTwitter size={30} style={{color:"white", marginRight: "1rem"}}/>

                <FaLinkedin size={30} style={{color:"white", marginRight: "1rem"}}/>

                <FaInstagram size={30} style={{color:"white", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer