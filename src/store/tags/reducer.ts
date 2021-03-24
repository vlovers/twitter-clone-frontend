import produce, { Draft } from 'immer';
import { TagsActions, TagsActionsType } from './actionCreatores';
import { TagsState, LoadingState } from './contracts/state';

const initionTweetsState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tagsReducer = produce ((draft: Draft<TagsState>, action: TagsActions) => {

    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADED  ;
            break;
        case TagsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
        default:
            break;
    }

}, initionTweetsState)