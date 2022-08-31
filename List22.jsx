import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomButton from "./src/components/CustomButton";

const List = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.form);

  const [like, setLike] = useState([0]);

  return (
    <StList>
      <ListTop>
        <Category>
          <span>
            <b>전체보기</b>
          </span>

          {/* {data.map((data) => {
            return (
              <span>{data.category}</span>
            );
          })} */}

          <span value="집밥">집밥</span>
          <span value="브런치">브런치</span>
          <span value="야식">야식</span>
          <span value="간식">간식</span>
          <span value="분식">분식</span>
          <span value="다이어트">다이어트</span>
          <span value="기타">기타</span>
        </Category>
        <CustomButton
          title={"작성하기"}
          onClick={() => {
            navigate("/form");
          }}
        >
          추가하기
        </CustomButton>
      </ListTop>

      <Content>
        {data.map((form) => {
          like.push(0);
          return (
            <Card
              key={form.id}
              onClick={() => {
                navigate(`/detail/${form.id}`);
              }}
            >
              <b> {form.username} </b>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[form.id] = copy[form.id] + 1;
                  setLike(copy);
                }}
              >
                💛
              </span>{" "}
              {like[form.id]}
              <p> {form.category} </p>
                <h3> {form.title} </h3>
            </Card>
          );
        })}
      </Content>
    </StList>
  );
};

export default List;

const StList = styled.div`
  padding-top: 250px;
`;

const ListTop = styled.div`
  position: fixed;
  top: 120px;
  height: 100px;
  width: 100%;
  line-height: 100px;

  & button {
    position: absolute;
    top: 60px;
    right: 10px;
    cursor: pointer;
  }
  background-color: white;
`;

const Category = styled.div`
  text-align: center;
  & span {
    margin: 0 15px;
    padding: 10px;
    cursor: pointer;

    background-color: #5f9947;
    border: 1px solid #5f9947;
    border-radius: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  padding-left: 230px;
  padding-bottom: 50px;

  /* background-color: red; */
`;

const Card = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  padding-top: 20px;
  width: 330px;
  height: 370px;
  text-align: center;
  cursor: pointer;
`;
