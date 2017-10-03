// write about router
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, browserHistory, IndexRoute} from 'react-router';

//import * as hooks from '../hooks';
import withMaterialUI from '../decorators/withMaterialUI';

import Blog from './presentators/Blog';
import Draft from './presentators/Draft';
import Register from './presentators/Register';
import Login from './presentators/Login';
import Main from './presentators/Main'

import { store } from '../redux.js';

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory} >
            <div>
              <Route path='/' component={Main}> 
                <IndexRoute component={Blog} />
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/post/new' component={Draft}/>
              </Route>
              {/*
              <Route path='/post/:id/edit' component={Draft} />
              */}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
