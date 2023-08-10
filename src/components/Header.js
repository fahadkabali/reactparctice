import React from "react";
import image from "../images/IMG_9772.JPG"

export default function Header(){
    return(
        <header className="header">
             <img src={image} alt="me" className="image"/>
            <div className="wrapper">
            <h1>Fahad Kabali</h1>
            <h3>Frontend Developer</h3>
            <p className="email"><small>kabalifahad<strong>@gmail.com</strong></small></p>
                <nav className="nav-button">
                    <button>Email</button>
                    <button>LinkedIn</button>
                </nav>
            </div>
        </header>
    )
}