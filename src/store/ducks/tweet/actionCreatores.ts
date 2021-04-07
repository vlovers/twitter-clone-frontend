
import { Action } from 'redux';
import { LoadingStatus, Tweet, TweetState } from './contracts/state'
export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
    FETCH_TWEETS = "FETCH_TWEETS"
}

export interface SetTweetDataActionsInterface extends Action<TweetActionsType>{
    type: TweetActionsType.SET_TWEET_DATA;
    payload: Tweet | undefined
}

export interface fetchTweetDataActionsInterface extends Action<TweetActionsType>{
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string
}

export interface setTweetLoadingStatusActionsInterface extends Action<TweetActionsType>{
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingStatus

}

export const setTweetData = (payload: Tweet | undefined): SetTweetDataActionsInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});

export const fetchTweetData = (payload: string): fetchTweetDataActionsInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload,
});

export const setTweetLoadingStatus = (payload: LoadingStatus): setTweetLoadingStatusActionsInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload

});

export type TweetActions = SetTweetDataActionsInterface | fetchTweetDataActionsInterface | setTweetLoadingStatusActionsInterface;