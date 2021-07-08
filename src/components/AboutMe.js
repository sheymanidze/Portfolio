import React from "react"
import me from "../about-me.png"

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
           <img className="profile-img" src={me} alt="author"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-me">About Me</h1>
          <p>
           Hello! I am Anastasia. I am an independent web developer who is passionate about bringing client’s visions to life. My strongest skill is creativity, being able to gather client's requirements and translate those intoan engaging, effective and unique website.
          </p>
          <p>
           Also, I am a goal oriented innovative entrepreneur and a passionate marketer with tactful and diplomatic communication skills. My spectrum of unique skills makes me a solid competitor in the modern, fast-growing marketing industry. I am successfully initiated, led and managed teams and projects that greatly exceeded all expectations.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe
