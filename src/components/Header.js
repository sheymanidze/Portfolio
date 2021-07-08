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
      strings={["Web Design", "Full Stauck Web Development", "Marketing"]}/>
      </div>
      
    </div>
  )
}

export default Header
