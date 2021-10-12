import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from './components/About/About'
import {Users} from './components/Users/Users'
import {Articles} from './components/Articles/Articles'

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Articles</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Articles} />
            {/* <Home />
          </Route> */}
          <Route path="/form" component={About} />
            {/* <About />
          </Route> */}
          <Route path="/users" component={Users} />
            {/* <Users />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}