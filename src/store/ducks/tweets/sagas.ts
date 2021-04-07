import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet, TweetsState } from '../tags/contracts/state';
import { setTweetLoadingStatus } from '../tweet/actionCreatores';
import {
    addTweet,
    fetchAddTweetActionsInterface,
    setAddFormState,
    setTweets,
    setTweetsLoadingStatus,
    TweetsActionsType
} from './actionCreatores';
import { AddFormState, LoadingStatus } from './contracts/state';

export function* fetchTweetsRequest() {
    try {
        const items: TweetsState[] = yield call(TweetsApi.fetchTweets);
        console.log(items);
        
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingStatus(LoadingStatus.ERROR))
    }
    
}

export function* fetchAddTweetRequest({ payload: text } : fetchAddTweetActionsInterface) {
    try {
        
        const item: Tweet = yield call(TweetsApi.addTweet, text);
        
        yield put(addTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
    
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}