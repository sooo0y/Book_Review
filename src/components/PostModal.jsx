import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Modal = (props) => {
  const [editPost, setEditPost] = useState({
    title: "",
    ingredients: "",
    body: "",
  });

  const onEditHandler = (id, edit) => {
    axios.patch(`http:/yoriking.herokuapp.com/posts/${id}`, edit);
  };

  // const Edit = (e) => {
  //  if (e.target.value !== "") {
  //   return setEditPost({...editPost, [name]: e.target.value})
  // } else {return setEditPost({...editPost, [name]: '1'})}
  // }

  return (
    <StModal>
      <Card>
        <div>
          <label>요리명</label>
          <input
            type="text"
            name="title"
            defaultValue={props.form.title}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>재료</label>
          <textarea
            type="text"
            name="ingredients"
            defaultValue={props.form.ingredients}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                ingredients: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            type="text"
            name="body"
            defaultValue={props.form.body}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                body: e.target.value,
              });
            }}
          />
        </div>
        <div>
        <button
          type="button"
          onClick={() => {
            onEditHandler(props.form.id, editPost);
            props.setModal(!props.modal);
          }}
        >
          수정
        </button>
        <button
          type="button"
          onClick={() => {
            props.setModal(!props.modal);
          }}
        >
          취소
        </button>
        </div>
      </Card>
    </StModal>
  );
};
export default Modal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Card = styled.div`
  padding: 30px;
  position: absolute;
  top: calc(50vh - 250px);
  left: calc(50vw - 320px);
  background-color: white;
  display: block;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  & input {
    width: 400px;
  }
  & textarea {
    width: 400px;
    height: 130px;
  }
  & div {
    margin-top: 15px;
  }
`;
