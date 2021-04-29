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
      <Sider  className="left-sider" width={240}
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
    <Layout className="site-layout" style={{ marginLeft: 240 }}>
      <Header className="site-layout-background" style={{ padding: 0, margin: '30px 30px 0' }}>
        <TopNavigation/>
      </Header>
      <Content className="main-content-section" style={{ margin: '24px 30px 0', overflow: 'initial' }}>
        <div className="left-content">
        <Portfolio/>
        <Finmixes/>
        <FeaturedIndex/>
        </div>
        <div className="right-content">
          <LeaderBoard/>
        </div>
      </Content>
      {/* <Footer>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
  );
};



export default Home;