import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import EventDetail from './views/EventDetail';
import EventCreate from './views/EventCreate';
import Authenticated from './utils/Authenticated';

const logout = () => {
    localStorage.removeItem('token');
    return <Redirect to="/"/>
}

function Routes(){

    return(
        <>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/event/create" component={EventCreate}/>
            <Route exact path="/events/:id" component={EventDetail}/>
            <Route exact path="/logout" component={Authenticated(logout) }/>
        </> 
    )
}

export default Routes
