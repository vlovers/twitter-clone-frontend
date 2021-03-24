import { createSelector } from "reselect";
import { RootStore } from "../store";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootStore) : TweetsState => state.tweets;

export const selectLoadingState = (state: RootStore) : LoadingState => selectTweets(state).loadingState;
export const selectIsTweetsLoading = (state: RootStore) : boolean => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootStore) : boolean => selectLoadingState(state) === LoadingState.LOADED;



export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);
