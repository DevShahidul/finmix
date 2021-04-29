import React from 'react';
import MiniChart from '../stockChart/MiniChart';
import './stock.scss';


const Stock = (props) => {
  return (
   <div className="stock-list">
      <div className="information">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <button className="btn investors">{props.investor}</button>
          <button className="btn followers">{props.followers}</button>
      </div>
      <div className="chart">
          <MiniChart/>
          <p>+15.94 (34.18%) <span>Last month</span></p>
      </div>
    </div>
  );
};


export default Stock;