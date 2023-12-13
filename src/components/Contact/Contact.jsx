import { useRef } from "react";
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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
            <div className="contact__container">

                <div className="contact__container__infos">
                    <h3>Caroline Protat</h3>
                    <p>caroline.protat@hotmail.fr</p>
                    <div className="contact__container__infos__reseaux">
                        <Link to={"https://www.linkedin.com/in/caroline-protat-b67761231/"} className="contact__container__infos__reseaux linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link to="https://github.com/caroline-prtt" className="contact__container__infos__reseaux github"><FontAwesomeIcon icon={faGithub} /></Link>
                    </div>
                    <Link to="https://drive.google.com/file/d/1KVbpC7gSmvwqK5YBwo3HQVcOb42hAdwQ/view?usp=sharing" className="contact__container__infos__cv">MON CV</Link>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__container__form"> 
                    <label for="name">Votre nom</label>
                    <input type="text" id="name" name="user_name" required/>
                    <label for="phone">N° de téléphone</label>
                    <input type="tel" id="phone" name="user_phone" required/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="user_email" required/>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required/>
                    <input type="submit" id="submit" value="Envoyer" />
                </form>

            </div>
        </section>
    )
}

export default Contact;