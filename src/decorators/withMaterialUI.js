import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { LightRawTheme } from 'material-ui/styles/';

export default function withMaterialUI(ComposedComponent) {
  return class MaterialUI extends Component {
    /*
     For more details: https://github.com/callemall/material-ui#usage
     Pass material-ui theme through child context
     We are doing this here so we don't have to do it anywhere else.
     */
    static childContextTypes = {
      muiTheme: React.PropTypes.object
    }

    getChildContext() {
      return {
        muiTheme: getMuiTheme(LightRawTheme)
      };
    }

    render() {
      const { context, ...other } = this.props;
      return <ComposedComponent {...other} />;
    }
  };
}
