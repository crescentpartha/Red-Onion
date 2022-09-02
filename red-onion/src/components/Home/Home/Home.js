import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-3'>
                <nav className='d-flex gap-5 align-items-center justify-content-center'>
                    <Link className='text-decoration-none text-dark fw-semibold py-2' to='breakfast'>Breakfast</Link>
                    <Link className='text-decoration-none text-dark fw-semibold py-2' to='lunch'>Lunch</Link>
                    <Link className='text-decoration-none text-dark fw-semibold py-2' to='dinner'>Dinner</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;