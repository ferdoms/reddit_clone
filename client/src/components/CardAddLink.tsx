import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface CardAddLinkProps {
    isLoggedIn:boolean
}

interface CardAddLinkState {
}

export class CardAddLink extends React.Component<CardAddLinkProps, CardAddLinkState>{
    
    render(){
  
        return (
            <Card>{this._renderContent()}</Card>
        )
    }

    private _renderContent(){
        if(this.props.isLoggedIn){
            return (
                <Card.Body>
                    <h5>Home</h5>
                    <p>
                        Your personal Reddit frontpage. Come here to check in with your favorite communities.
                    </p>
                    <Link className="btn btn-primary btn-sm btn-block" to="/create">CREATE POST</Link>
                </Card.Body>
            )
        }
        return (
            <Card.Body>
                <h5>r/popular</h5>
                <p>
                The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.
                </p>
                <Link className="btn btn-primary btn-sm btn-block" to="/create">CREATE POST</Link>
            </Card.Body>
        )
    }
    private _renderText(){
        
    }


}