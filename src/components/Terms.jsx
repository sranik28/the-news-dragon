import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='text-center mb-5'>Term & Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga itaque doloremque eaque modi in. Laborum, ratione earum voluptatem doloremque quia velit. Voluptates mollitia consectetur unde tenetur quidem, sit officiis quod omnis rem, dolores dolorem numquam est ex nostrum ipsam cupiditate fuga tempora delectus dolorum? Libero voluptatum maxime in minus?</p>
            <p>Go to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;