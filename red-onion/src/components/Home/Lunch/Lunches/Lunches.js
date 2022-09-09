import React from 'react';
import { Row } from 'react-bootstrap';
import useLunch from '../../../../hooks/useLunch';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
    const [lunches] = useLunch();
    // console.log(lunches);
    return (
        <div className='breakfasts-container'>
            {/* <p className='fw-semibold'>Lunches: <span>{lunches.length}</span></p> */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    lunches.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                    ></Lunch>)
                }
            </Row>
        </div>
    );
};

export default Lunches;