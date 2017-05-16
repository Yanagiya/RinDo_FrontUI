import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import * as hooks from './hooks';
// Redux DevTools
import DevTools from './components/containers/DevTools';

import Blog from './components/presentators/Blog';
import Draft from './components/presentators/Draft';
import Login from './components/presentators/Login';
import Main from './components/presentators/Main';

hooks.bootstrap(store)();

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
            <Router history={createBrowserHistory()}>
              <Route path='/' component={Blog} />
              <Route path='/post/:id/edit' component={Draft} onEnter={hooks.editPost(store)}/>
              <Route path='/post/new' component={Draft}/>
              <Route path='/login' component={Login}/>
			</Router>
          </Provider>
		  {/*
          <DevTools store={store} />
		  */}
        </div>
    );
  }
};
