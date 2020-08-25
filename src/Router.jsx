import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import NavFullRecommended from './pages/NavFullRecommended'
import NavRecommended from './pages/NavRecommended'
import Product from './pages/Product'



const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
                <Route path="/nav-full-recommended/:productId">
                  <Product />
                </Route>
                <Route path="/nav-full-recommended">
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