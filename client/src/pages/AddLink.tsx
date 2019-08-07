import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';

import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/custom.css'
import { LinkService } from '../services/LinkService';
import {getLoggedUser} from '../helpers/authGuard'

interface AddLinkprops{
}
interface AddLinkState{
    title:string,
    url:string,
    [key: string]: string;
}

const linkService = new LinkService;
export class AddLink extends React.Component<AddLinkprops, AddLinkState>{
    constructor(props:AddLinkprops){
        super(props);
        this.state = {
            title: "",
            url: ""
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    private _handleChange(event:any){
        event.preventDefault()
        const target = event.target;
        const value = (target.type === 'checkbox' ? target.checked : target.value) as string;
        const name = target.name as string;
        this.setState({[name]: value});
       
    }
    private _handleSubmit(){
            linkService.create({
            title:this.state.title,
            link:this.state.url
        }).then((res:any)=> console.log(res))
    }
    render(){
        return (
            <Container fluid={true} className="p-4"> 
                <Row>
                    <Col className="ml-auto" md="5" lg="5" xl="5">
                    <h4 className="border-bottom border-white">Create a post</h4>
                    <Card className="mt-4">
                    
                    <Tabs defaultActiveKey="link" id="uncontrolled-tab-example" className="m-0 nav-fill customTabs">
                        <Tab className="p-3" eventKey="post" title="Post" disabled>
                        </Tab>
                        <Tab eventKey="media" title="Media" disabled>
                        </Tab>
                        <Tab eventKey="link" title="Link">
                        <Card.Body className="p-3">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        type="text" 
                                        name="title"
                                        placeholder="Title" 
                                        minLength={4} 
                                        value={this.state.title} 
                                        onChange={this._handleChange}
                                        required/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control 
                                        as="textarea"
                                        name="url" 
                                        rows={3} 
                                        placeholder="Url" 
                                        value={this.state.url} 
                                        onChange={this._handleChange}
                                        required/>
                                </Form.Group> 
                                <Row className="no-gutters">
                                <Button className="ml-auto" variant="primary" onClick={this._handleSubmit}><strong>POST</strong></Button>                                
                                </Row>
                            </Form>
                            
                        </Card.Body>
                                    
                        </Tab>
                        
                    </Tabs>
                       
                                              
                    </Card>
                    </Col>
                    <Col className="ml-4 mr-auto" md="2" lg="2" xl="2"></Col>
                </Row>     
            </Container>
        )
    }
}