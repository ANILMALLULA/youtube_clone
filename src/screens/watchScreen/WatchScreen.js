import React, { useEffect } from "react";
import "./_watchScreen.scss";
import { Row, Col } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import WatchScreenHorVids from "../../components/watchScreen_Hor_Vids/WatchScreen_Hor_Vids";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosById } from "../../redux/actions/videosActions";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <Row>
      <Col lg={8}>
        <div className='watchScreen__player'>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder='0'
            title={video?.snippet?.title}
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h4>Loading...</h4>
        )}

        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <WatchScreenHorVids />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
