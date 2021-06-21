import React from "react";
import "./_watchScreen.scss";
import { Row, Col } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import WatchScreenHorVids from "../../components/watchScreen_Hor_Vids/WatchScreen_Hor_Vids";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";

const WatchScreen = () => {
  const { id } = useParams();

  return (
    <Row>
      <Col lg={8}>
        <div className='watchScreen__player'>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder='0'
            title='My video'
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </div>
        <VideoMetaData />
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
