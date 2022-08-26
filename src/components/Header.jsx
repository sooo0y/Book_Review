import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

  const navigate = useNavigate();

  return (
  <StHeader>
  <h1>BOOK REVIEW</h1>
  <button
    onClick={() => {
      navigate("/form");
    }}
    > 추가하기 </button>
  </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 150px;
  width: 100%;
  background-color: red;
`;
