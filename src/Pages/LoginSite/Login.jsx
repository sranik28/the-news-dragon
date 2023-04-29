import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDataGlobally } from '../../Context/Context';

const Login = () => {

    const { signInUser } = useDataGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || "category/0"

    const [error, setError] = useState("");

    const loginFormHandle = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
                setError(error.message)

            })

    }

    return (
        <Container className='mx-auto w-25'>
            <h2>Please Login</h2>
            <Form onSubmit={loginFormHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>{error}</p>
                <Form.Text> <br />
                    Dont’t Have An Account ?  <Link to="/register" className='text-danger'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;