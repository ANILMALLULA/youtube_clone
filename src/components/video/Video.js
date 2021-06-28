import React from "react";
import "./_video.scss";
import request from "../../api";

import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import numeral from "numeral";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";

const Video = ({ video, channelScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const history = useHistory();

  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);
  const [channelIcon, setchannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setduration(items[0].contentDetails.duration);
      setviews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setchannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

  const videoClickHandler = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <div className='video' onClick={videoClickHandler}>
      <div className='video__top'>
        {/* <img src={medium.url} alt='' /> */}
        <LazyLoadImage src={medium.url} effect='blur' />
        <span className='video__top__duration'>{_duration}</span>
      </div>
      <div className='video__title'>{title}</div>
      <div className='video__details'>
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      {!channelScreen && (
        <div className='video__channel'>
          {/* <img src={channelIcon?.url} alt='' /> */}
          <LazyLoadImage src={channelIcon?.url} effect='blur' />
          <p>{channelTitle}</p>
        </div>
      )}
    </div>
  );
};

export default Video;
