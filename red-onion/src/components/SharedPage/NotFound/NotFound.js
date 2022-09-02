import React from 'react';
import './NotFound.css';
import page from '../../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={page} alt="Page Not Found" />
        </div>
    );
};

export default NotFound;