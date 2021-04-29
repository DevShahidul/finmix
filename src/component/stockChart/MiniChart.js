import React from 'react';
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  backgroundColor: "#fff",
  height: 50,
  axisX: {
    title: "",
    tickLength: 0,
    lineThickness:0,
    labelFormatter: function(e) {
      return "";
   }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness:0,
    labelFormatter: function(e) {
      return "";
   }
  },
  toolTip:{
    enabled: false,},
  data: [{
    markerType: "none",
    type: "splineArea",
    color: "#e5f8f0",
    lineColor:"#2DCC89",

    dataPoints: [
      {y: 5 },
      {y: 20 },
      {y: 45 },
      {y: 30 },
      {y: 45 },
      {y: 70 },
      {y: 55 },
      {y: 75 },
      {y: 40 },
      {y: 80 }
    ]
  }]
}

const MiniChart = props => {
  return (
    <div>
			<CanvasJSChart options = {options}/>
    </div>
  );
};


export default MiniChart;
 

                         