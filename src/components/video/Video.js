import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className='video'>
      <div className='video__top'>
        <img
          src='https://i.ytimg.com/vi/SjcKX0HEAyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAplgrO6k2iAl6fvMOeueyoAmkM0g'
          alt=''
        />
        <span>0.45sec</span>
      </div>
      <div className='video__title'>
        My video thumbnail ....applied webkit box here to make content in one
        line
      </div>
      <div className='video__details'>
        <span>
          <AiFillEye /> 5M views •
        </span>
        <span>5 Days ago</span>
      </div>
      <div className='video__channel'>
        <img
          src='https://yt3.ggpht.com/ytc/AAUvwngkCuk72o0W_jxzPPfP1MgZ7-pkermgNgNX3pRIiQ=s68-c-k-c0x00ffffff-no-rj'
          alt=''
        />
        <p>My Channel</p>
      </div>
    </div>
  );
};

export default Video;
