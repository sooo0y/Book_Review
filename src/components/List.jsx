import React from "react";
import styled from "styled-components";

const List = () => {

  return (
    <StList>
      <Content>

        <Card>
          {/* <img url=''art="My Image"/> */}
          <ImageBox>Image</ImageBox>
          <p> 책 제목 </p>
          <p> 작성자 </p>
        </Card>

        <Card>
          {/* <img url=''art="My Image"/> */}
          <ImageBox>Image</ImageBox>
          <p> 책 제목 </p>
          <p> 작성자 </p>
        </Card>

        <Card>
          {/* <img url=''art="My Image"/> */}
          <ImageBox>Image</ImageBox>
          <p> 책 제목 </p>
          <p> 작성자 </p>
        </Card>
        

      </Content>
    </StList>
  );
};

export default List;

const StList = styled.div`
  padding-top: 150px;
  :button {
    align-items: right;
  }
`;

const Content = styled.div`
  /* display: flex; */
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 30px;
  margin: 10px;
  width: 200px;
  height: 250px;
`;

const ImageBox = styled.div`
  text-align: center;
  margin: auto;
  border: 1px solid black;
  width: 150px;
  height: 150px;
`;

