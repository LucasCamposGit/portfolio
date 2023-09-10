import { useRef } from "react";
import "./index.scss";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef(null);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_22x1k0x', 'template_q6xlj9a', form.current, 'v_ig8eJD3GabxCFAs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h1>Contact Me</h1>
                <p>Get in touch</p>

                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <input id="btn" type="submit" value="Send"/> 
                </form>
            </div>


        </div>
    )
}