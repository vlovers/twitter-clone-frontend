import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreatores';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
    try {
        
        const items: ReturnType<typeof TweetsApi.fetchTweets> = yield call(TweetsApi.fetchTweets);
        console.log(items);

        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}