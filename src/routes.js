import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/presentational/Home';
import About from './components/presentational/About';
import UsersContainer from './components/presentational/UsersContainer';
import SearchPage from './components/containers/SearchPageContainer';
import UserPage from './components/presentational/UserPage';
import UserAttendanceContainer from './components/presentational/UserAttendanceContainer';
import UserLeaves from './components/presentational/UserLeaves';
import UserInfo from './components/presentational/UserInfo';
import NotFound from './components/presentational/NotFound';

const Routes = (props) => (
	<Router {...props}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home} />
		    <Route path="employees" component={UsersContainer}>
		    	<IndexRoute component={SearchPage} />
		    	<Route path=":id" component={UserPage}>
		    		<IndexRoute component={UserAttendanceContainer} />
		    		<Route path="info" component={UserInfo} />
		    		<Route path="leaves" component={UserLeaves} />
		    	</Route>
		    </Route>
		    <Route path="about" component={About} />
		    <Route path="*" component={NotFound} />
		</Route>
	</Router>
);

export default Routes;


