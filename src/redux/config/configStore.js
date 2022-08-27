import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import form from "../modules/form";

const store = configureStore({
  reducer: {
		comment,
    form,
  },
});

export default store;