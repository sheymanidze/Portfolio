import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const ContactMe = () => {
// send an email when click contact me button from contact me section
 const [successMessage, setSuccessMessage]= useState("");
 const{register, handleSubmit, setErrors, formState: { errors }}= useForm();

  const serviceId="service_ID";
  const templateId="template_profile_contact";
  const userId="user_efK1Upr3xQiAoHD3raQ64";

  const onSubmit =(data, r)=> {
    sendEmail(
      serviceId, 
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description

      },
     userId
     ) 
     r.target.reset();
  }
  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs.send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("Form sent successfully! I will contact you shortly. ");
      }).catch(err=>console.error(`Something went wrong ${err}`))
   
 }
  return (
    <div id="contactMe" className="contactMe">
      <div className="text-center">
      <h1>contact me</h1>
       <p>Please fill out the form and I will contact you as soon as possible.</p>
       <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Name"
               name="name"
              //  ref={
              //   register({
              //     required: "Please enter your name",
              //     maxLength: {
              //       value: 20,
              //       message: "Please enter a name with fewer than 20 characters"
              //     }
              //   })
              // }
               {...register("singleErrorInput", {
                required: "Required",
                message: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter the name with fewer than 20 characters..."
                 },
                 validate: name => name
              })}
             />
             {/* <ErrorMessage errors={errors} name="singleErrorInput"/> */}
             <div className="line"></div>
            </div>
            {/* <ErrorMessage
              errors={errors}
              name="singleErrorInput"
              render={({ errors }) => <span className="error-message">{errors}</span>}
            /> */}
            <span className="error-message">{errors.name && errors.name.message}</span>
            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Phone Number"
               name="phone"
               {...register("phone", {
                required: "Required",
                message: "Please enter your phone number...",
                validate: phone => phone
              })}
             />
             <div className="line"></div>
             <span className="error-message">{errors.phone && errors.phone.message}</span>
            </div>
            <div className="text-center">
             <input 
               type="email"
               className="form-control"
               placeholder="Email"
               name="email"
               {...register("email", {
                required: "Required",
                message: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email"
                },
                // onChange: {(e) => {
                //     setError("email", {
                //       type: "manual",
                //       message: "Dont Forget Your Username Should Be Cool!",
                //     })
                //   }
                // },
                validate: email => email
              })}
             />
             <div className="line"></div>
            </div>
            <span className="error-message">{errors.email && errors.email.message}</span>

            <div className="text-center">
             <input 
               type="text"
               className="form-control"
               placeholder="Subject"
               name="subject"
               {...register("subject", {
                required: "Required",
                message: "OOPS, you forget to add the subject...",
                validate: subject => subject
              })}
             />
             <div className="line"></div>
            </div>
            <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>

          </div>
          <div className="col-md-6 col-xs-12">
          <div className="text-center">
           <textarea
             type="text"
             className="form-control"
             placeholder="Description"
             name="description"
             {...register("description", {
              required: "Required",
              message: "Please describe shortly what is regarding for...",
              validate: description => description
            })}

            ></textarea>
             <div className="line"></div>
             </div>
             <span className="error-message">
                {errors.description && errors.description.message}
              </span>
            <button className="btn-main contact-btn" type="submit">contact me</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
