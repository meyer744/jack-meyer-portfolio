import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import ContactForm from '../contact/index'


const Contact = () => {
 
	return(
        <div id="Contact" className="contact-container-outer-div">
        <h2 className="contact-container-heading">Contact</h2>
        <div className="contact-container">
        <ContactForm />
    <div className="contact-info">
    <h2>Find Me Here:</h2>
        <ul>
            <li><a href="meyer.744@gmail.com">meyer.744@gmail.com</a></li>
            <li>Troy, Ohio</li>
        </ul>
        <ul className="social-list">
            <li><a href="https://www.facebook.com/meyer744/"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a></li>
            <li><a href="https://www.linkedin.com/in/jack-v-meyer/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/meyer744"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a></li>
        </ul>
    </div>
    </div>
    </div>
	);
  }

  
export default Contact;