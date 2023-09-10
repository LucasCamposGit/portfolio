import "./index.scss";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h1>Contact Me</h1>
                <p>Get in touch</p>

                <form id="contact-form">
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