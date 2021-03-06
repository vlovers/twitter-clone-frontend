import { RootStore } from "../store";
import { LoadingStatus } from "../types";
import { UserState } from "./contracts/state";

export const selectUserState = (state: RootStore): UserState => state.user;

export const selectUserStatus = (state: RootStore): UserState['LoadingStatus']  => selectUserState(state).LoadingStatus;

export const selectIsAuth = (state: RootStore) : boolean => !!selectUserState(state).data;

export const selectUserData = (state: RootStore): UserState['data'] => selectUserState(state).data;

export const selectUserIsLoading = (state: RootStore): boolean => selectUserState(state).LoadingStatus === LoadingStatus.LOADING;



