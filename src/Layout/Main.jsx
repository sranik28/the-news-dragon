import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Header/NavBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;