import React from 'react';
import { Redirect } from 'react-router-dom';

export default function (WrappedComponent){
    const token = localStorage.getItem('token');
    console.log(token)
    return function (props){
        return token
            ? <WrappedComponent {...props}/>
            : <Redirect to="/login"/>
    }
};