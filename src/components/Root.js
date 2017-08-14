// write about router
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, browserHistory } from 'react-router';

import { store } from '../redux';
//import * as hooks from '../hooks';
import withMaterialUI from '../decorators/withMaterialUI';

import Blog from './presentators/Blog';
import Draft from './presentators/Draft';
import Register from './presentators/Register';
import Login from './presentators/Login';

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <Router history={browserHistory} >
            <div>
              <Route path='/' component={Blog} />
              {/*<Route path='/post/:id/edit' component={Draft} onEnter={hooks.editPost(store)}/>
              <Route path='/post/new' component={Draft}/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>*/}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
