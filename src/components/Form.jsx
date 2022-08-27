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
    category:"",
    title: "",
    writer: "",
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
          <label>카테고리</label>
          <select name="category">
            <option value="소설•시•에세이">소설•시•에세이</option>
            <option value="자기계발">자기계발</option>
            <option value="인문학•역사">인문학•역사</option>
            <option value="경제•경영">경제•경영</option>
            <option value="자연과학">자연과학</option>
            <option value="철학•예술•종교">철학•예술•종교</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div>
          <label>작가명</label>
          <input 
          type="text"
          name="writer"
          value={post.writer}
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
            <br></br>
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