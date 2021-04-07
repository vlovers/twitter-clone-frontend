import produce, { Draft } from 'immer';
import { TweetActions, TweetActionsType } from './actionCreatores';
import { TweetState, LoadingStatus } from './contracts/state';

const initionTweetState: TweetState = {
    item: undefined,
    LoadingStatus: LoadingStatus.NEVER
}

export const tweetReducer = produce ((draft: Draft<TweetState>, action: TweetActions) => {

    switch (action.type) {
        case TweetActionsType.SET_TWEET_DATA:
            draft.item = action.payload;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;
        case TweetActionsType.FETCH_TWEET_DATA:
            draft.item = undefined;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;
        case TweetActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload;
            break;
        default:
            break;
    }

}, initionTweetState)