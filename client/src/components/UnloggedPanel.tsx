import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export class UnloggedPanel extends React.Component{
    render(){
        return (
            <Container fluid={true}>
                <Col md="10" lg="10" xl="10" className="pl-2 border-left">
                    <Row className="mx-0">        
                    <Col className="pl-0"><Link className="btn btn-outline-primary p-1 w-100" to="/login">LOG IN</Link></Col>
                    <Col className="px-0"><Link className="btn btn-primary p-1 w-100" to="/singup">SIGN UP</Link></Col>
                    </Row>
                </Col>
                <Col></Col>
            </Container>
        )
    }
}