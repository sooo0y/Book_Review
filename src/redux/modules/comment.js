import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = [
  {
    parentId: 1,
    id: 1,
    desc: "참치액이 있는데 사용해도 될까요? 된다면 어느 정도 넣으면 되나요?"
  },
  {
    parentId: 1,
    id: 2,
    desc: "물에 끓여 절이지 않아도 되어서 편하네요~~"
  },
  {
    parentId: 1,
    id: 3,
    desc: "오이를 다 잘라서 해도 되나요??"
  },
  {
    parentId: 1,
    id: 4,
    desc: "냉장보관은 어느 정도 가능한가요??"
  },
  {
    parentId: 2,
    id: 1,
    desc: "유통기한 임박한 두부를 간단하게 처리할 방법을 찾다가 선택했는데, 너무 맛있게 잘 먹었어요 ^^"
  },
  {
    parentId: 2,
    id: 2,
    desc: "좋은 정보 감솨함다"
  },

  {
    parentId: 2,
    id: 3,
    desc: "아이도 잘 먹어서 좋아요!"
  },
  {
    parentId: 3,
    id: 1,
    desc: "우리 집이 붕세권이라니 >_<"
  },
  {
    parentId: 3,
    id: 2,
    desc: "손이 많이 가서 힘들지만 한 번쯤 만들어 먹어보는 것도 좋은 경험인 거 같네요~~ ㅎㅎㅎㅎ"
  },
  {
    parentId: 4,
    id: 1,
    desc: "다진 고추를 넣으면 더 매콤하고 맛있게 먹을 수 있겠네요!!"
  },
  {
    parentId: 4,
    id: 2,
    desc: "새콤달콤하니 너무 맛있어요~~~~"
  },
  {
    parentId: 4,
    id: 3,
    desc: "입맛없는 요즘같은 날씨에 딱 어울리는 레시피네요 ^^"
  },
];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {

    createComment(state, action) {
      state.push(action.payload);
    }

    // removeComment(state, action) {
    //   let index = state.findIndex((comment) => comment.id === action.payload);
    //   state.splice(index, 1);
    // },

    // updateComment(state, action) {
    //   let index = state.findIndex((post) => post.id === action.payload.id);
    //   state.splice(index, 1, action.payload);
    // },

  },

});

export const { createComment } = commentSlice.actions;
export default commentSlice.reducer;
