import React from "react";
import styled from "styled-components";

const CustomButton = ({ title, onClick }) => {
  return (
    <StButton onClick={onClick} title={title}>
      {title}
    </StButton>
  );
};

const StButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  cursor: pointer;
  margin: 5px;
`;

export default CustomButton;