import React from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {

  // send an email when click contact me button from contact me section
  const serviceId="service_ID";
  const templateId="template_profile_contact";
  const userId="user_efK1Upr3xQiAoHD3raQ64";
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contactMe">
      <div className="text-center">
      <h1>contact me</h1>
       <p>Please fill out the form and I will contact you as soon as possible.</p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="line"></div>
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Name"
               name="name"
             />
             <div className="line"></div>
            </div>
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Phone Number"
               name="phone"
             />
             <div className="line"></div>
            </div>
            <div className="text-center">
             <input 
               type="email"
               className="form-control"
               placeholder="Email"
               name="email"
             />
             <div className="line"></div>
            </div>

            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Subject"
               name="subject"
             />
             <div className="line"></div>
            </div>

          </div>
          <div className="col-md-6 col-xs-12">
           <textarea
             type="text"
             className="form-control"
             placeholder="Description"
             name="description"
            ></textarea>
             <div className="line"></div>
             <div className="text-center"></div>
            <button className="btn-main contact-btn" type="submit">contact me</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
