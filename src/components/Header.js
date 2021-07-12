import React from "react";
import {Link} from "react-scroll";

//react-typed
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
      <h1>full stack web developer</h1>
      <Typed
      className="typed-text"
      strings={["Full Stack Web Development", "Web Design", "Marketing"]}
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      <Link smooth={true} to="contactMe" offset={-110} className="btn-main" href="#">contact me</Link>
      </div>
      
    </div>
  )
}

export default Header
