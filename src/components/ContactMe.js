import React from "react";

const ContactMe = () => {
  return (
    <div className="contactMe">
      <div className="text-center">
      <h1>contact me</h1>
       <p>Please fill out the form and I will contact you as soon as possible.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="line"></div>
            <input 
             type="text"
             className="form-control"
             placeholder="Name"
             name="name"
            />
            <div className="line"></div>
            <input 
              type="text"
             className="form-control"
             placeholder="Phone Number"
             phone="phone"
            />
            <div className="line"></div>
            <input 
             type="email"
             className="form-control"
             placeholder="Email"
             email="email"
            />
            <div className="line"></div>
          </div>
          <div className="col-md-6 col-xs-12">
           <textarea
             type="text"
             className="form-control"
             placeholder="Description"
             description="description"
            ></textarea>
            <div className="line"></div>
            <button className="btn-main contact-btn" type="submit">contact me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
