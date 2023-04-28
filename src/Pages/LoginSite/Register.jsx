import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDataGlobally } from '../../Context/Context';

const Register = () => {

    const { createUser } = useDataGlobally();

    const RegFormHandle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const currentUser = result.user
                console.log(currentUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Container className='mx-auto w-25'>
            <h2>Please Register</h2>
            <Form onSubmit={RegFormHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Term & Conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text> <br />
                    Already Have An Account ?  <Link to="/login" className='text-danger'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;