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
  
  render() {
    const regionList = [];
    for (let i in rjson['world']) {
      regionList.push(
        <List>
          <ListItem
            primaryText={rjson['world'][i].name} leftCheckbox={<Checkbox />}
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
