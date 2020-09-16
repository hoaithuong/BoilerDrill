import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "@gooddata/react-components/styles/css/main.css";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

import styles from "./AppRouter.module.scss";
import { useAuth } from "../contexts/Auth";
import Welcome from "./Welcome";
// import Page from "../components/Page";
import ExportComponents from "./ExportComponents";
import AttributeFilterComponents from "./AttributeFilterComponents";
import DateFilterComponents from "./DateFilterComponents";
import DrillingComponents from "./DrillingComponents";
import VisualizationComponents from "./VisualizationComponents";
import PivotTableComponents from "./PivotTableComponents";

const RedirectIfNotLoggedIn = () => {
    const auth = useAuth();
    const user = auth.data;
    const isLoading = auth.isLoading;
    const shouldRedirectToLogin = !isLoading && !user;
    return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
};

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/attribute-filter-components" component={AttributeFilterComponents} />
                <Route exact path="/date-filter-component" component={DateFilterComponents} />
                <Route exact path="/export-components" component={ExportComponents} />
                <Route exact path="/drilling" component={DrillingComponents} />
                <Route exact path="/visualization" component={VisualizationComponents} />
                <Route exact path="/pivot-table" component={PivotTableComponents} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />

                {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                {<RedirectIfNotLoggedIn />}
            </Router>
        </div>
    );
};

export default AppRouter;
