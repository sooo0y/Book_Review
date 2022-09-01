import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { __getPosts } from "../redux/modules/form";
import axios from "axios";
import CustomButton from "./CustomButton";
import useTitle from '../hooks/useTitle';

const List = () => {
  const titleUpdater = useTitle('요리킹')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //json-server
  const { isLoading, error, posts } = useSelector((state) => state.form);

  const [like, setLike] = useState([0]);

  const onEditHandler = (id, edit) => {
    axios.patch(`http://localhost:3001/posts/${id}`, edit);
  };

  // const likePlus = (e) => {
  //   e.stopPropagation();
  //   const updateLike = likes+1
  // }

  setTimeout(() => titleUpdater('Home'), 3000);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // category

  // const category = [
  //   "전체보기",
  //   "집밥",
  //   "브런치",
  //   "야식",
  //   "간식",
  //   "분식",
  //   "다이어트",
  //   "기타",
  // ];
  // const filteredCategory = posts.filter((post) => post.category == category);

  return (
    <StList>
      <ListTop>
        <Category>
          <span>
            <b>전체보기</b>
          </span>
          <span>집밥</span>
          <span>브런치</span>
          <span>야식</span>
          <span>간식</span>
          <span>분식</span>
          <span>다이어트</span>
          <span>기타</span>
        </Category>

        <CustomButton
          title="추가하기"
          onClick={() => {
            navigate("/form");
          }}
        />
      </ListTop>

      <Content>
        {posts.map((post) => {
          like.push(0);
          return (
            <Card
              key={post.id}
              onClick={() => {
                navigate(`/detail/${post.id}`);
              }}
            >
              <b> {post.username} </b>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[post.id] = copy[post.id] + 1;
                  setLike(copy);
                }}
              >
                💛
              </span>{" "}
              {like[post.id]}
              <p>
                {" "}
                <b>{post.category}</b>{" "}
              </p>
              <h3> {post.title} </h3>
            </Card>
          );
        })}
      </Content>
    </StList>
  );
};

export default List;

const StList = styled.div`
  margin: auto 50px;
  padding-top: 250px;
  padding-bottom: 50px;
`;

const ListTop = styled.div`
  position: fixed;
  top: 120px;
  height: 100px;
  width: 100%;
  line-height: 100px;

  & button {
    position: absolute;
    top: 40px;
    right: 50px;
    margin-right: 100px;
    float: right;
    cursor: pointer;
  }

  background-color: white;
`;

const Category = styled.div`
  text-align: center;
  & span {
    margin: 0 15px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #5f9947;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;
  margin-left: 100px;
  width: 120%;
`;

const Card = styled.div`
  padding-top: 30px;
  border: 1px solid black;
  border-radius: 15px;
  width: 350px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  /* background-color: ; */
`;
