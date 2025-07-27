// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'swiper/css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movie/:id" component={MovieDetail} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
