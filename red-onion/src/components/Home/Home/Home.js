import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../SharedPage/CustomLink/CustomLink';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-3'>
                <nav className='d-flex gap-5 align-items-center justify-content-center'>
                    <CustomLink className='text-decoration-none text-dark fw-semibold py-2' to='breakfast'>Breakfast</CustomLink>
                    <CustomLink className='text-decoration-none text-dark fw-semibold py-2' to='lunch'>Lunch</CustomLink>
                    <CustomLink className='text-decoration-none text-dark fw-semibold py-2' to='dinner'>Dinner</CustomLink>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;