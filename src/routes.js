import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main'
import BankAccounts from './pages/BankAccounts';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/bank_accounts/" component={BankAccounts} />
    </Switch>
    </BrowserRouter>
)

export default Routes;