import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { fetchRandomUsersItemsActionsInterface, RandomUsersActionsType } from './actionCreatores';

export function* fetchRandomUsersRequest({payload: tweetId}: fetchRandomUsersItemsActionsInterface) {
    // try {

        
    //     const item: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    //     console.log(item);
        
    //     yield put(setTweetData(item))
    // } catch (error) {
    //     yield put(setTweetLoadingStatus(LoadingStatus.ERROR))
    // }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* randomUsersSaga() {
    yield takeEvery(RandomUsersActionsType.FETCH_ITEMS, fetchRandomUsersRequest)
}