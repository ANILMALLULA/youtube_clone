import React from "react";
import "./_comments.scss";
import Comment from "./comment/Comment";

const Comments = () => {
  const commentHandler = () => {};
  return (
    <div className='comments'>
      <p>1234 comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt='avatar_img'
          className='rounded-circle mx-3'
        />
        <form
          onSubmit={commentHandler}
          action=''
          className='d-flex flex-grow-1'
        >
          <input
            type='text'
            className='flex-grow-1'
            placeholder='Write a comment here'
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className='comments_list'>
        {[...Array(15)].map((x) => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
