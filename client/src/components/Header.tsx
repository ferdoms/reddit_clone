import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import * as authGuard from '../helpers/authGuard';
import { UnloggedPanel } from './UnloggedPanel';
import { LoggedPanel } from './LoggedPanel';

interface HeaderProps{
}
interface HeaderState{
    isLoggedIn: boolean
}

export class Header extends React.Component<HeaderProps, HeaderState>{
    public constructor(props:HeaderProps) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        
    }
    private _renderPanel(){
		console.log(authGuard.loggedIn())
        if(authGuard.loggedIn()){
            return <LoggedPanel/>
        }
        return <UnloggedPanel/>
    }
    render(){
        
        return (
            <Navbar bg="light" expand="lg">
                
                
                    <Container className="col-9">
                        <Link className="navbar-brand" to="/">reddit-clone</Link>
                        <Form className="ml-auto col-9" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 form-control col-12" />
                        
                        </Form>
                    </Container>
                    <Container className="pl-0">
                        <Col md="3" lg="3" xl="3" className="pl-0"></Col>
                        {this._renderPanel()}
                        
                    </Container>
            </Navbar>
        )
    }
}
