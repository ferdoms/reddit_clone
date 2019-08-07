import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from '../pages/Home';
import { Login } from './Login';
import { Signup } from './Signup';
import { AddLink } from '../pages/AddLink';
import { ProtectedRoute } from './ProtectedRoute';

export class Main extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/singup" component={Signup}></Route>
                <ProtectedRoute path="/create" component={<AddLink/>}></ProtectedRoute>
            </Switch>
        )
    }
}