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
           <div className="mail">
             <img src={Message} alt="Email"/>           
              <p className="counter">2</p>
           </div>
           <div className="notification">
             <img src={Notification} alt="notification"/>
             <p className="counter">4</p>
           </div>
           <div className="user">
             <img src={User} alt="user"/>
           </div>
        </div>
    </div>
  );
};


export default TopNavigation;