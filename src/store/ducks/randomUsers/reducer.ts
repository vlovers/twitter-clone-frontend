import produce, { Draft } from 'immer';import { LoadingStatus } from '../types';
import { RandomUsersActions, RandomUsersActionsType } from './actionCreatores';
import { RandomUsersState } from './contracts/state';
;

const initionTweetState: RandomUsersState = {
    items: undefined,
    status: LoadingStatus.NEVER
}

export const randomUsersReducer = produce ((draft: Draft<RandomUsersState>, action: RandomUsersActions) => {

    switch (action.type) {
        case RandomUsersActionsType.SET_ITEMS:
            draft.items = action.payload;
            draft.status = LoadingStatus.LOADED;
            break;
        case RandomUsersActionsType.FETCH_ITEMS:
            draft.status = LoadingStatus.LOADING;
            break;
        default:
            break;
    }

}, initionTweetState)