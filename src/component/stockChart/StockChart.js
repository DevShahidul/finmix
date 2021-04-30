import React from 'react';
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
import './StockChart.scss';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  backgroundColor: "#fff",
  axisX: {
    marign: 10,
    tickLength: 0,
    lineThickness:0,
    valueFormatString: "MMM"
  },
  axisY:{
    gridDashType: 'dash',
    gridThickness: 1,
    gridColor: '#DBDFEA',
    tickLength: 0,
    lineThickness:0,
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
      { x: new Date(2021, 1, 3), y: 50 },
				{ x: new Date(2021, 1, 5), y: 100 },
				{ x: new Date(2021, 2, 7), y: 110 },
				{ x: new Date(2021, 5, 9), y: 158 },
				{ x: new Date(2021, 8, 11), y: 34 },
				{ x: new Date(2021, 9, 13), y: 363 },
				{ x: new Date(2021, 10, 15), y: 247 },
				{ x: new Date(2021, 11, 17), y: 253 },
				{ x: new Date(2021, 11, 19), y: 269 },
				{ x: new Date(2021, 12, 21), y: 343 },
				{ x: new Date(2021, 12, 23), y: 370 }

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
 

                         