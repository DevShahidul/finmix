import React from 'react';
import StockChart from '../stockChart/StockChart';
import Details from './Details/Details';
import './Portfolio.scss';


const Portfolio = props => {
  return (
    <div className="portfolio">
      <Details/>
      <StockChart/>
    </div>
  );
};



export default Portfolio;