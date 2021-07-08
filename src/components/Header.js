import React from "react";

//react-typed
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
      <h1>full stack wed developer</h1>
      <Typed
      classNmae="typed-text"
      strings={["Full Stack Web Development", "Web Design", "Marketing"]}
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      <a href="https://github.com/sheymanidze" className="btn-main">contact me</a>
      </div>
      
    </div>
  )
}

export default Header
