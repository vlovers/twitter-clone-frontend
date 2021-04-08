
import { Action } from 'redux';
import { User } from '../user/contracts/state';


export enum RandomUsersActionsType {
    SET_ITEMS = 'randomUsers/SET_ITEMS',
    FETCH_ITEMS = 'randomUsers/FETCH_ITEMS',
}

export interface SetRandomUsersItemsActionsInterface extends Action<RandomUsersActionsType>{
    type: RandomUsersActionsType.SET_ITEMS;
    payload: User[]
}

export interface fetchRandomUsersItemsActionsInterface extends Action<RandomUsersActionsType>{
    type: RandomUsersActionsType.FETCH_ITEMS;
    payload: string
}

export const setRandomUsers = (payload: User[]): SetRandomUsersItemsActionsInterface => ({
    type: RandomUsersActionsType.SET_ITEMS,
    payload,
});

export const fetchRandomUsers = (payload: string): fetchRandomUsersItemsActionsInterface => ({
    type: RandomUsersActionsType.FETCH_ITEMS,
    payload,
});


export type RandomUsersActions = SetRandomUsersItemsActionsInterface | fetchRandomUsersItemsActionsInterface;