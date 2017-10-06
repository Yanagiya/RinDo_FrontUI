import React, { Component, PropTypes } from 'react';
import {MenuItem, AutoComplete} from 'material-ui';
import SearchIcon from '../Icon/search_grey_24x24.png'

export default class MainMap extends Component {
  
  constructor(props) {
    super(props);
    google.charts.load('current', {
      'packages':['geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap.bind(this));
    function drawRegionsMap() {
      const { region } = this.props;
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ...region,
      ]);
      console.log(region);
          
      var options = {
        backgroundColor: '#B3E5FC'
      };
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
    }
  }
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  getStyles() {
    return {
      map: {
        display: "flex",
        padding: 20,
        width: 700
      },
      searchTxt: {
        display: "flex",
        background: "#F5F5F5",
        position: 'absolute',
        left: 20,
        textIndent: 30,
        width: 700,
        textColor: "white"
      },
      iconSearch: {
        position: 'relative',
        left: 5,
        top: 5,
        width: 20, 
        height: 20
      },
      searchBox: {
        position: 'relative',
      }

    }
  }
  
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <MenuItem disabled={true} style={styles.searchBox}>
          <AutoComplete 
            hintText='Search'
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            fullWidth={true}
            style={styles.searchTxt}
          />
          <img src={SearchIcon} style={styles.iconSearch} /> 
        </MenuItem>
        <div id="regions_div" style={styles.map}>
        </div>
      </div>
    );
  }
}
