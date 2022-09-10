import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../SharedPage/CustomLink/CustomLink';
import Advertisments from '../Advertisments/Advertisments';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='m-3'>
                <nav className='d-flex gap-5 align-items-center justify-content-center'>
                    <CustomLink className='text-decoration-none fw-semibold py-2' to='breakfast'>Breakfast</CustomLink>
                    <CustomLink className='text-decoration-none fw-semibold py-2' to='lunch'>Lunch</CustomLink>
                    <CustomLink className='text-decoration-none fw-semibold py-2' to='dinner'>Dinner</CustomLink>
                </nav>
            </div>
            <Outlet />
            <Advertisments></Advertisments>
        </div>
    );
};

export default Home;