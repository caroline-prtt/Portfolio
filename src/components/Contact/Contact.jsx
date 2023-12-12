import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yw1k4jd', 'template_e7qax3m', form.current, 'xIuQhrwI8NMnryOi7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <section id="contact" className="contact">

            <h2 className="contact__title">CONTACT</h2>

            <form ref={form} onSubmit={sendEmail} className="contact__form"> 
                <label for="name">Votre nom</label>
                <input type="text" id="name" name="user_name" required/>
                <label for="phone">N° de téléphone</label>
                <input type="number" id="name" name="user_phone" required/>
                <label for="email">Email</label>
                <input type="email" id="email" name="user_email" required/>
                <label for="message">Message</label>
                <textarea id="message" name="message" required/>
                <input type="submit" value="Envoyer" />
            </form>

        </section>
    )
}

export default Contact;