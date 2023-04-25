import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavBar from './NavBar';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center"  }}>
                <div>
                    <Button variant="danger">Latest </Button>
                </div>
                <div>
                    <Marquee style={{ display: "flex", gap: "20px", }} className='text-danger' speed={50} >
                        <p style={{margin:"0 10px"}}>I can be a React component, multiple React components, or just some text ......  </p>
                        <p style={{margin:"0 10px"}}>I can be a React component, multiple React components, or just some text ......  </p>
                    </Marquee>
                </div>
            </div>
            <NavBar />
        </Container>
    );
};

export default Header;