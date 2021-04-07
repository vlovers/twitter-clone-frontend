import produce, { Draft } from 'immer';
import { LoadingStatus } from '../types';
import { TweetActions, UserActionsType } from './actionCreatores';
import { UserState } from './contracts/state';
 

const initionUserState: UserState = {
    data: undefined,
    status: LoadingStatus.NEVER
}

export const userReducer = produce ((draft: Draft<UserState>, action: TweetActions) => {

    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload;
            draft.status = LoadingStatus.SECCESS;
            break;
        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload;
            break;
        default:
            break;
    }

}, initionUserState)