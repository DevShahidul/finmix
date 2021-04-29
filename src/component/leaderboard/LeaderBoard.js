import React from 'react';
import Feed from '../Feed/Feed';
import './Leaderboard.scss';
import PostsCards from './PostCards/PostCards';
import LeaderBoardTop from './sectionTop/LeaderBoardTop';

const LeaderBoard = props => {
  return (
    <div className="leaderboard">
      <LeaderBoardTop/>
      <PostsCards/>
      <Feed/>
  </div>
  );
};



export default LeaderBoard;