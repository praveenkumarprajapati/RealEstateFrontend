import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from './../components/Home/Home';
import CreateAdvertisement from './../components/CreateAdvertisement/CreateAdvertisement';
import ShowAdvertisement from './../components/ShowAdvertisement/ShowAdvertisement';
import Navbar from './../components/Navbar/Navbar'
const Routes = () => {

    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/createAdvertisement">
                    <CreateAdvertisement />
                </Route>
                <Route path="/showAdvertisement/:id">
                    <ShowAdvertisement />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default Routes;