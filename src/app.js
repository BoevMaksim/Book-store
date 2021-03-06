import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CartPage, HomePage} from './componets/pages';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route
                path='/'
                component={HomePage}
                exact/>

            <Route
                path='/cart'
                component={CartPage}
                exact/>
        </Switch>
    );
};

export default App;