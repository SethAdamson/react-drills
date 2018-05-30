import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';

export default (
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Signup} path='/signup' />
            <Route component={Details} path='/details' />
        </Switch>
    )

