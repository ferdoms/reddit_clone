import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VotePanel } from './VotePanel';

interface CardPostProps {
    key: number,
    title:string,
    link:string
    
}

interface CardPostState {
    hover:boolean;
}

export class CardPost extends React.Component<CardPostProps, CardPostState>{
    constructor(props:CardPostProps){
        super(props)
        this.state = {
            hover:false
        }
        this.hoverOff = this.hoverOff.bind(this)
        this.hoverOn = this.hoverOn.bind(this)
    }
    render(){
        const mouseOver: React.CSSProperties = {
            border: '1px solid #424242'
        }
        const mouseOff: React.CSSProperties = {
            border: '1px solid #bdbdbd'
        }
        const votePanel: React.CSSProperties = {
            borderRadius: "0.25rem 0 0 0.25rem" 
        }

        
        return (
            <Card className="p-0 mt-2 " style={this.state.hover ? mouseOver : mouseOff } onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <Row className="no-gutters">
                    <Col  className="pl-1 ml-n1 pr-1" md="1" lg="1" xl="1">
                        <div style={votePanel} className="bg-light h-100"><VotePanel/></div>
                    </Col>
                    <Col>
                        <Card.Body>
                            <h4>{this.props.title}</h4>
                            <p className="link">{this.props.link}</p>
                        </Card.Body>
                    </Col>
                </Row>                
            </Card>
        )
    }

    private hoverOn(){
        this.setState({ hover: true });
    }
    private hoverOff(){ 
        this.setState({ hover: false });    
    }


}