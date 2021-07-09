import React from "react";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex">
            <a href="https://github.com/sheymanidze?tab=repositories" target="_blank">Github</a>
            </div>
            <div className="d-flex">
              <div className="emailFooter">
               <a href="mailto:sorkin.anastasia@gmail.com">sorkin.anastasia@gmail.com</a>
            </div>
              
            </div>
          </div>
          <div className="webSections col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Portfolio</a>
              </div>
              <div className="col">
                <a className="footer-nav">Resume</a>
                <br />
                <a className="footer-nav">Contact Me</a>
              </div>
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
