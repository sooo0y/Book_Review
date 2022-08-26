import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import Comment from "../components/Comment";

const Detail = () => {
  return (
    <div style={{ display: "flex" }}>
      <Post />
      <Comment />
    </div>
  );
};

export default Detail;
