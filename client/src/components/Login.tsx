import React from 'react';
import { AuthService } from '../services/AuthService'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface LoginProps {
    loginHandler:any;
    history:any;
}

interface LoginState {
    visibility: "visible" | "hidden";
    email:string;
    password:string ;
}
const auth:AuthService = new AuthService;
export class Login extends React.Component<LoginProps, LoginState>{
    public constructor(props: LoginProps) {
        super(props);
       this.state ={
            visibility: "visible",
            email:"",
            password:"",
       }

       this._handleEmailChange = this._handleEmailChange.bind(this)
       this._handlePasswordChange = this._handlePasswordChange.bind(this)
       this._userLogin = this._userLogin.bind(this)
    }
    private _close() {
        return this.props.history.goBack();
    }
    private _handleEmailChange(e:any) {
        this.setState({email: e.target.value});
    }
    private _handlePasswordChange(e:any) {
        this.setState({password: e.target.value});
    }
    private _userLogin(){
        const res = auth.login(this.state.email, this.state.password)
            .then((res:any) => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace("/");
            })
            .catch((err:any) => {
                alert(err);
            });
    }

    render(){
        const bgShadow: React.CSSProperties = {
            position: "fixed",
            width: "100%",
            top:"0",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.40)",
            display: "flex",
            zIndex: 1,
            visibility: this.state.visibility,
    
        };
        const loginCard: React.CSSProperties = {
            width: "750px",
            height: "550px",
            margin: "auto",
            borderRadius: ".15rem",
            display: "block",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.4) 1px 7px 20px 2px"
        };
        const imgPanel: React.CSSProperties = {
            // position: "relative",
            backgroundImage: "url('data:image/jpeg;base64,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')",
            // padding: "8px 2px 2px 2px",
            // width: "80px",
        };
        return (
            <div style={bgShadow}>
                <div style={loginCard}>
                    <Container className="h-100">
                        <Row className="h-100">
                            
                            <Col className="col-2"style={imgPanel}></Col>
                            <Col> 
                                
                                <button type="button" className="close float-right mt-2" aria-label="Close" onClick={()=>{this._close()}}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <Container className="h-100">
                                    
                                    <Row className="h-100 align-items-center">
                                        <Col>
                                            <h1>Sign in</h1>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="email"
                                                        id="email"
                                                        placeholder="name@example.com" 
                                                        value={this.state.email} 
                                                        onChange={this._handleEmailChange}/>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control 
                                                        type="PASSWORD" 
                                                        id="password"
                                                        value={this.state.password} 
                                                        onChange={this._handlePasswordChange}/>
                                                </Form.Group>
                                                <Button type="button" onClick={this._userLogin}>SING IN</Button>
                                
                                            </Form>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                                
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}