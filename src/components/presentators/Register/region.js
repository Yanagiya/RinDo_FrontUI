import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
var rjson = require('../../../utils/region/region.json');

export default class RegionSelect extends React.Component {
  state = {
    open: false, 
    count: 0,
    checkedCountries: [],
  };
  handleToggle = () => {
    this.setState({open: !this.state.open});
  };
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  check() {
    this.setState({ checked: !this.state.checked });
    console.log("checked");
  };
  
  onCheck( event, checked ) {
    const country = event.target.id;
    if (checked) {
      this.state.checkedCountries.push(country);
      this.setState({count: this.state.count + 1});
    } else {
      for ( var i = 0; i < this.state.checkedCountries.length; i++) {
        if ( this.state.checkedCountries[i] == country )
          this.state.checkedCountries.splice(i, 1);
      }
      this.setState({count: this.state.count - 1});
    }
  }

  checkDisabled( country ) {
    const { count, checkedCountries } = this.state;

    if ( count < 3 ) {
      return false;
    }
    for ( var c of checkedCountries ) {
      if ( c == country )
        return false;
    }
    return true;
  }

  getCountries() {
    return this.state.checkedCountries;
  }

  render() {
    const regionList = [];
    for (let i in rjson['world']) {
      regionList.push(
        <List>
          <ListItem
            primaryText={rjson['world'][i].name} 
            leftCheckbox={
              <Checkbox 
                ref={rjson['world'][i].call} 
                id={rjson['world'][i].call} 
                onCheck={this.onCheck.bind(this)} 
                disabled={this.checkDisabled(rjson['world'][i].call)}
              />
            }
          />
        </List>
      );
    };
    
    return (
      <div>
        <RaisedButton
          label="投稿候補の国(3)"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          {regionList}
        </Drawer>
      </div>
    );
  }
}
