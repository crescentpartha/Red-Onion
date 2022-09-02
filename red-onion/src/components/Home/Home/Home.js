import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Breakfasts from '../Breakfast/Breakfasts/Breakfasts';
import Dinners from '../Dinner/Dinners/Dinners';
import Lunches from '../Lunch/Lunches/Lunches';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <span className='px-5'><Breakfasts></Breakfasts></span>
                <span className='px-5'><Lunches></Lunches></span>
                <span className='px-5'><Dinners></Dinners></span>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;