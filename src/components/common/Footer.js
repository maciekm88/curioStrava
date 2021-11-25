import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
    return (
        <footer>
            <div className="about">Simple footer.</div>
            <div className="contact_icons">
                <a href="https://github.com/maciekm88/curioStrava"><FontAwesomeIcon icon={faGithub} /> Github</a>
                <a href="https://www.linkedin.com/in/maciej-matraszek-021304225/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
            </div>
        </footer>
    );
};

export default Footer;