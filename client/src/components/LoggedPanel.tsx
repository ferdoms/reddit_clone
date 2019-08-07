import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

interface LoggedPanelProps{
    // history:any
}

const auth = new AuthService;

export class LoggedPanel extends React.Component<LoggedPanelProps>{
    constructor(props:LoggedPanelProps){
        super(props)
    }
    private _logout(){
        auth.logout();
        // this.props.history.replace("/");
    }
    render(){
        return (
            <Container fluid={true}>
                <Col md="10" lg="10" xl="10" className="pl-2 border-left">
                    <Row className="mx-0">        
                        <Link to="/" onClick={this._logout}>Logout</Link>
                    </Row>
                </Col>
                <Col></Col>
            </Container>
        )
    }
}