import React from 'react';
import { LinkService } from '../services/LinkService'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardPost } from '../components/CardPost';
import { CardAddLink } from '../components/CardAddLink';
import * as authGuard from '../helpers/authGuard';

const linkService = new LinkService();

interface HomeProps{
}

interface HomeState{
    linkData:JSX.Element[],
    isLoggedIn: boolean
}

export class Home extends React.Component<HomeProps, HomeState>{
    public constructor(props:HomeProps) {
        super(props);
        this.state = {
            linkData: [],
            isLoggedIn: false
        };
    }

    private _fetchData(){
        (async () => {
            let res = await linkService.getAll()
            
            let data = res.map((item:any) => {
                console.log(item)
                return (
                    <CardPost key={item.id} title={item.title} link={item.link}/>
                )
                
            })   
            this.setState({linkData: data})
        })()
        
    }
    private _renderLoading(){
        return (<CardPost/>)
    }
    private _renderCardAddLink(){
        if(authGuard.loggedIn()){
            return <CardAddLink isLoggedIn={true}/>
        }
        return <CardAddLink isLoggedIn={false}/>
    }
    
    componentDidMount(){
        this._fetchData();
    }
    render(){
        return (
            <Container fluid={true} className="p-4"> 
                <Row className="">
                    <Col className="ml-auto p-0 mt-n2" md="4" lg="4" xl="4">{
                        (()=>{
                            // if(this.state.linkData.length){
                            //     return this.state.linkData
                            // }
                            return this._renderLoading()
                            
                        }).bind(this)
                        
                        
                        
                        }</Col>
                    <Col className="ml-2 mr-auto" md="2" lg="2" xl="2">{this._renderCardAddLink()}</Col>
                </Row>    
            </Container>
        )
    }

}