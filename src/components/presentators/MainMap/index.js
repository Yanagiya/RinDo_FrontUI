import React, { Component, PropTypes } from 'react';

export default class MainMap extends Component {
  
  constructor(props) {
    super(props);
    google.charts.load('current', {
      'packages':['geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    console.log("#####passing#############")
    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],

      ]);
          
      var options = {
        backgroundColor: '#81d4fa'
      };
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
    }
  }
  getStyles() {
    return {
      map: {
      padding: 20,
      width: 700,
      }
    }
  }
  
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <input type="text" style={this.props.style}/>
        <input type="button" value="Search"/>
        <div id="regions_div" style={styles.map}>
        </div>
      </div>
    );
  }
}
