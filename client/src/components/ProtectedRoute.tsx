import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as authGuard from '../helpers/authGuard';

interface ProtectedRouteProps {
    component: JSX.Element,
    path: string
    
}

export class ProtectedRoute extends React.Component<ProtectedRouteProps>{
    constructor(props:ProtectedRouteProps){
        super(props)
    }
    render(){
        const { component , ...rest } = this.props;
        return (<Route 
                    {...rest}
                    render={props =>
                    authGuard.loggedIn() ? (
                        this.props.component
                    ) : (
                        <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                        />
                    )
                    }
                />
                );
    }
}