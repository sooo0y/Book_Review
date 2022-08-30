import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { createComment } from "../redux/modules/comment";
import { useParams } from "react-router-dom";

let number = 2;

const Comment = () => {

  const {id} = useParams();

  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment);

  const filteredComment = commentData.filter((comment) => comment.parentId === id)

  const initialState = {
    parentId: id,
    id: 0,
    desc: "",
  };

  const [comment, setComment] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value, id: number });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(createComment({ ...comment, id: number }));
    setComment(initialState);
    number++;
  };


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>댓글</label>
        <input
          type="text"
          name="desc"
          value={comment.desc}
          onChange={onChangeHandler}
        />
        <button>입력하기</button>
      </form>

      <div>
        {filteredComment.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.desc}</p>
              <button>수정</button>
              <button>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

const Dd = styled.div`
  border-bottom: 1px solid grey;
`;