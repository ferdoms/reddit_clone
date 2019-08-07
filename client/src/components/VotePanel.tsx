import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/custom.css'

interface VotePanelProps{}
interface VotePanelState{}

export class VotePanel extends React.Component<VotePanelProps, VotePanelState>{
    render(){
        return (
            <Col className="pt-2">
                <i className="fas fa-chevron-up text-secondary upvote"></i>
                <i className="fas fa-chevron-down text-secondary downvote"></i>
            </Col>
        )
    }
}