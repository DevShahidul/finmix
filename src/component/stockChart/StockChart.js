import React from 'react';
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
import './StockChart.scss';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  backgroundColor: "#fff",
  axisX: {
    title: "",
    tickLength: 0,
    lineThickness:0,
  //   labelFormatter: function(e) {
  //     return "";
  //  }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness:0,
  //   labelFormatter: function(e) {
  //     return "";
  //  }
  },
  toolTip:{
    enabled: true,
    color: '#fff',
    backgroundColor: '#2dcc89',
    padding: '7px'
  },
  data: [{
    markerType: "none",
    type: "splineArea",
    color: "#e5f8f0",
    lineColor:"#2DCC89",
    dataPoints: [
      { x: new Date(2021, 2), y: 20 },
      { x: new Date(2021, 3), y: 60 },
      { x: new Date(2021, 4), y: 40 },
      { x: new Date(2021, 5), y: 50 },
      { x: new Date(2021, 6), y: 70 },
      { x: new Date(2021, 7), y: 80 },
      { x: new Date(2021, 8), y: 65 },
      { x: new Date(2021, 9), y: 90 }

      // { x: new Date(2021, 2), y: 20 },
      // { x: new Date(2021, 3), y: 60 },
      // { x: new Date(2021, 4), y: 40 },
      // { x: new Date(2021, 5), y: 50 },
      // { x: new Date(2021, 6), y: 70 },
      // { x: new Date(2021, 7), y: 80 },
      // { x: new Date(2021, 8), y: 65 },
      // { x: new Date(2021, 9), y: 90 }
    ]
  }]
}

const StockChart = props => {
  return (
    <div>
			<CanvasJSChart options = {options}/>
    </div>
  );
};


export default StockChart;
 

                         