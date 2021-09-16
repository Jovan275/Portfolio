import React from 'react';
import "./Topbar.scss";
import {Person, Mail} from "@material-ui/icons";

function Topbar({menuOpen, setMenuOpen}) {
    /*logika za navbar je u prvom divu*/ 
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="item-container">
                        <Person className="icon"/>
                        <span>+381 60/727-05-98</span>
                    </div>
                    <div className="item-container">
                        <Mail className="icon"/>
                        <span>jovanconti86@gmail.com</span>
                    </div>
                </div>
            
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> 
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Topbar
