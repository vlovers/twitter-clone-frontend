import { createSelector } from "reselect";
import { RootStore } from "../ducks/store";

import { LoadingState, TagsState } from "./contracts/state";

export const selectTags = (state: RootStore) : TagsState => state.tags;

export const selectLoadingState = (state: RootStore) : LoadingState => selectTags(state).loadingState;
export const selectIsTagsLoading = (state: RootStore) : boolean => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootStore) : boolean => selectLoadingState(state) === LoadingState.LOADED;



export const selectTagsItems = createSelector(selectTags, tags => tags.items);
