import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { fetchTweetDataActionsInterface, setTweetData, setTweetLoadingStatus, TweetActionsType } from './actionCreatores';
import { LoadingStatus, Tweet, TweetState } from './contracts/state';

export function* fetchTweetDataRequest({payload: tweetId}: fetchTweetDataActionsInterface) {
    try {

        
        const item: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);

        
        yield put(setTweetData(item))
    } catch (error) {
        yield put(setTweetLoadingStatus(LoadingStatus.ERROR))
    }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}