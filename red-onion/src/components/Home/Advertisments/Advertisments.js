import React from 'react';
import { Row } from 'react-bootstrap';
import useAdvertisment from '../../../hooks/useAdvertisment';
import Advertisment from '../Advertisment/Advertisment';

const Advertisments = () => {
    const [advertisments] = useAdvertisment();
    return (
        <div className='breakfasts-container'>
            <div className='text-start mb-5 w-75'>
                <h2>Why you choose us</h2>
                <p style={{textAlign: 'justify'}} className='fw-semibold fs-6'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashboards at. Boy prosperous increasing surrounded.</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    advertisments.map(advertisment => <Advertisment
                        key={advertisment.id}
                        advertisment={advertisment}
                    ></Advertisment>)
                }
            </Row>
        </div>
    );
};

export default Advertisments;