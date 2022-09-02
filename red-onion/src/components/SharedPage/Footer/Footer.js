import React from 'react';
import './Footer.css';
import logoWhite from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div className='d-flex flex-wrap gap-5 pt-4 align-items-top justify-content-between px-5'>
                <div className='text-start image-icon'>
                    <img src={logoWhite} width='150' alt="Logo" />
                </div>
                <div className='d-flex gap-5 fs-6 align-items-center justify-content-around text-start'>
                    <div className='me-md-5 footer-link'>
                        <p>About Online Food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className='mx-md-5 footer-link'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex align-items-center justify-content-between px-5 footer-link2'>
                <p className='text-secondary'>Copyright @{new Date().getFullYear()}</p>
                <div className='d-flex align-items-center justify-content-around fs-6'>
                    <p className='me-2 me-md-5'>Privacy Policy</p>
                    <p className='me-2 me-md-5'>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;