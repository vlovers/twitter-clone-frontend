import { createSelector } from "reselect";
import { RootStore } from "../store";
import { LoadingStatus, TweetState } from "./contracts/state";

export const selectTweetData = (state: RootStore) : TweetState => state.tweet;

export const selectLoadingStatus = (state: RootStore) : LoadingStatus => selectTweetData(state).LoadingStatus;
export const selectIsTweetDataLoading = (state: RootStore) : boolean => selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsTweetDataLoaded = (state: RootStore) : boolean => selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetsItems = createSelector(selectTweetData, tweet => tweet.item);
