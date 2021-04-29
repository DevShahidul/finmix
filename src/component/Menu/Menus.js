import { Menu } from "antd";
import React from 'react';
import Home from '../../assets/images/Home.svg';
import { CreateMemoIcons, HelpIcons, ProfileIcons, SettingIcons } from "../icons";
import './Menu.scss';


const Menus = props => {
  return (
 <>
 
 <div className="brand">
    <h2>Finmix</h2>
  </div>
    <Menu className="menus">
        <Menu.Item className="active">
        <img src={Home} alt="Home"/>
          <p>Dashboard</p>
        </Menu.Item>
        <Menu.Item>
          <ProfileIcons/>
          <p>Account</p>
        </Menu.Item>
        <Menu.Item>
          <CreateMemoIcons/>
          <p>Create Memo</p>
        </Menu.Item>
        <Menu.Item>
          <SettingIcons/>
          <p>Settings</p>
        </Menu.Item>
        <Menu.Item>
          <HelpIcons/>
          <p>Help</p>
        </Menu.Item>
      </Menu>

 </>
  );
};



export default Menus;