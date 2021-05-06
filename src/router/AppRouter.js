import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Redirect
  } from "react-router-dom";
  
import { DetailScreen } from '../components/pages/DetailScreen';
import { HomeScreen } from '../components/pages/HomeScreen';
import { StoreScreen } from '../components/pages/StoreScreen';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ HomeScreen } />
              <Route exact path="/store" component={ StoreScreen } />
              <Route exact path="/cars/:carId" component={ DetailScreen } />
              
              {/* <Redirect exact path="/" /> */}
            </Switch>
            <Footer />
        </Router>
      );
}
