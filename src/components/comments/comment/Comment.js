import React from "react";
import moment from "moment";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className='comment p-2 d-flex my-2 '>
      <img
        src='https://www.w3schools.com/howto/img_avatar.png'
        alt='avatar_img'
        className='rounded-circle mx-3'
      />
      <div className='comment__body'>
        <p className='comment__header mb-1'>
          Anil Kumar • {moment("2020-09-01").fromNow()}
        </p>
        <p className='mb-0'>This is WONDERFUL MAN!!</p>
      </div>
    </div>
  );
};

export default Comment;
