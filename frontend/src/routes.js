import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import PrivateLayout from "./components/PrivateLayout";
import UserService from "./services/UserService";

const DashboardPage = lazy(() =>
    import("./pages/Dashboard")
);

const Signup = lazy(() =>
    import("./pages/Signup")
);

const routes = [
    {
        path: "/",
        component: DashboardPage,
    },
];

const routeComponent = routes.map(({ path, component }, key) => (
    <GuardedRoute
        exact
        path={path}
        component={component}
        key={key}
        meta={{ auth: true }}
    />
));

const requireAuth = (to, from, next) => {
    if (to.meta.auth) {
        UserService.verify()
            .then(() => {
                next();
            })
            .catch((error) => {
                if (error.response.status !== 200) {
                    next.redirect("/signup");
                }
            });
    } else {
        next();
    }
};

export default (
    <Suspense fallback={<p>Loading...</p>}>
        <GuardProvider guards={[requireAuth]}>
            <Switch>
                <GuardedRoute
                    exact
                    path="/signup"
                    component={signupPage}
                    meta={{ auth: true }}
                />

                <PrivateLayout>
                    <Switch>{routeComponent}</Switch>
                </PrivateLayout>
            </Switch>
        </GuardProvider>
    </Suspense>
);
