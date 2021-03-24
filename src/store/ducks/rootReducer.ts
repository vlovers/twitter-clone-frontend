import { combineReducers } from "redux";
import { tagsReducer } from "../tags/reducer";
import { tweetsReducer } from "./tweets/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer
})