import { RootStore } from "../store";
import { UserState } from "./contracts/state";

export const selectUserState = (state: RootStore): UserState => state.user;

export const selectUserStatus = (state: RootStore): UserState['status']  => selectUserState(state).status;
export const selectUserData = (state: RootStore): UserState['data'] => selectUserState(state).data;


