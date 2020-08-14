import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Register from "../components/Register";
import Error from "../components/Error";
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import { requireLogin } from "../helpers/authHelper";

const Routes = () => (
    <BrowserRouter>
        <GuardProvider guards={[requireLogin]} error={Error}>
            <Switch>
                <GuardedRoute path="/login" exact component={LoginContainer} meta={{ auth: false }} />
                <GuardedRoute path="/register" exact component={Register} meta={{ auth: false }} />
                <GuardedRoute path="/" exact component={HomeContainer} meta={{ auth: true }} />
                <GuardedRoute path="*" component={Error} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>
);

export default Routes;
