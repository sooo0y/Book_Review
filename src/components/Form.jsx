import React from "react";
import styled from "styled-components";

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const initialState = {
    id: 0,
    username: "",
    title: "",
    body: "",
  };

  

  return (
    <>
      <StContainerForm>
        <div>
          <label>작성자</label>
          <input type="text" />
        </div>
        <div>
          <label>책 제목</label>
          <input type="text" />
        </div>
        <div>
          <label>내용</label>
          <input type="text" />
        </div>      
        <div>
          </div>
            <p>이미지를 업로드해주세요</p>
            <input type="file" accept="image/*" />
          <div>
          <div>
            <StButtonForm onClick={() => { navigate('/') }}>취소</StButtonForm> 
            <input type="submit" value="추가하기"/>  
          </div>          
        </div>
      </StContainerForm>
    </>
  );
};
const StContainerForm = styled.div`
  background-color: whitesmoke;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  height: 800px;
`;
const StButtonForm = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;
export default Form;

export default Form;