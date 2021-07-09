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
   <Carousel
     infiniteLoop={true}
     showArrows={true}
     autoPlay={true}
     interval={3000}
     showThumbs={false}
     >
     <>
       <a href="https://birdwatcherquack.herokuapp.com/" target=" _blank">
         <img className="portfolio-image" src={quack} alt="Budget Trackers"/>
         <div className="myCarousel">
           <h3>BirdWatcher Quack: CSS,HTML, JavaScript, Node, Express, MySql, Postman, Sequelize, Handlebars, Heroku, Bootstrap, Bulma, W3S, Leaflet.JS</h3>
         </div>
        </a>
     </>
     <>
       <a href=" https://sheymanidze.github.io/Plan-surfing/" target=" _blank">
         <img className="portfolio-image" src={surfing} alt="Plan Surfing"/>
         <div className="myCarousel">
           <h3>Plan Surfing: JavaScript,HTML,CSS, Bootstrap, Bulma, W3S</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://git.heroku.com/budget-trackers-online-offline.git" target=" _blank">
         <img className="portfolio-image" src={budget} alt="Budget Trackers"/>
         <div className="myCarousel">
           <h3>Budget Trackers: CSS,HTML, JavaScript, Node, Express, Mongo, Mongoose, Heroku</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://stay-fit-tracker.herokuapp.com/" target=" _blank">
         <img className="portfolio-image" src={fitness} alt="Fitness Tracker"/>
         <div className="myCarousel">
           <h3>Fitness Tracker: CSS,HTML, JavaScript, Node, Express, Mongo, Mongoose, Heroku</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://tech-blog-a.herokuapp.com/" target=" _blank">
         <img className="portfolio-image" src={techBlog} alt="Tech Blog"/>
         <div className="myCarousel">
           <h3>Tech Blog: CSS,HTML, JavaScript, Node, Express, MySql, Postman, Sequelize,Handlebars, Heroku, Bootstrap, Bulma</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://github.com/sheymanidze/E-Commerce-Back-End" target=" _blank">
         <img className="portfolio-image" src={postman} alt="E-Commerce back end"/>
         <div className="myCarousel">
           <h3>E-Commerce Back End: JavaScript, Node, Express, MySql, ORM, Postman</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://github.com/sheymanidze/Employee-Tracker" target=" _blank">
         <img className="portfolio-image" src={empTracker} alt="Employee Tracker"/>
         <div className="myCarousel">
           <h3>Employee Tracker: JavaScript, Node, Express, MySql</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://github.com/sheymanidze/Team-Profile-Generator" target=" _blank">
         <img className="portfolio-image" src={teamGen} alt="Team Profile Generator"/>
         <div className="myCarousel">
           <h3>Team Profile Generator: HTML,CSS, JavaScript, Node</h3>
         </div>
       </a>
     </>
     <>
       <a href="https://sheymanidze.herokuapp.com/" target=" _blank">
         <img className="portfolio-image" src={notes} alt="Note Taker"/>
         <div className="myCarousel">
           <h3>Note Tacker: HTML,CSS, JavaScript, Node, Express, Heroku</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://sheymanidze.github.io/Weather-Dashboard/" target=" _blank">
         <img className="portfolio-image" src={weather} alt="BWeather Dashboear"/>
         <div className="myCarousel">
           <h3>Weather Dashboard: JavaScript, CSS</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://sheymanidze.github.io/Day-Planner/" target=" _blank">
         <img className="portfolio-image" src={planner} alt="Day Planner"/>
         <div className="myCarousel">
           <h3>Day Planner: JavaScript, HTML, CSS</h3>
         </div>
        </a>
     </>
     <>
       <a href=" https://sheymanidze.github.io/Code-Quiz/" target=" _blank">
         <img className="portfolio-image" src={quiz} alt="Code Quiz"/>
         <div className="myCarousel">
           <h3>Code Quiz: JavaScript, CSS</h3>
         </div>
       </a>
     </>
     <>
        <a href="https://sheymanidze.github.io/Password-Generator/" target=" _blank">
         <img className="portfolio-image" src={pasGen} alt="Password Generator"/> 
         <div className="myCarousel">
             <h3>Password Generator: JavaScript, CSS</h3>
         </div>
        </a>
     </>
     <>
       <a href="https://github.com/sheymanidze/Professional-README-Generator" target=" _blank">
         <img className="portfolio-image" src={start} alt="ReadME Generator"/> 
         <div className="myCarousel">
           <h3>Professional README Generator: JavaScript, Node</h3>
         </div>
       </a>
     </>
     <>
       <a href="https://scratch.mit.edu/projects/470338665" target=" _blank">
         <img className="portfolio-image" src={scratch} alt="Scratch Game"/>
         <div className="myCarousel">
           <h3>Game: Scratch</h3>
         </div>
        </a>
     </>
   </Carousel>
    
  )
}

export default PortfolioCarousel
