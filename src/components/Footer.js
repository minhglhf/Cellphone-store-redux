import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaPhone
} from 'react-icons/fa';
import {
    AiOutlineMail
} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer-con-container'>
            <div className='footer-container'>
                <div className="info">
                    <div className="infoo"><FaPhone />0916001201</div>
                    <div className="infoo"><AiOutlineMail />minhtq30102000@gmail.com</div>
                </div>

                <div className='social-icons'>
                    <div>
                        <a
                            className='social-icon-link'
                            href={'https://www.facebook.com/minh.tranquang.1000/'}
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Facebook'
                        >
                            <FaFacebook style={{ color: "#139ef8" }} />
                        </a>
                    </div>
                    <div>
                        <a
                            className='social-icon-link'
                            href={'https://www.instagram.com/minhtq3120/'}
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Instagram'
                        >
                            <FaInstagram style={{ color: "#d2029a" }} />
                        </a>
                    </div>
                    <div>
                        <a
                            className='social-icon-link'
                            href={
                                'https://github.com/minhglhf'
                            }
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Github'
                        >
                            <FaGithub style={{ color: "black" }} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;