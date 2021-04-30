import React from 'react';
import LeaderStocks from '../LeaderboardStock/LeaderboardStock';
import Stock from '../stock/Stock';
import StockList from './data';
import './Finmixes.scss';

const stocks = StockList.map((stock) => 
<Stock title={stock.title}
desc={stock.desc}
investor={stock.investor}
followers={stock.followers} />
)

const leaderstocks = StockList.map((stock) => 
<LeaderStocks title={stock.title}
desc={stock.desc}
investor={stock.investor}
followers={stock.followers}
picture={stock.picture} />
)


const Finmixes = () => {
  return (
    <div className="stock-index">
      <div className="section-top">
        <h4>Finmixes</h4>
        <button className="btn create">Create +</button>
      </div>
    {stocks}
    <br/>
    <p>Leaderboard</p>
    <br/>
    {leaderstocks}
    <div className="section-bottom">
      <button>Show more +</button>
    </div>
    </div>
  );
};


export default Finmixes;