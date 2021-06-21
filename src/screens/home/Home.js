import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosbyCategories,
} from "../../redux/actions/videosActions";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVid from "../../components/skeleton/SkeletonVid";

function Home() {
  const dispatch = useDispatch();

  const { videos, loading, activeCategory } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosbyCategories(activeCategory));
    }
  };
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className='spinner-border text-danger d-block mx-auto my-3'></div>
        }
        className='row'
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVid />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
}

export default Home;
