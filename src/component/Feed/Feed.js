import React from 'react';
import Post from '../post/Post';
import PostList from './data';
import './Feed.scss';


const singlePost = PostList.map((p) => 
  <Post name={p.Name}
  userpicture={p.userPic}
  username={p.userName}
  time={p.time}
  posttitle={p.postTitle}
  postexcerps={p.postExcerpt}
  postimage={p.postImage}
  like= {p.like}
  comment={p.comment} />
)


const Feed = props => {
  return (
    <div className="feed">
        {singlePost}
    </div>
  );
};



export default Feed;