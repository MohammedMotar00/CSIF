import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Router>
        {/* Header component, visible on all pages! */}
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
