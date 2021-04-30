import { Badge } from 'antd';
import React from 'react';
import Message from '../../assets/images/Message.svg';
import Notification from '../../assets/images/Notification.svg';
import Search from '../../assets/images/Search.svg';
import User from '../../assets/images/User.svg';
import './TopNavigation.scss';

const TopNavigation = props => {
  return (
    <div className="top-navigation">
        <div className="searchbar">
          <div className="left-icon-input">
            <img src={Search} alt="Search"/>
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="userprofile">
        <button className="mail">
             <img src={Message} alt="Email"/>           
              <Badge offset={[-10, -10]} count={5}>
                {/* <a href="https://demo" className="head-example" /> */}
              </Badge>
           </button>
           <button className="notification">
             <img src={Notification} alt="notification"/>
              <Badge offset={[-10, -10]} count={0} showZero>
                {/* <a href="" className="head-example" /> */}
              </Badge>
           </button>
           <button className="user">
             <img src={User} alt="user"/>
             <Badge color="#2dcc89" dot offset={[-6, -5]}>
            </Badge>
           </button>
        </div>
    </div>
  );
};


export default TopNavigation;