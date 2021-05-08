import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { DetailScreen } from '../components/pages/DetailScreen';
import { HomeScreen } from '../components/pages/HomeScreen';
import { StoreScreen } from '../components/pages/StoreScreen';
import { Footer } from '../components/ui/Footer';
import { Loading } from '../components/ui/Loading';
import { Navbar } from '../components/ui/Navbar';
import { useFetchCars } from '../hooks/useFetchCars';

export const AppRouter = () => {

    const { loading } = useFetchCars();

    return (
        <Router>
            { loading && <Loading /> }
            <Navbar />
            <Switch>
              <Route exact path="/" component={ HomeScreen } />
              <Route exact path="/store" component={ StoreScreen } />
              <Route exact path="/cars/:carId" component={ DetailScreen } />
              
              <Redirect exact path="/" />
            </Switch>
            <Footer />
        </Router>
      );
}
