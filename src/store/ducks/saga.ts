import { all } from "redux-saga/effects";
import { randomUsersSaga } from "./randomUsers/sagas";
import { tagsSaga } from "./tags/sagas";
import { tweetSaga } from "./tweet/sagas";
import { tweetsSaga } from "./tweets/sagas";
import { userSaga } from "./user/sagas";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tweetSaga(),
        tagsSaga(),
        userSaga(),
        randomUsersSaga(),

    ])
  }