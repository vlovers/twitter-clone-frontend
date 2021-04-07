import { Action } from 'redux';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { LoadingStatus } from '../types';
import { User, UserState } from './contracts/state';

export enum UserActionsType {
    SET_USER_DATA = 'tweet/SET_USER_DATA',
    FETCH_SIGN_IN = 'tweet/FETCH_SIGN_IN',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface FetchUserDataActionsInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_SIGN_IN;
    payload: LoginFormProps
}

export interface SetUserDataActionsInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_USER_DATA;
    payload: User | undefined
}

export interface SetUserLoadingStatusActionsInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_LOADING_STATE;
    payload: LoadingStatus

}

export const setUserData = (payload: UserState['data']): SetUserDataActionsInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchUserDataActionsInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
});

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStatusActionsInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload

});

export type TweetActions = SetUserLoadingStatusActionsInterface | SetUserDataActionsInterface | FetchUserDataActionsInterface;