import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import QZone from '../../components/Qzone';
import bg from "../../assets/bg.png"

const RightNav = () => {
    return (
        <div>
            <h4 className=''>Login with</h4>
            <Button className='mb-2 mt-3 ' variant="outline-primary"><FcGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><AiFillGithub /> Login With Github</Button>
            <div className='mt-5'>
                <h4 className='my-3'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='my-2'> <FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='my-2'> <BsTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='my-2'> <BsInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div style={{ maxWidth: "100%" }} className='position-relative'>
                <img style={{ width: "100%" }} src={bg} alt="" />

                <div style={{ top: "0", left: '0', padding: "30px", color: 'white', textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%", height: "100%" }} className='position-absolute'>

                    <div>
                        <h2 style={{ fontSize: "40px" , marginBottom:"20px" }}>Create an <br /> Amazing <br /> Newspaper</h2>
                        <p style={{ fontSize: "20px" }}>Discover thousands of <br /> options, easy to <br />customize layouts, one- <br /> click to import demo <br /> and much more.</p>
                        <Button style={{padding:"15px 60px" , marginTop:"15px", fontSize:"20px" }} variant="danger">Learn More</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightNav;