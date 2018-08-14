import React, { Component } from 'react';

import './App.css';
import  ReactHighcharts  from 'react-highcharts';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
       <ReactHighcharts config={config} />
       <ReactHighcharts config={colum} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
var config = {
  title:{text:"แสดงยอดขายทั้งปี"},
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

  var colum= {
  chart: {
      type: 'column'
  },
  title: {
      text: 'ยอดขาย Agency 10 อันดับ'
  },
  
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'ยอดขาย Agency: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Population',
      data: [
          ['Shanghai', 24.2],
          ['Beijing', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          
      ],
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
  }

export default App;
