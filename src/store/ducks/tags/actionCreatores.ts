
import { Action } from 'redux';
import { LoadingStatus, TagsState } from './contracts/state'
export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionsInterface extends Action<TagsActionsType>{
    type: TagsActionsType.SET_TAGS;
    payload: TagsState['items']
}

export interface fetchTagsActionsInterface extends Action<TagsActionsType>{
    type: TagsActionsType.FETCH_TAGS;
}

export interface setTagsLoadingStatusActionsInterface extends Action<TagsActionsType>{
    type: TagsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus

}

export const setTags = (payload: any): SetTagsActionsInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload,
});

export const fetchTags = (): fetchTagsActionsInterface => ({
    type: TagsActionsType.FETCH_TAGS,
});

export const setTagsLoadingStatus = (payload: LoadingStatus): setTagsLoadingStatusActionsInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload

});

export type TagsActions = SetTagsActionsInterface | fetchTagsActionsInterface | setTagsLoadingStatusActionsInterface;