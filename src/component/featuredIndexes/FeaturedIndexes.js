import React from 'react';
import StockList from '../finmixes/data';
import '../finmixes/Finmixes.scss';
import Stock from '../stock/Stock';
import './featured.scss';

const stocks = StockList.map((stock) => 
<Stock title={stock.title}
desc={stock.desc}
investor={stock.investor}
followers={stock.followers} />
)

const FeaturedIndexes = (props) => {
  return (
    <div className="stock-index">
      <div className="section-top">
        <h4>Featured Indexes</h4>
        <p className="features">See all Features</p>
      </div>
    {stocks}
    <div className="section-bottom">
      <p>Show more +</p>
    </div>
    </div>
  );
};


export default FeaturedIndexes;