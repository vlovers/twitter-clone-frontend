import { combineReducers } from "redux";
import { randomUsersReducer } from "./randomUsers/reducer";
import { tagsReducer } from "./tags/reducer";
import { tweetReducer } from "./tweet/reducer";
import { tweetsReducer } from "./tweets/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
    user: userReducer,
    randomUsers: randomUsersReducer
})