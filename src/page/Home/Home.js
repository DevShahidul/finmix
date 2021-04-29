import { Layout } from 'antd';
import React from 'react';
import FeaturedIndex from '../../component/featuredIndexes/FeaturedIndexes';
import FinmixCreation from '../../component/FinmixCreation/FinmixCreation';
import Finmixes from '../../component/finmixes/Finmixes';
import LeaderBoard from '../../component/leaderboard/LeaderBoard';
import Menus from '../../component/Menu/Menus';
import Portfolio from '../../component/Portfolio/Portfolio';
import TopNavigation from '../../component/TopHeader/TopNavigation';
import './Home.scss';

const { Header, Content, Footer, Sider } = Layout;

const Home = props => {
  return (

    <Layout>
    <Sider
      width={240}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
        <Menus/>
        <FinmixCreation/>
    </Sider>
    <Layout className="content-layout">
      <Header className="site-layout-sub-header-background" style={{ padding: 0, marginTop: '30px'}}>
        <TopNavigation/>
      </Header>
      {/* <Content style={{ margin: '24px 16px 0' }}> */}
      <Content>
        <div className="site-layout-background main-content-section" style={{ padding: 24, minHeight: 360 }}>
          <div className="left-content">
            <Portfolio/>
            <Finmixes/>
            <FeaturedIndex/>
          </div>
          <div className="right-content">
            <LeaderBoard/>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  );
};



export default Home;