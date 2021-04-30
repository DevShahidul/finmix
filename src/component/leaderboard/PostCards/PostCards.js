import { Input } from 'antd';
import React from 'react';
import AddPhoto from '../../../assets/images/add_photo.svg';
import Attachment from '../../../assets/images/attachment.svg';
import Smile from '../../../assets/images/smile.svg';
import './PostCards.scss';


const PostsCards = props => {
  return (
    <div className="posts-cards">
        <div className="post-status">
          <div className="profile-picure">
              <img src="https://hist.cms.arts.ubc.ca/wp-content/uploads/sites/23/2019/06/IMG_1422-2.jpg" alt="kamal Hossan"/>
          </div>
          <div className="text-area">
            <Input.TextArea placeholder="Whats on your mind"/>
          </div>
        </div>
        <div className="attachment">
          <div className="attachment-types">
            <button>
              <img src={Attachment} alt=""/>
            </button>
            <button>
              <img src={AddPhoto} alt=""/>
              </button>
            <button>
              <img  src={Smile} alt=""/>
            </button>
          </div>
          <button className="btn create">Post</button>
        </div>
    </div>
  );
};



export default PostsCards;