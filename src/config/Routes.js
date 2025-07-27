// src/config/Routes.js

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
    );
};

export default AppRoutes;
