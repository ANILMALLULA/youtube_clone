import React, { useEffect } from "react";
import "./watchScreen.scss";
import { Row, Col } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import WatchScreenHorVids from "../../components/watchScreen_Hor_Vids/WatchScreen_Hor_Vids";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideos,
  getVideosById,
} from "../../redux/actions/videosActions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(getVideosById(id));
    dispatch(getRelatedVideos(id));
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

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedVideosLoading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <WatchScreenHorVids video={video} kety={video.id.videoId} />
            ))
        ) : (
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width='100%' height='130px' count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
