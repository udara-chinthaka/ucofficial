import React from "react";
import "./contact.css";
import { keyList } from "../../config/key";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { CONTACT_OPTIONS } from "./ContactOption.js";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      keyList.serviceId,
      keyList.templateId,
      form.current,
      keyList.emailPubliKey
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {CONTACT_OPTIONS.map(
            ({ index, option, classN, icon, refVal, value, buttonText }) => {
              return (
                <article className={classN} key={index}>
                  {icon}
                  <h4>{option}</h4>
                  <h5>{value}</h5>
                  <a href={refVal}> {buttonText}</a>
                </article>
              );
            }
          )}
        </div>
        {/* END OF CONTENT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
