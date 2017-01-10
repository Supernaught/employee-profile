import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/presentational/App';
import About from './components/presentational/About';
import NotFound from './components/presentational/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
