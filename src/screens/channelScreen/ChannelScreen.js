import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosByChannel } from "../../redux/actions/videosActions";
import "./channelScreen.scss";
import { Container, Col, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getChannelDetailsById } from "../../redux/actions/channelActions";
import numeral from "numeral";

const ChannelScreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  const { loading, videos } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );

  useEffect(() => {
    console.log(channelId);
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetailsById(channelId));
  }, [dispatch, channelId]);

  return (
    <>
      <div className='px-5 py-4 my-3  d-flex justify-content-between align-items-center channelHeader'>
        <div className='d-flex align-items-center'>
          <img
            src={snippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle'
          />

          <div className='mx-3 px-3 channelHeader__details'>
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>
      <Container>
        <Row className='my-2'>
          {!loading
            ? videos?.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} key={video.id} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => {
                <Col md={4} lg={3}>
                  <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                    <Skeleton width='100%' height='160px' count={20} />
                  </SkeletonTheme>
                </Col>;
              })}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
