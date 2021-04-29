import { Tabs } from 'antd';
import React from 'react';
import PortoflioImage from '../../../assets/images/Portfolio.svg';
import './Details.scss';

const TabPane = Tabs.TabPane;

const PortfolioData = () => {
  return (
    <div className="details">
      <div div className="portfolio-balance">
        <div className="picture">
          <img src={PortoflioImage} alt="Portfolio"/>
        </div>
        <div className="balance">
          <p>Portfolio</p>
            <div className="current">
                <h1>$40,950</h1>
                <p>+ 15.94 (34.18%)</p>
            </div>
        </div>
      </div>
    </div>
  )
}


const Details = props => {
  return (
    <div className="portfolio-details">
        <div className="tabs">
        <Tabs defaultActiveKey="5" size="small">
        <TabPane tab="1D" key="1">
          <PortfolioData/>
        </TabPane>
        <TabPane tab="1W" key="2">
          <PortfolioData/>
        </TabPane>
        <TabPane tab="1M" key="3">
          <PortfolioData/>
        </TabPane>
        <TabPane tab="3M" key="4">
          <PortfolioData/>
        </TabPane>
        <TabPane tab="1Y" key="5">
          <PortfolioData/>
        </TabPane>
        <TabPane tab="YTD" key="6">
          <PortfolioData/>
        </TabPane>
      </Tabs>
        </div>
    </div>

  );
};

Details.propTypes = {
  
};

export default Details;