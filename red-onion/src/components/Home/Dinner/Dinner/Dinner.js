import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dinner = ({dinner}) => {
    const { name, price, description, img } = dinner;
    return (
        <Col>
            <Card className='border-0 hoverEffect'>
                <Card.Img variant="top" src={img} alt={name} style={{width: '60%'}} className='mx-auto pt-4' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='fs-4 fw-semibold'>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Dinner;