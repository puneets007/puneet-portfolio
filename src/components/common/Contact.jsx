import { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i8i1y45",
        "template_pc8aloz",
        form.current,
        "WC4Uu1o6WsPKk46Av"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div id="contact" className='Contact'>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="name-heading">
          Full Name
        </label>
        <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="name"
        required
      />
      </div>
      <div>
        <lable className="name-heading">Email</lable>
        <input
        type="email"
        name="user_email"
        className="email"
        placeholder="Your Email"
        required
      />
      </div>
      
      <div>
        <lable className="name-heading">Your Message</lable>
        <textarea
        name="message"
        placeholder="Your Message"
        className="message"
        required
      />
      </div>

      <button className="sub-btn" type="submit">Send Message</button>
    </form>
    </div>
    
  );
}

export default Contact;