import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import NavFullRecommended from './pages/NavFullRecommended'
import NavRecommended from './pages/NavRecommended'



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/nav-full-recommended/:productId?">
                    <NavFullRecommended />
                </Route>
                <Route path="/">
                    <NavRecommended />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router