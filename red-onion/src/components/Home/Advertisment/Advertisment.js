import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Advertisment = ({ advertisment }) => {
    const { name, description, icon, img } = advertisment;
    return (
        <Col>
            <Card className='border-0 shadow-sm'>
                <Card.Img variant="top" src={img} alt={name} />
                <div className='d-flex align-items-top justify-content-between'>
                    <Card.Img className='w-25 h-25 mt-3' variant="top" src={icon} alt={name} />
                    <Card.Body className='text-start'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ textAlign: 'justify', fontSize: '12px' }} className=''>{description}</Card.Text>
                        <button
                            className='d-flex align-items-center justify-content-start btn btn-link text-decoration-none p-0 m-0'>
                            <span className='fw-semibold'>See more</span>
                            <FontAwesomeIcon style={{backgroundColor: '#7AC948', fontSize: '10px'}} className='ms-2 text-light p-1 rounded-circle' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default Advertisment;