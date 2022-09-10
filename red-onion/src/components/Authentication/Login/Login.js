import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../images/bannerbackground.png';
import logoBlack from '../../../images/logo2.png';

const Login = () => {
    
    const handleRegister = (event) => {
        event.preventDefault();
    }

    const containerStyle = {
        width: '400px',
        margin: '0px auto',
        padding: '40px 0px'
    }

    const styles = {
        header: {
            backgroundImage: `url(${backgroundImage})`,
            // height: '100vh',
            // height: '600px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },

        content: {
            padding: '20px 0',
            height: '100%',
            width: '100%',
            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }
    };

    const inputColor = {
        fontWeight: '600',
        border: 'none',
        backgroundColor: 'lightgray',
        opacity: '60%',
        color: 'black',
        padding: '10px'
    }

    return (
        <div style={styles.header}>
            <div style={styles.content}>
                <div style={containerStyle}>
                    <img src={logoBlack} width='200px' alt="Logo" />
                    <Form onSubmit={handleRegister} className='my-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={inputColor} type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={inputColor} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className='w-100 opacity-75 py-2' variant="danger" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Link className='text-decoration-none text-danger' to='/signup'>New to Red Onion?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;