import React from "react";
import "./_videoMetaData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className='videoMetaData py-2'>
      <div className='videoMetaData__top'>
        <h5>Video Title</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(10000).format("0.a")} views
            {moment("2020-09-01").fromNow()}
          </span>
          <div>
            <span style={{ marginRight: "8px" }}>
              <MdThumbUp size={26} />
              {numeral(1000).format("0.a")} views
            </span>
            <span style={{ marginRight: "8px" }}>
              <MdThumbDown size={26} />
              {numeral(222222).format("0.a")} views
            </span>
          </div>
        </div>
      </div>
      <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
        <div className='d-flex'>
          <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='avatar_img'
            className='rounded-circle'
            style={{ marginRight: "12px" }}
          />
          <div className='d-flex flex-column'>
            <span>Channel Name</span>
            <span>{numeral(1000000).format("0.a")} Subscribers </span>
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'>Subscribe</button>
      </div>
      <div className='videoMetaData__description'>
        <ShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptates, natus, fuga magni ad reprehenderit totam nesciunt optio
          vel incidunt qui debitis consectetur placeat illum sapiente voluptate
          cum, eaque saepe. Voluptatem modi quia voluptate ipsam temporibus
          repellendus perspiciatis quaerat, iste iure molestias quas veniam
          ullam voluptates accusamus amet nesciunt aperiam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Repellat voluptates, natus,
          fuga magni ad reprehenderit totam nesciunt optio vel incidunt qui
          debitis consectetur placeat illum sapiente voluptate cum, eaque saepe.
          Voluptatem modi quia voluptate ipsam temporibus repellendus
          perspiciatis quaerat, iste iure molestias quas veniam ullam voluptates
          accusamus amet nesciunt aperiam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellat voluptates, natus, fuga magni
          ad reprehenderit totam nesciunt optio vel incidunt qui debitis
          consectetur placeat illum sapiente voluptate cum, eaque saepe.
          Voluptatem modi quia voluptate ipsam temporibus repellendus
          perspiciatis quaerat, iste iure molestias quas veniam ullam voluptates
          accusamus amet nesciunt aperiam.
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
