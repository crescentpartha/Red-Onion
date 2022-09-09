import React from 'react';
import './Breakfasts.css';
import { Row } from 'react-bootstrap';
import useBreakfast from '../../../../hooks/useBreakfast';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts] = useBreakfast();
    // console.log(breakfasts);
    return (
        <div className='breakfasts-container'>
            {/* <p className='fw-semibold'>Breakfasts: <span>{breakfasts.length}</span></p> */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    breakfasts.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}
                    ></Breakfast>)
                }
            </Row>
        </div>
    );
};

export default Breakfasts;