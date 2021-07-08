import React from "react";
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

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 classNmae="text-uppercase text-center py-5">portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
            <img className="portfolio-image" src={quack} alt="Budget Trackers"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={surfing} alt="Plan Surfing"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={budget} alt="Budget Trackers"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={fitness} alt="Fitness Tracker"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={techBlog} alt="Tech Blog"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={postman} alt="E-Commerce back end"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={empTracker} alt="Employee Tracker"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={teamGen} alt="Team Profile Generator"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={notes} alt="Note Taker"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={weather} alt="BWeather Dashboear"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={planner} alt="Day Planner"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={quiz} alt="Code Quiz"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={pasGen} alt="Password Generator"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={start} alt="ReadME Generator"/>
            </div>
          </div>

          <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={scratch} alt="Scratch Game"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio
