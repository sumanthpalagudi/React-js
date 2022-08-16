import React from "react";
import mbulogo from './mbulogo.png';
import './Topbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
function Topbar(){
    return(<>
        <Container className="top-bar" fluid>
            <Row>
                <Col xs={1}></Col>
                <Col xs={2}>
                    <img src={mbulogo} alt="logo" className="App-logo"/>
                </Col>
                <Col xs={9}>
                    <h1 className="Main-text">MOHAN BABU UNIVERSITY</h1>
                    <h3 className="Sub-text">APPLICATION FOR ADMISSION TO Ph.D. DEGREE PROGRAMME</h3>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                <h5 className="year">Academic Year:2022</h5></Col>
            </Row>
        </Container>
    </>)
}
export default Topbar;
