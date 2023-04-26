import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';

const News = () => {
    return (
        <div>
             <Header />
            <Container>
                <Row>
                    <Col lg={9}>
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

export default News;