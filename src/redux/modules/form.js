import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = [
  {
    id:1,
    username: "윤채원",
    category: "기타",
    title: "조선 왕조 실록",
    writer: "오세경",
    body: "태정태세문단세",
  },
  {
    id:2,
    username: "김소연",
    category: "기타",
    title: "나의 라임 오렌지나무",
    writer: "윤사랑",
    body: "제제~!",
  }
];



export const formSlice = createSlice({
  name : "form",
  initialState,
  reducers: { // Reducer 안에 만든 함수 자체가 리듀서 로직이자, Action creator
    

  }
});


export const { 리듀서로직 } = formSlice.actions;
export default formSlice.reducer;