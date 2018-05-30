import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './Products';
import Details from './Details';

export default (
    <Switch>
        <Route component={Products} path='/' exact />
        <Route component={Details} path='/details/:id' />
    </Switch>
)