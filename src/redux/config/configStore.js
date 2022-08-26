import { createStore } from "redux";
import { combineReducers } from "redux";
import reviews from "../modules/reviews";

const rootReducer = combineReducers({
    // reviews : reviews
});
const store = createStore(rootReducer);

export default store;