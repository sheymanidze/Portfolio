import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";

//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style ={{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="aboutMe" offset={-110} className="nav-link" href="#">about me</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="contactMe" offset={-110} className="nav-link" href="#">contact me</Link>
        </li> 
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default Navbar
