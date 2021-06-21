import React from "react";
import "./_watchScreen_Hor_Vids.scss";
import { AiFillEye } from "react-icons/ai";
import numeral from "numeral";
import moment from "moment";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WatchScreen_Hor_Vids = () => {
  const seconds = moment.duration("10000").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center '>
      <Col xs={6} md={4} className='videoHorizontal__left'>
        <LazyLoadImage
          src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png'
          effect='blur'
          className='videoHorizontal__thumbnail'
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='videoHorizontal__duration'>
          <span>{_duration}</span>
        </span>
      </Col>
      <Col xs={6} md={8} className='videoHorizontal__right p-0'>
        <p className='videoHorizontal__title mb-1'>This is Test Title</p>
        <div className='videoHorizontal__details'>
          <span>
            <AiFillEye /> {numeral(100000).format("0.a")} views •
          </span>
          {moment("2020-08-01").fromNow()}
        </div>
        <div className='videoHorizontal__channel d-flex align-items-center my-1'>
          {/* <LazyLoadImage
            src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png'
            effect='blur'
          /> */}
          <p>My Channel</p>
        </div>
      </Col>
    </Row>
  );
};

export default WatchScreen_Hor_Vids;
