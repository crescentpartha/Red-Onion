import React from 'react';
import './Breakfast.css';
import { Card, Col } from 'react-bootstrap';

const Breakfast = ({ breakfast }) => {
    const { name, price, description, img } = breakfast;
    return (
        <Col>
            <Card className='border-0 hoverEffect'>
                <Card.Img variant="top" src={img} alt={name} style={{width: '60%'}} className='mx-auto pt-4' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <h4>{price}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Breakfast;