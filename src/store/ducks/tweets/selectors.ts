import { createSelector } from "reselect";
import { RootStore } from "../store";
import { AddFormState, LoadingStatus, TweetsState } from "./contracts/state";

export const selectTweetsStatee = (state: RootStore) : TweetsState => state.tweets;

export const selectLoadingStatus = (state: RootStore): LoadingStatus => selectTweetsStatee(state).LoadingStatus;
export const selectIsTweetsLoading = (state: RootStore): boolean => selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsTweetsLoaded = (state: RootStore): boolean => selectLoadingStatus(state) === LoadingStatus.LOADED;
export const selectAddFormState = (state: RootStore): AddFormState => selectTweetsStatee(state).addFormState;




export const selectTweetsItems = (state: RootStore) => selectTweetsStatee(state).items;
