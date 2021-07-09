import React from "react";
import {Link} from "react-scroll";
import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { FaGithubSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="webSections col-lg-4 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="aboutMe" offset={-110} className="footer-nav">About me</Link>
                <br />
              </div>
              <div className="col">
              <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth={true} to="contactMe" offset={-110} className="footer-nav">Contact Me</Link>
              </div>
            </div>
          </div>

          <div className="socialMediaBtn d-flex justify-content-end">
           <div className="col-lg-3 col-md-5 col-sm-6 pt-3 text-center">
             <LinkedinShareButton
                url={"https://www.linkedin.com/in/sheymanidze/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <EmailShareButton
                url={"mailto:sorkin.anastasia@gmail.com"}
              >
                <EmailIcon className="mx-3" size={36} />
              </EmailShareButton>
              </div>
              
              <div
                url={"https://github.com/sheymanidze?tab=repositories"}>
                <FaGithubSquare className="mx-3" size={36} />
              </div>
              </div>
          <div className="copyRights align-items-center">
            <p className="pt-3 text-center">
              
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Anastasia Sorkin | Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
