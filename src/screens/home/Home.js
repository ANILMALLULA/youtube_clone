import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videosActions";
import Loader from "react-loader-spinner";

function Home() {
  const dispatch = useDispatch();

  const { videos, loading } = useSelector((state) => state.homeVideos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return loading ? (
    <div
      style={{
        display: "flex",
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color='#0284c7' height={80} type='ThreeDots' width={80} />
    </div>
  ) : (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((i) => (
          <Col lg={3} md={4}>
            <Video video={i} key={i.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
