import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main'
import BankAccounts from './pages/BankAccounts';
import AddUser from './pages/AddUser'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/bank_accounts/" component={BankAccounts} />
        <Route path="/AddUser/" component={AddUser} />
    </Switch>
    </BrowserRouter>
)

export default Routes;