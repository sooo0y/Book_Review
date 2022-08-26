import React from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";


let number = 1;
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const initialState = {
    id: 0,
    username: "",
    title: "",
    body: "",
  };
  
  const [post, setPost] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({...post, [name]: value});
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(({...post, id: number}));
    setPost(initialState);
    number++;
  };


  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div>
          <label>작성자</label>
          <input 
          type="text"
          name="username"
          value={post.username}
          onChange={onChangeHandler} 
          />
        </div>
        <div>
          <label>책 제목</label>
          <input 
          type="text"
          name="title"
          value={post.title}
          onChange={onChangeHandler} 
          />
        </div>
        <div>
          <label>내용</label>
          <input 
          type="text"
          name="body"
          value={post.body}
          onChange={onChangeHandler} 
          />
        </div>      
        <div>
          </div>
            <p>이미지를 업로드해주세요</p>
            <input type="file" accept="image/*" />
          <div>
          <div>
            <button onClick={() => { navigate('/') }}>취소</button> 
            <input type="submit" value="추가하기"/>  
          </div>          
        </div>
      </div>
    </form>
  );
};
// const StContainerForm = styled.div`
//   background-color: whitesmoke;
//   width: 100%;
//   max-width: 1200px;
//   min-width: 800px;
//   height: 800px;
// `;
// const StButtonForm = styled.button`
//   border: 1px solid ${({ borderColor }) => borderColor};
//   cursor: pointer;
// `;
export default Form;