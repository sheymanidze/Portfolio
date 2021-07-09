import React from "react"
import PortfolioCarousel from "./PortfolioCarousel";

const Portfolio = () => {
  return (
   
 <div id="portfolio" className="portfolio-wrapper">
 <div className="container">
   <h1 className="text-uppercase text-center py-5">portfolio</h1>
   <div className="portfolio-content">
     <PortfolioCarousel/>
   </div>
   
   </div>
 </div>  
  )
}

export default Portfolio
