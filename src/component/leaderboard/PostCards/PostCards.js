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
              <img src="https://scontent.fdac40-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/100770718_2061640880649037_8748155934439636992_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeECQt-jr4cOaVQkhQZv6I0xKp4NdlkxnKAqng12WTGcoLu8RuYan1pnsUDQ31RyNVhAnEXhrHdN2CPlFXLREYDS&_nc_ohc=SKCTyNgZksYAX_Q4RBo&_nc_ht=scontent.fdac40-1.fna&tp=27&oh=7e8634fbb231b565f3a07be70aaca979&oe=60ADED28" alt="kamal Hossan"/>
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