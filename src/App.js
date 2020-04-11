import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

// pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
