import React from 'react';
import MiniChart from '../stockChart/MiniChart';
import './LeaderboardStock.scss';


const LeaderboardStock = (props) => {
  return (
   <div className="leaderstock-list">
      <div className="information">
        <div className="profile-picture">
          <img src={props.picture} alt="Kamal"/>
        </div>
        <div className="stock-details">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <button className="btn investors">{props.investor}</button>
          <button className="btn followers">{props.followers}</button>
        </div>
      </div>
      <div className="chart">
          <MiniChart/>
          <p>+15.94 (34.18%) <span>Last month</span></p>
      </div>
    </div>
  );
};


export default LeaderboardStock;