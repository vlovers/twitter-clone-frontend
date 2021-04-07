
import { Action } from 'redux';
import { AddFormState, LoadingStatus, Tweet, TweetsState } from './contracts/state'
export enum TweetsActionsType {
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_TWEET_DATA = "tweets/FETCH_TWEET_DATA",
    FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
    SET_ADD_FORM_STATE = "tweets/SET_ADD_FORM_STATE",

}

export interface SetTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items']
}

export interface fetchTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface setTweetsLoadingStatusActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus
}

export interface addTweetActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet
}

export interface fetchAddTweetActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string
}

export interface setAddFormStateInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState
}

export const setTweetsLoadingStatus = (payload: LoadingStatus) : setTweetsLoadingStatusActionsInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchAddTweet = (payload: string) : fetchAddTweetActionsInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});

export const addTweet = (payload: Tweet) : addTweetActionsInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});

export const setTweets = (payload: any ): SetTweetsActionsInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchTweets = () : fetchTweetsActionsInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const setAddFormState = (payload: AddFormState) : setAddFormStateInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
});


export type TweetsActions = SetTweetsActionsInterface | setAddFormStateInterface | fetchTweetsActionsInterface | setTweetsLoadingStatusActionsInterface | addTweetActionsInterface | fetchAddTweetActionsInterface;