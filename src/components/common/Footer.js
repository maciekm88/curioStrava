import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { ReactComponent as Logo } from "../../images/api_logo_pwrdBy_strava_horiz_light.svg";


const Footer = () => {
    return (
        <footer>
            <div className="contact_icons">
                <a href="https://github.com/maciekm88/curioStrava"><FontAwesomeIcon icon={faGithub} /> Github</a>
                <a href="https://www.linkedin.com/in/maciej-matraszek/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
            </div>
            <div className="about">
                <p className="aboutme">Simple footer. <div className="turkub">Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
                <p className="powered"><a href="https://www.strava.com/"><Logo /></a></p>
            </div>
        </footer>
    );
};

export default Footer;