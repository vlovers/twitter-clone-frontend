import produce, { Draft } from 'immer';
import { TagsActions, TagsActionsType } from './actionCreatores';
import { TagsState, LoadingStatus } from './contracts/state';

const initionTweetsState: TagsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER
}

export const tagsReducer = produce ((draft: Draft<TagsState>, action: TagsActions) => {

    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;
        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.LoadingStatus = LoadingStatus.LOADED  ;
            break;
        case TagsActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload;
            break;
        default:
            break;
    }

}, initionTweetsState)