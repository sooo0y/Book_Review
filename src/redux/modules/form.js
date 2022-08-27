import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = [
  {
    id:1,
    username: "윤채원",
    category: "인문학·역사",
    title: "조선 왕조 실록",
    writer: "오세경",
    body: "태정태세문단세",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsNRN1Majiu52dwjeF5Qqx3uENlgjQoJopw&usqp=CAU",
  },
  {
    id:2,
    username: "김소연",
    category: "소설·시·에세이",
    title: "나의 라임 오렌지나무",
    writer: "윤사랑",
    body: "제제~!",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  },
  {
    id:3,
    username: "정창우",
    category: "자기계발",
    title: "성공하는 사람들의 7가지 습관",
    writer: "윤사랑",
    body: "성공합시다~!",
    image: "https://image.aladin.co.kr/product/43/50/cover500/8934913258_2.jpg",
  },
 
  
];

export const formSlice = createSlice({
  name : "form",
  initialState,
  reducers: { // Reducer 안에 만든 함수 자체가 리듀서 로직이자, Action creator
    
    addPost(state, action) {
      const newPost = [...state, action.payload];
      return newPost
    }
    
    

  }
});


export const { addPost } = formSlice.actions;
export default formSlice.reducer;