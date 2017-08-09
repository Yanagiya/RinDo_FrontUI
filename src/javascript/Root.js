import React, { Component, PropTypes } from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import { Server } from './redux/modules/utils/server';
import { Cookie } from './redux/modules/utils/cookie';
import * as hooks from './hooks';
// Redux DevTools
import DevTools from './components/containers/DevTools';

import Blog from './components/presentators/Blog';
import Draft from './components/presentators/Draft';
import Register from './components/presentators/Register';
import Login from './components/presentators/Login';

export const server = new Server( store );
export const cookie = new Cookie();

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
              <Route path='/register' component={Register}/>
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
