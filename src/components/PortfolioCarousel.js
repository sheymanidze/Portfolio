import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import budget from "../images/budget.png";
import quiz from "../images/code-quiz.png";
import planner from "../images/day-planner.png";
import empTracker from "../images/empl-tracker.png";
import fitness from "../images/fitness-tracker.png"
import notes from "../images/note-taker.png"
import pasGen from "../images/password-generator.png";
import surfing from "../images/plan-surfing.png";
import postman from "../images/postman_list.png";
import quack from "../images/quack.png";
import scratch from "../images/scratch.png";
import start from "../images/start.png";
import teamGen from "../images/team-gen.png";
import techBlog from "../images/tech-blog.png";
import weather from "../images/weather-dashboard.png";


const PortfolioCarousel = () => {
  return (
   <Carousel>
     <>
       <img className="portfolio-image" src={quack} alt="Budget Trackers"/>
     </>
     <>
       <img className="portfolio-image" src={surfing} alt="Plan Surfing"/>
     </>
     <>
       <img className="portfolio-image" src={budget} alt="Budget Trackers"/>
     </>
     <>
       <img className="portfolio-image" src={fitness} alt="Fitness Tracker"/>
     </>
     <>
       <img className="portfolio-image" src={techBlog} alt="Tech Blog"/>
     </>
     <>
       <img className="portfolio-image" src={postman} alt="E-Commerce back end"/>
     </>
     <>
       <img className="portfolio-image" src={empTracker} alt="Employee Tracker"/>
     </>
     <>
       <img className="portfolio-image" src={teamGen} alt="Team Profile Generator"/>
     </>
     <>
       <img className="portfolio-image" src={notes} alt="Note Taker"/>
     </>
     <>
       <img className="portfolio-image" src={weather} alt="BWeather Dashboear"/>
     </>
     <>
       <img className="portfolio-image" src={planner} alt="Day Planner"/>
     </>
     <>
       <img className="portfolio-image" src={quiz} alt="Code Quiz"/>
     </>
     <>
       <img className="portfolio-image" src={pasGen} alt="Password Generator"/> 
     </>
     <>
       <img className="portfolio-image" src={start} alt="ReadME Generator"/> 
     </>
     <>
       <img className="portfolio-image" src={scratch} alt="Scratch Game"/>
     </>
   </Carousel>
    
  )
}

export default PortfolioCarousel
