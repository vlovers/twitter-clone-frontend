import produce, { Draft } from 'immer';
import { LoadingStatus } from '../types';
import { TweetActions, UserActionsType } from './actionCreatores';
import { UserState } from './contracts/state';
 

const initionUserState: UserState = {
    data: undefined,
    LoadingStatus: LoadingStatus.NEVER
}

export const userReducer = produce ((draft: Draft<UserState>, action: TweetActions) => {

    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload;
            draft.LoadingStatus = LoadingStatus.SECCESS;
            break;
        case UserActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload;
            break;
        case UserActionsType.SET_LOG_OUT:
            draft.data = undefined;
            draft.LoadingStatus = LoadingStatus.SECCESS;
            break;
        default:
            break;
    }

}, initionUserState)