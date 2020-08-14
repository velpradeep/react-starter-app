import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Register from "../components/Register";
import Error from "../components/Error";
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import { requireLogin } from "../helpers/authHelper";
import EstablishmentDetails from "../components/EstablishmentDetails";
import OwnerDetails from "../components/OwnerDetails";
import PartnersDetails from "../components/PartnersDetails";
import ReviewDocuments from "../components/ReviewDocuments";
import PaymentHistory from "../components/PaymentHistory";
import LicenseHistory from "../components/LicenseHistory";

const Routes = () => (
    <BrowserRouter>
        <GuardProvider guards={[requireLogin]} error={Error}>
            <Switch>
                <GuardedRoute path="/login" exact component={LoginContainer} meta={{ auth: false }} />
                <GuardedRoute path="/register" exact component={Register} meta={{ auth: false }} />
                <GuardedRoute path="/" exact component={HomeContainer} meta={{ auth: true }} />
                {/*TODO: Need to remove components routes*/}
                <GuardedRoute path="/establishment-details" component={EstablishmentDetails} />
                <GuardedRoute path="/owner-details" component={OwnerDetails} />
                <GuardedRoute path="/partners-details" component={PartnersDetails} />
                <GuardedRoute path="/review-documents" component={ReviewDocuments} />
                <GuardedRoute path="/payment-history" component={PaymentHistory} />
                <GuardedRoute path="/license-history" component={LicenseHistory} />
                <GuardedRoute path="*" component={Error} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>
);

export default Routes;
