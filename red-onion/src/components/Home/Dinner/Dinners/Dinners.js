import React from 'react';
import { Row } from 'react-bootstrap';
import useDinner from '../../../../hooks/useDinner';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners] = useDinner();
    // console.log(dinners);
    return (
        <div className='breakfasts-container'>
            {/* <p className='fw-semibold'>Dinners: <span>{dinners.length}</span></p> */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </Row>
        </div>
    );
};

export default Dinners;