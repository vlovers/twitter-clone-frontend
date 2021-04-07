import { createSelector } from "reselect";
import { RootStore } from "../store";

import { LoadingStatus, TagsState } from "./contracts/state";

export const selectTags = (state: RootStore) : TagsState => state.tags;

export const selectLoadingStatus = (state: RootStore) : LoadingStatus => selectTags(state).LoadingStatus;
export const selectIsTagsLoading = (state: RootStore) : boolean => selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsTagsLoaded = (state: RootStore) : boolean => selectLoadingStatus(state) === LoadingStatus.LOADED;



export const selectTagsItems = createSelector(selectTags, tags => tags.items);
