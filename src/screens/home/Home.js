import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";

function Home() {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map((i) => (
          <Col lg={3} md={4} key={i}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
