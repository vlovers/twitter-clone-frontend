import { Action } from 'redux';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { RegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';
import { LoadingStatus } from '../types';
import { User, UserState } from './contracts/state';

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface FetchSignInActionsInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_SIGN_IN;
    payload: LoginFormProps
}

export interface FetchSignUpActionsInterface extends Action<UserActionsType>{
    type: UserActionsType.FETCH_SIGN_UP;
    payload: RegisterFormProps
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

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionsInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
});

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionsInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload,
});

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStatusActionsInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload

});

export type TweetActions = SetUserLoadingStatusActionsInterface | SetUserDataActionsInterface | FetchSignUpActionsInterface | FetchSignInActionsInterface;