
import { SmallDashOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import Comment from '../../assets/images/comment.svg';
import Like from '../../assets/images/like.svg';
import Send from '../../assets/images/send.svg';
import Share from '../../assets/images/share.svg';
import './post.scss';

const content = (
  <div>
    <p>Update</p>
    <p>Delete</p>
  </div>
);


const Post = (props) => {
  return (
    <div className="post-card">
      <div className="card-top">
          <div className="user-info">
              <div className="user-picture">
               <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user-name"/>
              </div>
              <div className="user-details">
                  <h5>{props.name}</h5>
                  <p>{props.username} <span>{props.time}</span></p>
              </div>
          </div>
          <div className="hover-btn">
              <Popover content={content} title="Settings">
                <SmallDashOutlined />
              </Popover>
          </div>
      </div>
      <div className="card-content">
          <h4>
          {props.posttitle}
          </h4>
          <p>{props.postexcerps} {"  "}<span className="read-more">Read More</span>  </p>
          <img className="post-image" src={props.postimage} alt={props.name}/>
      </div>
      <div className="post-action">
          <div className="like">
            <img src={Like} alt="like"/>
            <p>{props.like}+</p>
          </div>
          <div className="comment">
          <img src={Comment} alt="Comment"/>
            <p>{props.comment}+</p>
          </div>
          <div className="share">
          <img src={Share} alt="Share"/>
             <p>Share</p>
          </div>
          <div className="send">
          <img src={Send} alt="Send"/>
            <p>Send</p>
          </div>
      </div>
    </div>
  );
};


export default Post;