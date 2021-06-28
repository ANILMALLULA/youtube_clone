import React, { useState } from "react";
import "./_comments.scss";
import Comment from "./comment/Comment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsByVideoId,
} from "../../redux/actions/commentsAction";

const Comments = ({ videoId, totalComments }) => {
  const [inpVal, setInpVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const commentHandler = (e) => {
    e.preventDefault();
    if (inpVal.length === 0) {
      return;
    }
    dispatch(addComment(videoId, inpVal));
    setInpVal("");
  };

  return (
    <div className='comments'>
      <p>{totalComments} comments</p>
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
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className='comments_list'>
        {_comments?.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
