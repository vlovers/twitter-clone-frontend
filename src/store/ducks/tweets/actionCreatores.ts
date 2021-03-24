
import { Action } from 'redux';
import { LoadingState, TweetsState } from './contracts/state'
export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items']
}

export interface fetchTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface setTweetsLoadingStateActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState

}

export const setTweets = (payload: any): SetTweetsActionsInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchTweets = (): fetchTweetsActionsInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): setTweetsLoadingStateActionsInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload

});

export type TweetsActions = SetTweetsActionsInterface | fetchTweetsActionsInterface | setTweetsLoadingStateActionsInterface;