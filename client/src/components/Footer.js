import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className="footer">
        <div className="social">
            <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
        <p className="copyRight">Copyright &copy; 2018 Larry Gonzales </p>
    </div>
);

export default Footer;
