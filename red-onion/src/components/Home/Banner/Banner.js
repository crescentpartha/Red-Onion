import React from 'react';
import background from '../../../images/bannerbackground.png';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px',
        overflow: 'hidden'
    }
    return (
        <div style={backgroundImageStyle} className='p-5 d-flex flex-column align-items-center justify-content-center'>
            <h2>Best food waiting for your belly</h2>
            <InputGroup className="my-3 w-50" style={{height: '50px'}}>
                <Form.Control
                    className='border-0'
                    placeholder="Search food items"
                    aria-label="Search food items"
                    aria-describedby="basic-addon2"
                />
                <Button className='bg-danger text-light border-0 px-4' variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default Banner;